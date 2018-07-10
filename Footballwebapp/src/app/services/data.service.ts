import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getPosts = (): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(data => {
            resolve(data.json());
          }).catch((err) => {
            reject(err);
          });
      }, 2000);
    });
  }

}
