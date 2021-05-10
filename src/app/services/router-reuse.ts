/* istanbul ignore file */

import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private handlers: { [key: string]: any } = {};
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
      if (!route.routeConfig || route.routeConfig.loadChildren) {
          return false;
      }
      let shouldReuse = false;
      if (route.routeConfig.data) {
          route.routeConfig.data.reuseRoute
              ? (shouldReuse = true)
              : (shouldReuse = false);
      }
      return shouldReuse;
  }
  store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
      if (handler) {
          if (route.data && route.data.detached) {
              route.data.detached.next(true);
          }
          const url = this.getUrl(route);
          this.handlers[url] = handler;
      }
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
      const url = this.getUrl(route);
      return !!route.routeConfig && !!this.handlers[url];
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
      if (!route.routeConfig || route.routeConfig.loadChildren) {
          return null;
      }
      if (route.data) {
          if (route.data.detached) {
              route.data.detached.next(false);
          } else {
              route.data.detached = new BehaviorSubject<boolean>(false);
          }
      }
      const url = this.getUrl(route);
      return this.handlers[url];
  }
  shouldReuseRoute(
      future: ActivatedRouteSnapshot,
      current: ActivatedRouteSnapshot
  ): boolean {
      let reUseUrl = false;
      if (future.routeConfig) {
          if (future.routeConfig.data) {
              reUseUrl = future.routeConfig.data.reuseRoute;
          }
      }
      const defaultReuse = future.routeConfig === current.routeConfig;
      return reUseUrl || defaultReuse;
  }
  getUrl(route: ActivatedRouteSnapshot): string {
      let url = '';
      if (route.pathFromRoot.length > 0) {
          route.pathFromRoot.forEach((activatedRoute) => {
              url = this.getRouteUrl(activatedRoute, url);
          });
      }
      return url;
  }
  private getRouteUrl(
      activatedRoute: ActivatedRouteSnapshot,
      url = ''
  ): string {
      if (activatedRoute.routeConfig && activatedRoute.routeConfig.path) {
          url += '/' + activatedRoute.routeConfig.path;
          if (activatedRoute.params) {
              Object.entries(activatedRoute.params).forEach((entry) => {
                  const [key, value] = entry;
                  url = url?.replace(':' + key, value);
              });
          }
      }
      return url;
  }
  deleteRouteByUrl(url: string): void {
      if (this.handlers[url] && this.handlers[url].componentRef) {
          this.handlers[url].componentRef.destroy();
          delete this.handlers[url];
      }
  }
  deleteAllRoutes(): void {
      for (const url in this.handlers) {
          this.deleteRouteByUrl(url);
      }
      this.handlers = {};
  }
}
