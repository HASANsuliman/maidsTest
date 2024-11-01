import { Component, inject } from '@angular/core';
import { UserService } from '../../../Services/User/user.service';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllUsers, selectLoading, selectCurrentPage } from '../../../State/selector';
import * as UserActions from '../../../State/action';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule,MatProgressSpinnerModule,MatCardModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  store =inject(Store)

  dataSource = new MatTableDataSource<User>([]);
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'avatar'];


  loading$ = this.store.select(selectLoading);
  currentPage$ = this.store.select(selectCurrentPage);
  constructor(private userService: UserService, private router: Router,) {}

  ngOnInit() {
    // Dispatch the action to load users for the first page
    this.store.dispatch(UserActions.loadUsers({ page: 1 }));

    // Subscribe to the users$ observable to update the dataSource
    this.store.select(selectAllUsers).subscribe((users) => {
      if (users) {
        this.dataSource.data = users;
      }
    });
  }
 
  onPageChange(page: number) {
    this.store.dispatch(UserActions.loadUsers({ page }));
  }

  onSelectUser(userId: number) {
    this.store.dispatch(UserActions.selectUser({ userId }));
  }
}
