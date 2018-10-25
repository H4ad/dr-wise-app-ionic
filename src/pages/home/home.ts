//#region Imports

import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

//#endregion

//#region Componentes

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

//#endregion

//#region Class

/**
 * Classe que lida com a página principal
 */
export class HomePage {

  //#region Properties

  /**
   * Representa os cards que serão exibidos na home
   */
  public cards: Array<object>;

  //#endregion

  //#region Construtor

  /**
   * Construtor padrão
   *
   * @param nav Componente de navegação
   * @param menu Componente do menu
   */
  constructor(public nav: NavController, public menu: MenuController) {
    menu.enable(true, "menu1");

    this.cards =
    [
      {
        type: "emptySchedule"
      },
    ];
  }

  //#endregion

  //#region Methods

  /**
   * Remove um elemento da lista de cards
   *
   * @param index Posição do card
   */
  removeCardFromList(index: number): void {
    this.cards.splice(index, 1);
  }

  //#endregion

}

//#endregion