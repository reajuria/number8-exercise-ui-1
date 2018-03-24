import { Day } from "./day";

export class Week {
  weekOfMonth: number;
  days: Day[];

  constructor (weekOfMonth: number) {
    this.weekOfMonth = weekOfMonth;
    this.days = [
      new Day(0),
      new Day(1),
      new Day(2),
      new Day(3),
      new Day(4),
      new Day(5),
      new Day(6),
    ]
  }
}
