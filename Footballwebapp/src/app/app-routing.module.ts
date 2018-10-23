import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ServernotfoundComponent } from './components/servernotfound/servernotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notfound', component: PagenotfoundComponent },
  { path: 'servererror', component: ServernotfoundComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
