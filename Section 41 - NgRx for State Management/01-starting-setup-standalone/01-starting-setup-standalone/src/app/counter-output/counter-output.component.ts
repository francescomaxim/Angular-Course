import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  imports: [AsyncPipe],
  standalone: true,
})
export class CounterOutputComponent {
  count$?: Observable<number>;
  double$?: Observable<number>;

  private store = inject(Store<{ counter: number }>);

  constructor() {
    this.count$ = this.store.select(selectCount);
    this.double$ = this.store.select(selectDoubleCount);
  }
}
