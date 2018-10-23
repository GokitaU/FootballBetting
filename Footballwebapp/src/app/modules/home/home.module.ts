import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home-component/home.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from 'src/app/components/shell/shell.component';
import { HomeResolverService } from 'src/app/services/home.resolver.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ShellComponent,
        children: [
          { path: 'home', component: HomeComponent, resolve: { matchList: HomeResolverService } },
          { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
      }
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [HomeComponent]
})
export class HomeModule { }
