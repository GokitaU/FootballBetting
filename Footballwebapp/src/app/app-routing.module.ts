import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeResolverService } from './services/home.resolver.service';
import { ProfileComponent } from './components/_webapp/profile/profile.component';
import { ServernotfoundComponent } from './components/servernotfound/servernotfound.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      // { path: 'home', component: HomeComponent , resolve: { list: HomeResolverService }},
      { path: 'home', component: HomeComponent , resolve: { matchList: HomeResolverService }},
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
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
