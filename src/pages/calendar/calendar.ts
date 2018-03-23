import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../models/task/task';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  incomingTask: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.incomingTask = this.navParams.get('task');
    if (this.incomingTask === undefined) {
      if (this.navCtrl.parent !== undefined) {
        this.navCtrl.goToRoot({});
      } else {
        this.navCtrl.setRoot('HomePage');
      }
    }
  }
}
