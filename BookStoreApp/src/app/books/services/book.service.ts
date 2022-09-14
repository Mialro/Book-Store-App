import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getAllBooks(): BookModel[]{
    return [
      {
        "id": 1,
        "title": "JavaScript",
        "totalPages": 150,
        "author": "Yves",
        "price": {
          "currency": "dollars",
          "value": 199
        }
      },

      {
        "id": 2,
        "title": "ASP.Net Core",
        "totalPages": 215,
        "author": "Tchamde",
        "price": {
          "currency": "euro",
          "value": 505
        }
      },

      {
        "id": 3,
        "title": "Bootstrap",
        "totalPages": 105,
        "author": "Djeumo",
        "price": {
          "currency": "rand",
          "value": 322
        }
      },
    ]
  } 
}
