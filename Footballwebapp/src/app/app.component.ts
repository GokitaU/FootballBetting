import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = false;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit() {
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
