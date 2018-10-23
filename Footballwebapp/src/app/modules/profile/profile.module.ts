import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile-component/profile.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from 'src/app/components/shell/shell.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from '../home/home-component/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ShellComponent,
        children: [
          { path: 'profile', component: ProfileComponent }
        ]
      }
    ]),
    MDBBootstrapModule.forRoot()
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
