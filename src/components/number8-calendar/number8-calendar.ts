import { Component, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { Task } from '../../models/task/task';
import { Month } from '../../models/calendar/month';
import { Week } from '../../models/calendar/week';

@Component({
  selector: 'number8-calendar',
  templateUrl: 'number8-calendar.html'
})
export class Number8CalendarComponent implements OnChanges {

  @Input() task: Task;
  months: Month[];
  monthHeader: Array<string> = [];

  constructor() {
    for (let n = 0; n <= 6; n++) {
      this.monthHeader.push(moment().day(n).format('dd').substr(0,1));
    }
  }

  ngOnChanges() {
    if (this.task !== undefined) {
      this.parseTask();
    }
  }

  parseTask() {
    this.months = [];

    for (
      let evalDate = moment(this.task.startDate);
      evalDate.isBetween(this.task.startDate, this.task.endDate) || evalDate.isSame(this.task.startDate) || evalDate.isSame(this.task.endDate);
      evalDate = evalDate.add(1, 'days')
    ) {
      // Month Init and Verification
      let monthIndex = -1;
      let workingMonth = this.months.filter(v => { return v.year === evalDate.year() && v.month === evalDate.month() })[0];
      let isNew = workingMonth === undefined ? true : false;
      if (isNew) {
        workingMonth = new Month(evalDate.year(), evalDate.month());
      } else {
        monthIndex = this.months.indexOf(workingMonth);
      }

      // Week Init and Verification
      let weekIndex = workingMonth.weeks.findIndex(v => v.weekOfMonth === evalDate.week());
      if (weekIndex === -1) {
        weekIndex = workingMonth.weeks.push(new Week(evalDate.week())) - 1;
      }

      // Holiday Info
      let isHoliday = false;
      if (this.task.holidaysCount > 0) {
        isHoliday = this.task.holidaysDates.filter(d => {
          return moment(d).isSame(evalDate);
        }).length >= 1 ? true : false;
      }
      
      // Day Information
      workingMonth.weeks[weekIndex].days[evalDate.day()].date = evalDate.date();
      workingMonth.weeks[weekIndex].days[evalDate.day()].isHoliday = isHoliday;

      // Save to Months Array
      if (isNew) {
        this.months.push(workingMonth);
      } else {
        this.months.splice(monthIndex, 1, workingMonth);
      }

    }
  }

}
