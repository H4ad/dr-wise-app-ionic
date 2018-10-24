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

  //#region Construtor

  /**
   * Construtor padrão
   *
   * @param nav Componente de navegação
   * @param menu Componente do menu
   */
  constructor(public nav: NavController, public menu: MenuController) {
    menu.enable(true, "menu1");
  }

  //#endregion

}

//#endregion