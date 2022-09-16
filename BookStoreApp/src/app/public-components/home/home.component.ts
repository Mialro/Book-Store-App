import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //providers: [CounterService]
})
export class HomeComponent implements OnInit {

  constructor(public _counterService: CounterService) { }

  ngOnInit(): void {
  }

  public incFunction(): void{
    this._counterService.incNumber();
  }

  public decFunction(): void{
    this._counterService.decNumber();
  }

}
