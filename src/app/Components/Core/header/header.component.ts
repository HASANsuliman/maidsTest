import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  Title: string = 'User Dashboard';
  onSearch(event: any): void {
    const id = event.target.value;
    if (id) {
      // this.store.dispatch(loadUserDetails({ id }));
    }
  }
}
