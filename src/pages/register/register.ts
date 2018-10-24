import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider, RegisterPayload } from '../../providers/auth/auth';

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

/**
 * Classe que lida com o registro de usuários
 */
export class RegisterPage {

  //#region Constructor

  /**
   * Construtor padrão
   * 
   * @param navCtrl Componente da navegação
   * @param authProvider Provider que auxilia com a autenticação
   */
  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {
    this.nav = navCtrl;
    this.auth = this.authProvider;
  }
  
  //#endregion

  //#region Properties

  /**
   * Usado para navegar no aplicativo
   */
  private nav: NavController;

  /**
   * Provider que auxilia com a autenticação
   */
  private auth: AuthProvider;

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

  //#region Functions

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
      alert(response.message);
      this.goToLogin();
    },
    error => {
      alert(error.message);
    });
  }

  //#endregion
}
