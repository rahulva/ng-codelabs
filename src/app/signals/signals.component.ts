import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  template: `
    <p>
      signals works!
    </p>
  `,
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  fun() {
    const count = signal(0);
    console.log('The count is:' + count());

    count.set(3);
    console.log('The count is-Replaced:' + count());

    count.update(val => val + 1);
    console.log('The count is-Updated:' + count());
  }

  computedSignals() {
    const count: WritableSignal<number> = signal(0);
    const doubleCount: Signal<number> = computed(() => count() * 2);

    console.log('The count : ' + count());
    console.log('The doubleCount : ' + doubleCount());

    count.update(val => val + 2)
    console.log('The count : ' + count());
    console.log('The doubleCount : ' + doubleCount());
    // doubleCount.set(2); Not possilbe!

  }

  computedSingnalIsDynamic() {
    const showCount = signal(false);
    const count = signal(0);
    const conditionalCount = computed(() => {
      if (showCount()) {
        return `The count is ${count()}.`;
      } else {
        return 'Nothing to see here!';
      }
    });
  }

  consueSignal() {
    const count = signal(0);

    effect(() => {
      console.log(`The current count is: ${count()}`);
    });
  }

}
