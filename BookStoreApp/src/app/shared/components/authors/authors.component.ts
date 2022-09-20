import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../../Models/author.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() myData1 : number
  @Input() myData2 : boolean
  @Input() myData3 : AuthorModel
  @ContentChild(AuthorsAddressComponent) authorsAddress : AuthorsAddressComponent

  childCounter : number = 0;

  constructor() {
    console.log("Hello from child Constructor");
   }

   ngOnDestroy(): void {
    console.log("Author componet Destroyed");
  }

  ngAfterContentInit(): void {
    console.log("Hello AfterContentInit: " + this.authorsAddress?.address);
  }

  ngAfterContentChecked(): void {
    console.log("Hello AfterContentChecked: " + this.authorsAddress?.address);
  }

  ngDoCheck(): void {
    console.log(this.myData3);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("Hello from child ngOnInit");
  }

  incCounter() : void {
    this.childCounter++;
  }

}
