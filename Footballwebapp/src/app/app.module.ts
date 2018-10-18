import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './services/data.service';
import { AppService } from './services/app.service'; 

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShellComponent } from './components/shell/shell.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './components/_webapp/profile/profile.component';
import { ServernotfoundComponent } from './components/servernotfound/servernotfound.component';

/* NgRx */
import {StoreModule} from '@ngrx/store';
import { reducers } from './state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShellComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    ProfileComponent,
    ServernotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
