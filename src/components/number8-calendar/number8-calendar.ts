import { Component, Input } from '@angular/core';
import { Task } from '../../models/task/task';

@Component({
  selector: 'number8-calendar',
  templateUrl: 'number8-calendar.html'
})
export class Number8CalendarComponent {

  @Input() task: Task;

  constructor() {

  }

}
