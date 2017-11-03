import {DonateService} from './donate.service';
import {Donate} from './donate';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})

export class DonateComponent implements OnInit {

  donate: Donate;

  constructor(private donateService: DonateService) {

  }

  ngOnInit() {
    this.donate = this.donateService.getDonate();
  }

}
