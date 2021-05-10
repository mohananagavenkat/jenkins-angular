import { Component, OnInit } from '@angular/core';
import { User, UserResponse } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  userResponse: UserResponse;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers().pipe(
      tap((response) => {
        this.userResponse = response;
      }),
      map((response) => {
        return response.data;
      })
    );
  }
}
