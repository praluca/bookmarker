import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UpdateService } from '../services/update.service';

export class HttpErrorInterceptor {
  errors: any = [];
  constructor(private updateService: UpdateService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.log('this is client side error', error);
        } else {
          this.updateService.updateError(error.error);
        }
        return throwError(() => error);
      })
    );
  }
}
