import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from './data.service';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<any[]> {

  constructor(private dataservice: DataService) { }

  resolve(): Promise<Match[]> {
    return this.dataservice.getMatches();
  }
}
