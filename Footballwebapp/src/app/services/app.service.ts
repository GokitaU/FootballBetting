import { Injectable } from '@angular/core';
import { Settings } from '../app.settings';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HTTPHandler } from '../classes/HTTPHandler.class';
import { catchError } from '../../../node_modules/rxjs/internal/operators/catchError';
import { ErrorHTTP } from '../models/ErrorHTTP';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private appsettings: Settings, private httpClient: HttpClient) { }

    checkDatabase = (): Promise<any> => {
        let promise = new Promise((resolve, reject) => {
            this.httpClient.get(`${this.appsettings.BaseURL}/testdb`)
                .toPromise()
                .then((x: { msg: string, success: boolean }) => {
                    let resp = x;
                    if (resp.success === true) {
                        console.log("Database:: [OK]");
                        resolve(0);
                    } else {
                        console.log("Database:: !!ERROR!! => " + resp.msg);
                        resolve(1);
                    }
                })
                .catch(err => {
                    console.log("Database:: !!ERROR!! CATCH => " + err.message);
                    resolve(1);
                })
        });
        return promise;
    }

}