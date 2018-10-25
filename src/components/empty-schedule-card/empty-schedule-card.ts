//#region Imports

import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

//#endregion

//#region Components

/**
 * Generated class for the EmptyScheduleCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'empty-schedule-card',
  templateUrl: 'empty-schedule-card.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.6s')
      ]),
    ]),
  ],
})

//#endregion

//#region Class

/**
 * Card usado para exibir uma mensagem para o usuário quando ele não possuir nenhuma consulta
 */
export class EmptyScheduleCardComponent {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(public nav: NavController) { }

  //#endregion

  //#region Properties

  /**
   * Fecha o card de forma animada
   */
  public isOpen: boolean = true;

  /**
   * Usado para executar o método passado do pai
   */
  @Output() onSelection: EventEmitter<any> = new EventEmitter();

  //#endregion

  //#region Methods

  /**
   * Executa a função enviada do elemento pai
   *
   * @param item Função enviada do pai
   */
  onSelectListItem(item: any) {
    this.onSelection.emit(item);
  }

  /**
   * Fecha este card
   */
  closeCard(): void {
    this.isOpen = false;

    setTimeout(() => {
      this.onSelection.next();
    }, 600);
  }

  /**
   * Exibe a página de consultas
   */
  showSchedules(): void {
    //TODO: Criar e implementar navegação para a página de consultas
  }

  //#endregion

}

//#endregion
