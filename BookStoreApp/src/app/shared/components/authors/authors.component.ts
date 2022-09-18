import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../../Models/author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck {

  @Input() myData1 : number
  @Input() myData2 : boolean
  @Input() myData3 : AuthorModel

  constructor() {
    console.log("Hello from child Constructor");
    
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

}
