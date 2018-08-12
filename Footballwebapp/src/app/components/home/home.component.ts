import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postList:any[];
  bet: number;
  @ViewChild('bettingModal') bettingModal: ModalDirective;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.postList = this.route.snapshot.data['list'];
  }

  modalOpen(bet: number){
    this.bet = bet;
    this.bettingModal.show();
  }

}
