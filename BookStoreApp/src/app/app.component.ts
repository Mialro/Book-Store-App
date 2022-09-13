import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BookStoreApp';

  email1: string = "mysample@mail.com";

  id = 3;
  authorId = 89;
}
