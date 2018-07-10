import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ShellComponent } from './components/shell/shell.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './components/_webapp/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShellComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
