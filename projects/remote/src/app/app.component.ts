import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment,decrement } from '../../../host/src/app/store/counter.actions';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../host/src/app/service/shared.service';
// import { increment } from 'host/Actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'remote';
  counter$:any;
  value: any;

  constructor(private store: Store<{ counter: number }>,private sharedService: SharedService) {
    this.counter$ = this.store.select('counter');
  }

  ngOnInit() {
    // Subscribing to the shared service to get the emitted value
    this.sharedService.getValue().subscribe((newValue) => {
      this.value = newValue;
    });
  }

  increment() {
    this.store.dispatch(increment());
    this.sharedService.emitValue('incremeing value ' + this.counter$.value)
  }

  decrement() {
    this.store.dispatch(decrement());
    this.sharedService.emitValue('decrementing value ' + this.counter$.value)
  }
}


