import { Injectable } from '@angular/core';
import { BaseHttp, ErrorProxy } from '../basehttp';

/**
 * Provider que lidará com autenticação do aplicativo
 */
@Injectable()
export class AuthProvider {

  /**
   * Url base para realizar as chamadas
   */
  private readonly baseUrl: string = "https://wiseonesoft.com/api/";

  /**
   * Construtor padrão
   * 
   * @param http Modulo HTTP 
   */
  constructor(public http: BaseHttp) {
    console.log('AuthProvider initialized!');
  }

  /**
   * Realiza o login do usuário
   * 
   * @param loginPayload Informações de login
   * @param handleSuccesfull Função executada ao obter um status code de sucesso
   * @param handleError Função executada ao obter um status code de erro
   */
  makeLogin(loginPayload: LoginPayload, handleSuccesfull: (response: LoginProxy) => void, handleError: (response: ErrorProxy) => void): void  {
    this.http.post<LoginProxy>('auth/login', loginPayload, handleSuccesfull, handleError);
  }

  /**
   * Realiza o registro do usuário
   */
  makeRegister(registerPayload: RegisterPayload, handleSuccesfull: (response: DefaultProxy) => void, handleError: (response: ErrorProxy) => void): void {
    this.http.post<DefaultProxy>('auth/signup', registerPayload, handleSuccesfull, handleError);
  }
}

//#region Payloads

/*
 * ========================
 * Payloads do AuthProvider
 * ========================
 */

/**
 * Informações que serão enviadas ao servidor quando para fazer login
 */
export interface LoginPayload {

  /**
   * Representa o e-mail de Login
   */
  email: string;

  /**
   * Representa a senha do usuário
   */
  password: string;

  /**
   * Indica se é para lembrar do usuário (Sinceramente não sei o que muda) 
   */
  remember_me: boolean;

}

/**
 * Informações que serão enviadas ao servidor quando para fazer um registro
 */

export interface RegisterPayload {

  /**
   * Representa o nome o usuário
   */
  name: string;

  /**
   * Representa o e-mail de Login
   */
  email: string;

  /**
   * Representa a senha do usuário
   */
  password: string;

  /**
   * Representa a confirmação de senha
   */
  password_confirmation: string;

}

//#endregion

//#region Proxys

/*
 * ========================
 * Proxys do AuthProvider
 * ========================
 */

/**
 * Informações recebidas do servidor ao realizar um login
 */
export interface LoginProxy {

  /**
   * Representa o token de acesso
   */
  access_token: string;

  /**
   * Representa o tipo de token recebido
   */
  token_type: string;

  /**
   * Representa a data de expiração do token
   */
  expires_at: string;

}

/**
 * Informações recebidas do servidor aos realizar ações que só retornam uma mensagem simples
 */
export interface DefaultProxy {

  /**
   * Representa a mensagem do resultado da ação
   */
  message: string;

}

//#endregion