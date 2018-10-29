//#region Imports

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
export class RegisterPage implements OnInit {

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

  /**
   * Formulário de login
   */
  public formRegister: FormGroup;

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

  /**
   * Executado ao iniciar a tela
   */
  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      password_confirmation: new FormControl('', [Validators.required]),
    });
  }

  //#endregion
}

//#endregion