import { Injectable } from '@angular/core';
import { Settings } from '../app.settings';
import { Team } from '../models/team.model';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/match.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private appsettings: Settings, private httpClient: HttpClient) { }

  getMatches = (): Promise<Match[]> => {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.appsettings.BaseURL}/getmatches?outcome=x`)
        .toPromise().then((matches: Match[]) => {
          resolve(matches);
        }).catch(err => {
          console.log("Error getTeams" + err.message);
          reject();
        });
    });
  }

  getTeams = (): Promise<Team[]> => {
    // Get Teams
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.appsettings.BaseURL}/getteams`)
        .toPromise().then((teams: Team[]) => {
          resolve(teams);
        }).catch(err => {
          console.log("Error getTeams" + err.message);
          reject();
        });
    });
  }

}
