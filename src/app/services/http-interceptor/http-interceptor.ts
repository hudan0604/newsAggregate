import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  private readonly CODE_UNAUTHORIZED = 401;
  private readonly CODE_FORBIDDEN = 403;
  private;
  apiKey: any;

  constructor() {
    this.apiKey = "2b457140610e4883b895dc11fd8d8ba8";
  }

  /**
   * Intercept request to set access token
   * @param request Intercepted request
   * @param next HttpHandler
   */
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.apiKey) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: this.apiKey
      }
    });

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse, caught) => {
        if (err instanceof HttpErrorResponse) {
          /*if (
              err.status === this.CODE_UNAUTHORIZED ||
              err.status === this.CODE_FORBIDDEN
            ) {
              this.authenticationService.logOut();
            }*/

          return throwError(err);
        }
      })
    );
  }
}
