import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from 'src/app/app.settings';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private appsettings: Settings, private httpclient: HttpClient) { }

  register(user: User) {
    console.log("Regisztráció:", user);
    return this.httpclient.post(`${this.appsettings.BaseURL}/register`, user);
  }
}
