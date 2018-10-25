//#region Imports

import { Component,Input } from '@angular/core';

//#endregion

//#region Components

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

//#endregion

//#region Class

/**
 * Classe que representa o componente a barra e navegação
 */
export class MainToolbarComponent {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor() {
    this.itemsBadgeCount = this.dynamicItemsBadgeCount;
  }

  //#endregion

  //#region Properties

  /**
   * Variáveis que dão bind com o número de notificações da toolbar
   */
  @Input('itemsBadgeCount') dynamicItemsBadgeCount = "3";
  public itemsBadgeCount: string;

  //#endregion

}

//#endregion