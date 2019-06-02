import { Component } from '@angular/core';
import { ControlService } from './services/control.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendas';
  isMobile: boolean;

  constructor(public _control:ControlService) {
  }
}
