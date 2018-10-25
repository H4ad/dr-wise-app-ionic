import { Component,Input } from '@angular/core';

/**
 * Generated class for the MainToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'main-toolbar',
  templateUrl: 'main-toolbar.html'
})

/**
 * Classe que representa o componente a barra e navegação
 */
export class MainToolbarComponent {

  @Input('itemsBadgeCount') dynamicItemsBadgeCount = "3";
  public itemsBadgeCount: string = "3";

  constructor() {
    this.itemsBadgeCount = this.dynamicItemsBadgeCount;
  }

}
