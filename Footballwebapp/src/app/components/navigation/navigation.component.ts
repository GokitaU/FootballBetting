import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  storeSubs: any;
  score: 0;  
  constructor(private store: Store<any>) {}
  
  ngOnInit(): void {
    this.storeSubs = this.store.pipe(select('app')).subscribe(
      data => {
        if(typeof data != "undefined")
        this.score = data["score"];
      }
    )
  }

  ngOnDestroy(){
    this.storeSubs.unsubscribe();
  }
}
