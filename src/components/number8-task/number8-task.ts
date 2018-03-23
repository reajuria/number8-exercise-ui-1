import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task, TaskInterface } from '../../models/task/task';
import { CountriesProvider, Country } from '../../providers/countries/countries';

@Component({
  selector: 'number8-task',
  templateUrl: 'number8-task.html'
})
export class Number8TaskComponent {
  
  private taskInput: FormGroup;
  private task: Task;
  selectedCountry: Country;

  constructor(private formBuilder: FormBuilder, private countries: CountriesProvider) {
    this.taskInput = this.formBuilder.group({
      startDate: new FormControl('', [Validators.required]),
      days: new FormControl(1, [Validators.required, Validators.min(1)]),
      countryCode: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2)])
    });
  }

  taskProcess() {
    const userInputTask: TaskInterface = {
      startDate: this.taskInput.value.startDate,
      days: this.taskInput.value.days,
      country: this.selectedCountry
    }
    this.task = new Task(userInputTask);
    console.log(this.task);
  }

  onCountryCodeChange(countryCodeInput: string) {
    countryCodeInput = countryCodeInput.toUpperCase();
    if (countryCodeInput.length > 0 && /[a-zA-Z]+/.test(countryCodeInput)) {
      const found: Country[] = this.countries.findByCode(countryCodeInput);
      this.selectedCountry = found.length >= 1 ? found[0] : undefined;
    } else {
      this.selectedCountry = undefined;
    }
  }

}
