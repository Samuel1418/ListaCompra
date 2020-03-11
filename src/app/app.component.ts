import { Component } from '@angular/core';

import {environment} from '../environments/environment';
import {ServicioDeAutentService} from './servicio-de-autent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public authComponent: ServicioDeAutentService) {

  }
}
