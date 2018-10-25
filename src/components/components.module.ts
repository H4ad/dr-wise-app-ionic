import { NgModule } from '@angular/core';
import { MainToolbarComponent } from './main-toolbar/main-toolbar';
import { EmptyScheduleCardComponent } from './empty-schedule-card/empty-schedule-card';
@NgModule({
	declarations: [MainToolbarComponent,
    EmptyScheduleCardComponent],
	imports: [],
	exports: [MainToolbarComponent,
    EmptyScheduleCardComponent]
})
export class ComponentsModule {}
