import { Component } from '@angular/core';

import {environment} from '../environments/environment';
import {ServicioDeAutentService} from './servicio-de-autent.service';
import {FireDBService} from './fire-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public authComponent: ServicioDeAutentService,
              public dbApp: FireDBService) {

  }
}
