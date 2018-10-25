import { Component } from '@angular/core';

/**
 * Generated class for the EmptyScheduleCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'empty-schedule-card',
  templateUrl: 'empty-schedule-card.html'
})
export class EmptyScheduleCardComponent {

  text: string;

  constructor() {
    console.log('Hello EmptyScheduleCardComponent Component');
    this.text = 'Hello World';
  }

}
