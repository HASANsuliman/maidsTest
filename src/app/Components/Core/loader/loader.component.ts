import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../../Services/Helpers/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule, RouterOutlet],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  isLoading: Observable<boolean>;

  constructor(private loadingService: LoaderService) {
    this.isLoading = this.loadingService.isLoading;
    this.isLoading.subscribe((state) => console.log('Loading state:', state)); // Debugging line
  }
}
