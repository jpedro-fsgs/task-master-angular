import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update(c => c + 1);
  }

  decrement() {
    this.counter.update(c => c - 1);
  }

  reset() {
    this.counter.set(0);
  }
}
