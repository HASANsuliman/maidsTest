import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../../../Services/User/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
interface UserDetail {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  user: UserDetail | null = null;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.fetchUserDetail(+userId);
    }
  }

  fetchUserDetail(id: number) {
    this.userService.getUserDetail(id).subscribe(response => {
      this.user = response.data;
    });
  }

  goBack() {
    this.location.back();
  }
}
