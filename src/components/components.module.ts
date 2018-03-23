import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Number8CalendarComponent } from './number8-calendar/number8-calendar';
import { Number8TaskComponent } from './number8-task/number8-task';
@NgModule({
	declarations: [Number8CalendarComponent,
    Number8TaskComponent],
	imports: [IonicModule],
	exports: [Number8CalendarComponent,
    Number8TaskComponent]
})
export class ComponentsModule {}
