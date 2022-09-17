import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-child',
  templateUrl: './book-child.component.html',
  styleUrls: ['./book-child.component.scss']
})
export class BookChildComponent implements OnInit {

  @Input() 
  get data(): BookModel[]{
    return this._data;
  }
  set data(a: BookModel[]){
    a.map(x => {x.title = "Title : " + x.title})
    this._data = a;
  }

  _data: BookModel[];

  //public listBooks: BookModel[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
