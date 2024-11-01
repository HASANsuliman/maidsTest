import { Routes } from '@angular/router';
import { UserListComponent } from './Components/User/user-list/user-list.component';
import { UserDetailsComponent } from './Components/User/user-details/user-details.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];
