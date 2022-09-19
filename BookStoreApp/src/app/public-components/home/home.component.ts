import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';
import { AuthorsComponent } from '../../shared/components/authors/authors.component';
import { TestService } from '../../shared/services/test.service';
import { AuthorModel } from '../../shared/Models/author.model';
import { AuthorsAddressComponent } from 'src/app/shared/components/authors-address/authors-address.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('btnCount') myTempChild : ElementRef;
  count: number = 0;
  count1: boolean = false;
  obj : AuthorModel = {id : 23, name : "Yves"}
  address : string = "South Africa";

  constructor(public testService: TestService) {
    console.log("Hello from parent Constructor");
   }

  ngAfterViewInit(): void {
    console.log(this.myTempChild.nativeElement.innerHTML = "Button Updated");
  }

  
  ngOnInit(): void {
    console.log("Hello from parent ngOnInit");
    console.log("Good " + this.myTempChild);
  }

  counter(): void{
    this.count++;
    this.count1 = !this.count1
    this.obj.id = this.count++;
    this.address = this.address + this.count;
  }
  
}
