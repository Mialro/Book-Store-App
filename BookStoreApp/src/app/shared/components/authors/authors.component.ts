import { Component, Input, OnInit } from '@angular/core';

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

  data: number;

  public setData(a: number){
    this.data = a;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
