//#region Imports

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

//#endregion

//#region Class

/**
 * Interceptador que adiciona novas regras para requisições na WiseOneSoft
 */
@Injectable()
export class WiseAuthInterceptor implements HttpInterceptor {

  //#region Methods

  /**
   * Método que intercepta a requisição
   */
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    req = req.clone({ headers: req.headers.set('X-Requested-With', 'XMLHttpRequest') });

    console.log(req);
    return next.handle(req);
  }

  //#endregion

}

//#endregion