import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';
import { AuthorsComponent } from '../../shared/components/authors/authors.component';
import { TestService } from '../../shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  count: number = 0;
  count1: boolean = false;

  constructor(public testService: TestService) {
    console.log("Hello from parent Constructor");
   }

  ngOnInit(): void {
    console.log("Hello from parent ngOnInit");
  }

  counter(): void{
    this.count++;
    this.count1 = !this.count1
  }
  
}
