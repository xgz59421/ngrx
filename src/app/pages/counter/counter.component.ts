import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { decrement, increment, increment_async } from 'src/app/store/actions/counter.actions';
import { selectCount } from 'src/app/store/selectors/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
  ]
})
export class CounterComponent  {

  count: Observable<number>
  constructor(private store: Store<AppState>) {
    this.count = this.store.pipe(select(selectCount))
  }
  increment_async() {
    this.store.dispatch(increment_async())
  }
  increment(payload: any) {
    this.store.dispatch(increment(payload))
  }
  decrement() {
    this.store.dispatch(decrement())
  }

}
