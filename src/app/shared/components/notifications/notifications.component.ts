import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/notifiche/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
    constructor(private  notificationsService: NotificationService, private toastr: ToastrService) {
      this.notificationsService.notifications$?.subscribe( n => {
        switch(n.code ) {
          case 200:
            this.toastr.success(n.text, 'Chiamata HTTP');
            break;
          case 404:
            this.toastr.warning(n.text, 'Chiamata HTTP');
            break;  
          case 0:
          default:
            this.toastr.error(n.text, 'Chiamata HTTP');
            break;

        }
      })
    }
}
