import { Injectable } from '@angular/core';
import { TestService } from './test.service';

// {
//   providedIn: 'any'
// }

@Injectable()
export class CounterService {

  public counter: number = 0
  constructor() { }

  public incNumber(): void{
    this.counter++
  }

  public decNumber(): void{
    this.counter--
  }
}
