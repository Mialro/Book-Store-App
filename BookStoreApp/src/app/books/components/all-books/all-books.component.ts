import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  providers: [BookService]
})
export class AllBooksComponent implements OnInit {

  public listBooks: BookModel[] = [];

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.listBooks = this.bookService.getAllBooks();
    console.log(this.listBooks);
    console.log("Hello");
    
    
  }

}
