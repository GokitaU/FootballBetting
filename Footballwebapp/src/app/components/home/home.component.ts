import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  matchList: Match[];
  isBannerShow: boolean;
  bet: number;
  @ViewChild('bettingModal') bettingModal: ModalDirective;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.isBannerShow = false;
    this.matchList = this.route.snapshot.data['matchList'];
  }

  modalOpen(bet: number) {
    this.bet = bet;
    this.bettingModal.show();
  }
}
