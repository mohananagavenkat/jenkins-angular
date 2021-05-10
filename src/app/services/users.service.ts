import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page?: unknown): Observable<UserResponse> {
    const options = page
      ? { params: new HttpParams().set('page', page as string) }
      : {};
    return this.http.get<UserResponse>('https://reqres.in/api/users', options);
  }
}
