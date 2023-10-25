import { Component } from '@angular/core';
import { NotificationService } from './notifiche/notification.service';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';
  show = true;
  constructor() {
  }
}
