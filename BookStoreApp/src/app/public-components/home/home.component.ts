import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';
import { AuthorsComponent } from '../../shared/components/authors/authors.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //providers: [CounterService]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(AuthorsComponent) private childComponent: AuthorsComponent

  constructor(public _counterService: CounterService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.childComponent.setData(15);
    }, 0);
  }

  public incFunction(): void{
    this._counterService.incNumber();
  }

  public decFunction(): void{
    this._counterService.decNumber();
  }

}
