//#region Imports

import { Component, ViewChild } from '@angular/core';

import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

//#endregion

//#region Components

@Component({
  templateUrl: 'app.html'
})

//#endregion

//#region Class

/**
 * Classe principal do aplicativo
 */
export class MyApp {

  //#region Constructor

  /**
   * Construtor padrão
   * @param platform Plataforma em que está rodando o app
   * @param statusBar Barra de status
   * @param splashScreen SplashScreen exibida ao iniciar
   * @param menu Menu do aplicativo
   */
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  //#endregion

  //#region Properties

  /**
   * Componente de navegação
   */
  @ViewChild(Nav) navCtrl: Nav;

  /**
   * Página principal ao iniciar o aplicativo
   */
  rootPage: any = LoginPage;

  //#endregion

  //#region Methods

  /**
   * Abre uma página
   *
   * @param page Página a ser aberta
   */
  openPageMenu(page: string): void {
    this.menu.close('mainMenu');

    switch (page) {

      case 'profile':
        this.navCtrl.push(ProfilePage);
        break;
    }
  }

  //#endregion

}

//#endregion