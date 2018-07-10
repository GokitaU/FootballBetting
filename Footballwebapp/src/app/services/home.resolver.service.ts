import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<any[]> {

  constructor(private dataservice: DataService) { }

  resolve(): Promise<any[]> {
    return this.dataservice.getPosts();
  }
}
