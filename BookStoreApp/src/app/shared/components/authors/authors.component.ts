import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  
  // @Input() 

  // public get data(): number{
  //   return this._data;
  // }

  // public set data(a: number){
  //   this._data = a * 2;
  // }
  
  // _data: number;

  // public data: number;

  // public setData(a: number): void{
  //   this.data = a;
  // }

  @Output() myData = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  public myClick(): void{
    this.myData.emit("This data is coming from child component");
  }
}
