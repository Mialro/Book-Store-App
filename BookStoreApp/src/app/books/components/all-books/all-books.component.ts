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
    var books = this.bookService.getAllBooks();
    books.forEach(x => {
      var obj  = new BookModel();
      obj.id = x.id;
      obj.title = x.title;
      obj.totalPages = x.totalPagess;
      obj.author = x.author;
      obj.price = x.price;
      //obj.price.value = x.price.value;

      this.listBooks.push(obj);
    })
    console.log(this.listBooks);
    
  }

  public incFunction(): void{
    this._counterService.incNumber();
  }

  public decFunction(): void{
    this._counterService.decNumber();
  }

}
