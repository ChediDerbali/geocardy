import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import {PlaceComponent} from '../app/place/place.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSlideToggleModule,PlaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'geocardy';
}
