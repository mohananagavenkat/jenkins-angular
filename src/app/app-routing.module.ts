import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServerComponent } from './add-server/add-server.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { ServerListComponent } from './server-list/server-list.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'add-server',
    component: AddServerComponent,
  },
  {
    path: 'servers',
    component: ServerListComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'test',
    component: TestComponent,
    data: {
      reuseRoute : true
    }
  },
  {
    path: 'dropdown',
    component: MyDropdownComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
