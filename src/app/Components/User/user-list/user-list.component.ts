import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectAllUsers,
  selectCurrentPage,
  selectLoading,
} from '../../../State/selector';
import * as UserActions from '../../../State/action';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from '../../Core/loader/loader.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { HighlightDirective } from '../../../Services/Helpers/highlight.directive';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    LoaderComponent,
    HighlightDirective,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}
  page: number = 1;
  users$: Observable<any> = this.store.select(selectAllUsers);
  currentPage$ = this.store.select(selectCurrentPage).subscribe((page) => {
    this.page = page;
  });
  loading$ = this.store.select(selectLoading);
  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers({ page: this.page }));
  }
  Forward() {
    this.page += 1;
    this.store.dispatch(UserActions.loadUsers({ page: this.page }));
  }
  Backward() {
    this.page -= 1;
    this.store.dispatch(UserActions.loadUsers({ page: this.page }));
  }

  goToUserDetails(id: number) {
    this.router.navigate(['/users', id]);
    this.store.dispatch(UserActions.selectUser({ userId: id }));
  }
}
