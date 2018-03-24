import * as moment from 'moment';
import { Week } from './week';

export class Month {
  year: number;
  month: number;
  monthName: string;
  weeks: Week[];

  constructor (year: number, month: number) {
    this.year = year;
    this.month = month;
    this.monthName = moment().year(year).month(month).format('MMMM');
    this.weeks = [];
  }
}
