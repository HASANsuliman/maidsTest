import { Component } from '@angular/core';
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

}
