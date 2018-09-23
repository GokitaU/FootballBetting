import { Component, ViewChild } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AppService } from './services/app.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { DataService } from './services/data.service';
import { Team } from './models/team.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;
  msg: string;
  teams: Team[];
  @ViewChild('messageModal') messageModal: ModalDirective;

  constructor(private router: Router, private appService: AppService, private dataService: DataService) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  async ngOnInit() {
    const databasecheck = await this.appService.checkDatabase();
    if(databasecheck != 0){
      this.router.navigate(['servererror']);
    }else{
      this.teams = await this.dataService.getTeams();
    }
  }

  msgModal(text: string){
    this.msg = text;
    this.messageModal.show();
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      // NavigationStart
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel ||
    routerEvent instanceof NavigationError) {
      // NavigationEnd
      this.loading = false;
    }
  }
}
