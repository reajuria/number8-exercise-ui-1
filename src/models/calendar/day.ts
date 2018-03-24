
export class Day {
  private dayOfWeek: number;
  private _isHoliday: boolean;
  private _date: number;
  color: string;

  constructor(dayOfWeek: number) {
    this._date = 0;
    this.dayOfWeek = dayOfWeek;
    this._isHoliday = false;
    this.setColor();
  }
  
  private setColor() {
    if (this._date > 0) {
      if (this.dayOfWeek === 0 || this.dayOfWeek === 6) {
        this.color = '#FFF59D'; // Yellow
      } else {
        this.color = '#C8E6C9'; // Green
      }
    } else {
      this.color = "#BDBDBD"; // Gray
    }
  }

  set date(value: number) {
    this._date = value;
    this.setColor();
  }

  get date() {
    return this._date;
  }

  set isHoliday(value: boolean) {
    this._isHoliday = value;
    if (value) {
      this.color = '#FFCC80'; // Orange
    } else {
      this.setColor();
    }
  }

  get isHoliday() {
    return this._isHoliday;
  }
}
