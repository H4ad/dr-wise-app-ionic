//#region Imports

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider, RegisterPayload } from '../../providers/auth/auth';

//#endregion

//#region Componentes

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

//#endregion

//#region Class

/**
 * Classe que lida com o registro de usuários
 */
export class RegisterPage {

  //#region Constructor

  /**
   * Construtor padrão
   *
   * @param nav Componente da navegação
   * @param auth Provider que auxilia com a autenticação
   */
  constructor(public nav: NavController, public auth: AuthProvider) {}

  //#endregion

  //#region Properties

  /**
   * Nome do usuário
   */
  public name: string;

  /**
   * E-mail do usuário
   */
  public email: string;

  /**
   * Senha do usuário
   */
  public password: string;

  /**
   * Confirmação da senha do usuário
   */
  public password_confirmation: string;

  //#endregion

  //#region Methods

  /**
   * Função que redireciona o usuário para a página de login
   */
  goToLogin(): void {
    this.nav.push(LoginPage);
  }

  /**
   * Função que realiza o registro do usuário
   */
  doRegister(): void {
    let registerData = <RegisterPayload> {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    };

    this.auth.makeRegister(registerData,
    response => {
      this.goToLogin();
    },
    error => {
      alert(error.message);
    });
  }

  //#endregion
}

//#endregion