import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ModalCoupon } from '../../interfaces/modalcoupon.interface';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  matchList: Match[];
  modalCoupon: Match;
  isBannerShow: boolean;
  createBetFormGroup: FormGroup;
  betValues: Array<number> = [];
  @ViewChild('bettingModal') bettingModal: ModalDirective;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.isBannerShow = false;
    this.matchList = this.route.snapshot.data['matchList'];

    for (let i = 200; i < 2001; i++) {
      if (i % 100 == 0) {
        this.betValues.push(i);
      }
    }

    this.createBetFormGroup = this.fb.group({
      createBetControl: [200]
    });
  }

  modalOpen(match: Match, bet: number, odds: number) {
    this.modalCoupon = match;
    this.bettingModal.show();
  }
}
