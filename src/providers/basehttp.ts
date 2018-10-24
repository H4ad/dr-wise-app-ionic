//#region Imports

import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs/Observer';
import { Injectable } from '@angular/core';

//#endregion

//#region Class

/**
 * Classe responsável por lidar com as chamadas na APIs
 */
@Injectable()
export class BaseHttp {

  //#region Construtor
  
  /**
   * Construtor padrão
   * 
   * @param http Modulo HTTP 
   */
  constructor(public http: HttpClient) {}

  //#endregion

  //#region Properties

  /**
   * Url base para realizar as chamadas
   */
  private readonly baseUrl: string = "https://wiseonesoft.com/api/";

  //#endregion

  //#region Methods

  /**
   * Envia uma requisição com o método POST
   * 
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   * @param payload Informações a serem enviadas para o servidor
   * @param handleSuccessful Executado quando a requisição possui um status code de sucesso
   * @param handleError Executado quando a requisição possui um status code de erro
   * @param handleComplete Executado quando a requisição é completa independente do status code
   * @param customOptions Opções customizadas para esta requisição
   */
  public post<T>(
    url:string, 
    payload: object, 
    handleSuccesfull: (response: T) => void, 
    handleError?: (response: ErrorProxy) => void,
    handleComplete?: () => void,
    customOptions?: object
  ): void {
    this.http.post(this.baseUrl + url, payload, customOptions).subscribe(new BaseObserve<T>(handleSuccesfull, handleError, handleComplete));
  }

  /**
   * Envia uma requisição com o método GET
   * 
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   * @param handleSuccessful Executado quando a requisição possui um status code de sucesso
   * @param handleError Executado quando a requisição possui um status code de erro
   * @param handleComplete Executado quando a requisição é completa independente do status code
   * @param customOptions Opções customizadas para esta requisição
   */
  public get<T>(
    url:string,
    handleSuccesfull: (response: T) => void, 
    handleError?: (response: ErrorProxy) => void,
    handleComplete?: () => void,
    customOptions?: object
  ): void {
    this.http.get(this.baseUrl + url, customOptions).subscribe(new BaseObserve<T>(handleSuccesfull, handleError, handleComplete));
  }

  /**
   * Envia uma requisição com o método PUT
   * 
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   * @param payload Informações a serem enviadas para o servidor
   * @param handleSuccessful Executado quando a requisição possui um status code de sucesso
   * @param handleError Executado quando a requisição possui um status code de erro
   * @param handleComplete Executado quando a requisição é completa independente do status code
   * @param customOptions Opções customizadas para esta requisição
   */
  public put<T>(
    url:string,
    payload: object,
    handleSuccesfull: (response: T) => void, 
    handleError?: (response: ErrorProxy) => void,
    handleComplete?: () => void,
    customOptions?: object
  ): void {
    this.http.put(this.baseUrl + url, payload, customOptions).subscribe(new BaseObserve<T>(handleSuccesfull, handleError, handleComplete));
  }

  /**
   * Envia uma requisição com o método DELETE
   * 
   * @param url Url para a requisição. Obs: Ele já é automaticamente combinado com a url base
   * @param handleSuccessful Executado quando a requisição possui um status code de sucesso
   * @param handleError Executado quando a requisição possui um status code de erro
   * @param handleComplete Executado quando a requisição é completa independente do status code
   * @param customOptions Opções customizadas para esta requisição
   */
  public delete<T>(
    url:string,
    handleSuccesfull: (response: T) => void, 
    handleError?: (response: ErrorProxy) => void,
    handleComplete?: () => void,
    customOptions?: object
  ): void {
    this.http.delete(this.baseUrl + url, customOptions).subscribe(new BaseObserve<T>(handleSuccesfull, handleError, handleComplete));
  }

  //#endregion

}

/**
 * Lida com as requisições
 */
export class BaseObserve <T> implements Observer <T> {

  //#region Construtor

  /**
   * Construtor padrão
   * 
   * @param handleSuccessful Executado quando a requisição possui um status code de sucesso
   * @param handleError Executado quando a requisição possui um status code de erro
   * @param handleComplete Executado quando a requisição é completa independente do status code
   */
  constructor(
    public handleSuccessful?: (response: T) => void,
    public handleError?: (response: ErrorProxy) => void, 
    public handleComplete?: () => void
    ) {}

  //#endregion

  //#region Methods

  /**
   * Executado quando a requisição possui um status code de sucesso
   * 
   * @param response Resposta do servidor de sucesso
   */
  next(response: T): void {
    this.handleSuccessful.call(null, response);
  }

  /**
   * Executado quando a requisição possui um status code de erro
   * 
   * @param error Resposta do servidor de erro
   */
  error(error: any): void {
    if(this.handleError == undefined)
      return;

    if(error.status >= 400 && error.status < 500){
      this.handleError.call(null, <ErrorProxy> error.error);
      return;
    }
  
    this.handleError.call(null, <ErrorProxy>{
      status_code: error.status,
      message: error.message
    });
  }

  /**
   * Executado quando a requisição é completa independente do status code
   */
  complete(): void {
    if(this.handleComplete == undefined)
      return;

    this.handleComplete.call(null);
  }

  //#endregion

}

//#endregion

//#region Proxys

/**
 * Interface que representa mensagens de erro enviadas pelo servidor
 */
export interface ErrorProxy {

  /**
   * O status code da requisição
   */
  status_code: number;

  /**
   * Mensagem enviada pelo servidor
   */
  message: string;

  /**
   * Erros enviados pelo servidor
   */
  errors: any;

}

//#endregion