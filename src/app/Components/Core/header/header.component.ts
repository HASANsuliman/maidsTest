import { selectAllUsers } from './../../../State/selector';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import * as UserActions from '../../../State/action';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    AsyncPipe,
    NgFor,
    NgIf,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  Title: string = 'User Dashboard';
  users$: Observable<any> = this.store.select(selectAllUsers);
  userSubj = new BehaviorSubject<any>([]);
  constructor(private store: Store, private router: Router) {}

  onSearch(event: any): void {
    const id = event.target.value;
    if (id) {
      this.store.select(selectAllUsers).subscribe((user) => {
        this.userSubj.next(user.filter((x) => x.id == id));
      });
    }
  }
  goToUserDetails(id: number) {
    this.router.navigate(['/users', id]);
    this.userSubj.next([]);
    this.store.dispatch(UserActions.selectUser({ userId: id }));
  }
}
