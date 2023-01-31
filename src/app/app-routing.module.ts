import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {TachesUserComponent} from "./list-users/taches-user/taches-user.component";

const routes: Routes = [
  {
    path: 'list-users',
    component: ListUsersComponent
  },
  {
    path: '',
    redirectTo: '/list-users',
    pathMatch: 'full'
  },
  {
    path: 'user/:idUser/todos',
    component: TachesUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
