import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task, TaskInterface } from '../../models/task/task';
import { CountriesProvider, Country } from '../../providers/countries/countries';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'number8-task',
  templateUrl: 'number8-task.html'
})
export class Number8TaskComponent {
  
  private taskInput: FormGroup;
  private task: Task;
  selectedCountry: Country;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private countries: CountriesProvider
  ) {
    this.taskInput = this.formBuilder.group({
      startDate: new FormControl('', [Validators.required]),
      days: new FormControl(1, [Validators.required, Validators.min(1)]),
      countryCode: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2), Validators.pattern(/[a-z][a-z]/i)])
    });
  }

  taskProcess() {
    if (this.taskInput.valid && this.selectedCountry !== undefined) {
      const userInputTask: TaskInterface = {
        startDate: this.taskInput.value.startDate,
        days: this.taskInput.value.days,
        country: this.selectedCountry
      }
      this.task = new Task(userInputTask);
      this.navCtrl.push('CalendarPage', {
        task: this.task
      });
    }
  }

  onCountryCodeChange(countryCodeInput: string) {
    countryCodeInput = countryCodeInput.toUpperCase();
    if (countryCodeInput.length > 0 && /[a-z][a-z]/i.test(countryCodeInput)) {
      const found: Country[] = this.countries.findByCode(countryCodeInput);
      this.selectedCountry = found.length >= 1 ? found[0] : undefined;
    } else {
      this.selectedCountry = undefined;
    }
  }

}
