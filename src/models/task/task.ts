/**
 * Task Model Class
 */
export class Task {
  startDate: Date;
  endDate: Date;
  days: number;
  countryCode: string;

  /**
   * Create new Task
   * @param {TaskInterface} inputTask Task Definition
   */
  constructor (inputTask: TaskInterface) {
    this.startDate = new Date(inputTask.startDate);
    this.days = inputTask.days;
    this.countryCode = inputTask.countryCode;
    this.calculateEndDate();
  }

  private calculateEndDate() {
    this.endDate = this.startDate;
    this.endDate.setDate(this.endDate.getDate() + this.days);
    console.log(this.endDate);
  }

}

interface TaskInterface {
  startDate: Date;
  endDate?: Date;
  days: number;
  countryCode: string;
}
