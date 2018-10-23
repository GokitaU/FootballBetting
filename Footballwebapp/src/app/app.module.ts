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
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ServernotfoundComponent } from './components/servernotfound/servernotfound.component';

/* App Modules */
import { ProfileModule } from './modules/profile/profile.module';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './state/reducers';
import { HomeModule } from './modules/home/home.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShellComponent,
    LoginComponent,
    PagenotfoundComponent,
    ServernotfoundComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ProfileModule,
    RegistrationModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      app:reducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [DataService, AppService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
