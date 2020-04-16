import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { NotificationElement } from "../../models/NotificationElement";


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public notifications: Array<NotificationElement>;

  constructor(private service: NotificationService) { }

  ngOnInit() {
    this.service.updateNotifications().subscribe(
      response => {
        this.notifications = response;
        this.marksNotficationsAsreaded(response);
      }
    );
  }

  public marksNotficationsAsreaded(arr: Array<NotificationElement>) {
    let notIds = [];
    if (arr) {
      arr.forEach(not => {
        notIds.push(not.id);
      });
      this.service.markNotificationsAsReaded(notIds);
      console.log(notIds);
    }
  }

}
