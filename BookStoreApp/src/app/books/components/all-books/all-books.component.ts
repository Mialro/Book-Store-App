import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  //providers: [BookService]
})
export class AllBooksComponent implements OnInit {

  public listBooks: BookModel[] = [];

  constructor(public bookService: BookService, public _counterService: CounterService) { }

  ngOnInit(): void {
    this.listBooks = this.bookService.getAllBooks();
    console.log(this.listBooks);
    console.log("Hello");
    
  }

  public incFunction(): void{
    this._counterService.incNumber();
  }

  public decFunction(): void{
    this._counterService.decNumber();
  }

}
