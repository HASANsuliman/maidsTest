import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe, Location } from '@angular/common';
import { UserService } from '../../../Services/User/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate } from '@angular/animations';
import { LoaderComponent } from '../../Core/loader/loader.component';
import { selectLoading, selectSelectedUser } from '../../../State/selector';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../State/action';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LoaderComponent,
    AsyncPipe,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.3s ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.3s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserDetailsComponent {
  user: User | null = null;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private store: Store
  ) {}
  loading$ = this.store.select(selectLoading);
  User$ = this.store.select(selectSelectedUser);
  ngOnInit() {
    //we can get it from store too
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    if (userId) {
      this.store.dispatch(UserActions.selectUser({ userId: userId }))!;
      this.User$.subscribe((x) => (this.user = x));
    }
  }

  goBack() {
    this.location.back();
  }
}
