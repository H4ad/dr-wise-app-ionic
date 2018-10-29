//#region Imports

import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';
import { AuthProvider, LoginPayload } from "../../providers/auth/auth";
import { Keys } from '../../app/app.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
export class LoginPage implements OnInit  {

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

  /**
   * Formulário de login
   */
  public formLogin: FormGroup;

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

  /**
   * Executado ao iniciar a tela
   */
  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });
  }

  //#endregion

}

//#endregion