import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit {

  public listRecentBooks: BookModel[] = [];

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    var books = this.bookService.getRecentBooks();
    books.forEach(x => {
      var obj = new BookModel();
      obj.id = x.id;
      obj.title = x.title;
      obj.totalPages = x.totalPages;
      obj.author = x.author;
      obj.price = x.price;
      this.listRecentBooks.push(obj);
    })
  }

}
