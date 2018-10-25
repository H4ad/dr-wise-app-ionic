//#region Imports

import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { AuthProvider, LoginPayload } from "../../providers/auth/auth";
import { Keys } from '../../app/app.component';

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
  constructor(public nav: NavController, public auth: AuthProvider){}

  //#endregion

  //#region Properties

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
        localStorage.setItem(Keys.LOGIN_ACCESS_KEY, response.access_token);

        this.nav.push(HomePage);
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