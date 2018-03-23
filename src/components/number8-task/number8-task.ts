import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../../models/task/task';
import { CountriesProvider, Country } from '../../providers/countries/countries';

@Component({
  selector: 'number8-task',
  templateUrl: 'number8-task.html'
})
export class Number8TaskComponent {
  
  private taskInput: FormGroup;
  private task: Task;
  countryName: string = '';

  constructor(private formBuilder: FormBuilder, private countries: CountriesProvider) {
    this.taskInput = this.formBuilder.group({
      startDate: new FormControl('' ,[Validators.required]),
      days: new FormControl(1 ,[Validators.required, Validators.min(1)]),
      countryCode: new FormControl('' ,[Validators.required, Validators.maxLength(2), Validators.minLength(2)])
    });
  }

  taskProcess() {
    this.task = new Task(this.taskInput.value);
    console.log(this.task);
  }

  onCountryCodeChange(countryCodeInput: string) {
    if (countryCodeInput.length > 0) {
      const found: Country[] = this.countries.findByCode(countryCodeInput);
      this.countryName = found.length >= 1 ? found[0].name : '';
    } else {
      this.countryName = '';
    }
  }

}
