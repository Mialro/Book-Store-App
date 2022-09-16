import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { TestService } from './test.service';

// {
//   providedIn: 'any'
// }

@Injectable()
export class Counter2Service extends TestService {

  public counter: number = 0

  constructor() { super();}

  public incNumber(): void{
    this.counter +=2;
  }

  public decNumber(): void{
    this.counter -=2
  }
}
