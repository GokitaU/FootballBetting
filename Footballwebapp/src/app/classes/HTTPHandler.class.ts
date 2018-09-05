import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHTTP } from '../models/ErrorHTTP';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';
import { throwError } from '../../../node_modules/rxjs/internal/observable/throwError';

export class HTTPHandler {
    
    ErrorHTTPHandler(errorResponse: HttpErrorResponse, errornumber: number, msg: string): Observable<ErrorHTTP> {
        let httperror = new ErrorHTTP();
        httperror.errornumber = errornumber;
        httperror.message = errorResponse.statusText;
        httperror.uimessage = msg;
        return throwError(httperror);
    }
}