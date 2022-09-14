import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  name: string = "";
  email: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      console.log(queryParam);
      this.name = queryParam["name"];
      this.email = queryParam["email"]
    })
  }

  goToSignup(): void{
    this.router.navigate(["/auth/signup"])
  }

  goToBookDetails(): void{
    this.router.navigate(['/public/book-details', 100, 'author', 102], {queryParams: {name: 'Yves', email: "mymail@mail.com"}})
  }
}
