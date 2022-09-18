import { Component, OnInit } from '@angular/core';
import { TestService } from '../../shared/services/test.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public testService: TestService) { }

  ngOnInit(): void {
    this.testService.testVar = 555;
  }

}
