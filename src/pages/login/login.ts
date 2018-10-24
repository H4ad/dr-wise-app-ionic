import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { RegisterPage } from '../../pages/register/register';
import { AuthProvider, LoginPayload } from "../../providers/auth/auth";

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

/**
 * Classe que lida com a lógica da página de Login
 */
export class LoginPage {

  /**
   * Usado para navegar no aplicativo
   */
  private nav: NavController;

  /**
   * Nome do usuário
   */
  public email: string;

  /**
   * Senha do usuário
   */
  public password: string;

  /**
   * Provider para realizar chamadas na api
   */
  private authProvider: AuthProvider;

  /**
   * Construtor padrão
   * 
   * @param nav Componente de navegação
   */
  constructor(nav: NavController, auth: AuthProvider) 
  {
    this.nav = nav;
    this.authProvider = auth;
  }

  /**
   * Realiza a ação de logar
   */
  doLogin(): void {
    
    let loginPayload = <LoginPayload> 
    {
       email: this.email, 
       password: this.password  
    };

    this.authProvider.makeLogin(loginPayload, 
      response  => {
        // TODO: Armazenar o token de acesso

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
}
