import { Country } from "../../providers/countries/countries";
import * as moment from 'moment';

/**
 * Task Model Class
 */
export class Task {
  startDate: Date;
  endDate: Date;
  days: number;
  country: Country;
  daysCount: number = 0;
  holidaysCount: number = 0;
  holidaysDates: Date[] = [];

  /**
   * Create new Task
   * @param {TaskInterface} inputTask Task Definition
   */
  constructor (inputTask: TaskInterface) {
    this.startDate = moment(inputTask.startDate).toDate();
    this.days = inputTask.days;
    this.country = inputTask.country;
    this.calculateEndDate();
  }

  private calculateEndDate() {
    const holidays = this.country.holidays;
    this.endDate = moment(this.startDate).add(this.days, 'days').toDate();
    let evalDate = moment(this.startDate);
    this.holidaysCount = 0;
    this.holidaysDates = [];

    if (holidays !== undefined) {
      while (evalDate.isBetween(this.startDate, this.endDate) || evalDate.isSame(this.startDate) || evalDate.isSame(this.endDate)) {
        let currentMonth = evalDate.month() + 1;
        if (holidays[currentMonth] !== undefined && holidays[currentMonth].indexOf(evalDate.date()) > -1) {
          this.holidaysCount++;
          this.endDate = moment(this.endDate).add(1, 'days').toDate();
          this.holidaysDates.push(evalDate.toDate());
        }
        evalDate = evalDate.add(1, 'days');
      }
    }

    this.daysCount = moment(this.endDate).diff(this.startDate);
  }

}

export interface TaskInterface {
  startDate: Date;
  endDate?: Date;
  days: number;
  country?: Country;
}
