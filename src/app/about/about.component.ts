import {Component, OnInit} from '@angular/core';
import {AboutService} from './about.service';
import {About} from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  aboutInfo: About;

  ngOnInit(): void {
    this.aboutInfo = this.getAboutInfo();
  }

  constructor(private aboutService: AboutService) {
  }

  getAboutInfo(): About {
    return this.aboutService.getAboutInfo();
  }
}
