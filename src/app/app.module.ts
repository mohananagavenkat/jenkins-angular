import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddServerComponent } from './add-server/add-server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServerListComponent } from './server-list/server-list.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { ReadMoreCardComponent } from './read-more-card/read-more-card.component';
import { ShowMoreDirective } from './directives/show-more.directive';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownDirective } from './directives/dropdown.directive';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { UnlessDirective } from './directives/unless.directive';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './services/router-reuse';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LibModule } from './lib/lib.module';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComponent,
    ServerListComponent,
    HighlighterDirective,
    ReadMoreCardComponent,
    ShowMoreDirective,
    TestComponent,
    SignupComponent,
    UserListComponent,
    DropdownDirective,
    MyDropdownComponent,
    UnlessDirective,
    TabsComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    LibModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
