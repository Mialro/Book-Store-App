import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MaterialModule } from '../shared/material.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookChildComponent } from './components/book-child/book-child.component';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent,
    RecentBooksComponent,
    BookChildComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule
  ]
})
export class BooksModule { }
