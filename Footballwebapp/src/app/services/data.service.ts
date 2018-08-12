import { Injectable } from '@angular/core';
import { Settings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private appsettings:Settings) { }

  getMatches = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // fetch('https://jsonplaceholder.typicode.com/comments')
        //   .then(data => {
        //     resolve(data.json());
        //   }).catch((err) => {
        //     reject(err);
        //   });
        resolve();
      }, 2000);
    });
  }

}
