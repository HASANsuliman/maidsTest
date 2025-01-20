import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  selectAllUsers,
  selectLoading,
  selectpage,
  totalPage,
} from '../../../State/selector';
import * as UserActions from '../../../State/action';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { concatMap, map, Observable, tap } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from '../../Core/loader/loader.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { HighlightDirective } from '../../../Services/Helpers/highlight.directive';
import { User } from '../../../Models/User';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    LoaderComponent,
    HighlightDirective,
    MatButtonModule
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
  page!: number ;
  totalPage!: number ;
  totalPage$: Observable<number> = this.store.select(totalPage);
  page$: Observable<number> = this.store.select(selectpage);
  users$: Observable<User[]> = this.store.select(selectAllUsers);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.page$.pipe(tap(x=>this.page=x), map((x) => this.store.dispatch(UserActions.loadUsers({ page: x })))).subscribe();
    this.totalPage$.subscribe(res=> this.totalPage =res)
    // this.store.dispatch(UserActions.loadUsers({ page: this.page }));
    // loading via script method script tag
    // google insight
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
  }
}
