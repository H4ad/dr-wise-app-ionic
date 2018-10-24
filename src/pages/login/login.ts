//#region Imports

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { RegisterPage } from '../../pages/register/register';
import { AuthProvider, LoginPayload } from "../../providers/auth/auth";

//#endregion

//#region Componentes

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    AuthProvider
  ]
})

//#endregion

//#region Class

/**
 * Classe que lida com a lógica da página de Login
 */
export class LoginPage {

  //#region Construtor

  /**
   * Construtor padrão
   *
   * @param nav Componente de navegação
   */
  constructor(public nav: NavController, public auth: AuthProvider)
  {
    let accessToken = localStorage.getItem(this.LOGIN_ACCESS_KEY);

    if(accessToken == null)
      return;

    this.nav.push(TabsPage);
  }

  //#endregion

  //#region Properties

  /**
   * Key usada para armazenar o token de acesso
   */
  private readonly LOGIN_ACCESS_KEY: string = "LOGIN_ACCESS_KEY";

  /**
   * E-mail do usuário
   */
  public email: string;

  /**
   * Senha do usuário
   */
  public password: string;

  //#endregion

  //#region Methods

  /**
   * Realiza a ação de logar
   */
  doLogin(): void {

    let loginPayload = <LoginPayload>
    {
       email: this.email,
       password: this.password
    };

    this.auth.makeLogin(loginPayload,
      response  => {
        localStorage.setItem(this.LOGIN_ACCESS_KEY, response.access_token);

        this.nav.push(TabsPage);
      },
      error => {
        alert(error.message);
      }
    );
  }

  /**
   * Função direciona o usuário para a página de registrar
   */
  goToRegister(): void {
    this.nav.push(RegisterPage);
  }

  //#endregion

}

//#endregion