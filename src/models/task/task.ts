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
    this.endDate = moment(this.startDate).add(this.days, 'days').toDate();
    // TODO: Add Holidays
  }

}

export interface TaskInterface {
  startDate: Date;
  endDate?: Date;
  days: number;
  country?: Country;
}
