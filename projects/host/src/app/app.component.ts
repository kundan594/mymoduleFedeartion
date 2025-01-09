import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedService } from './service/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'host';
  counter$:any;
  value$:any;
 

  constructor(private store: Store<{ counter: number }>,private sharedService: SharedService) {
    ///this.value$ ='asdsad';

    this.counter$ = this.store.select('counter');
    this.sharedService.getValue().subscribe(val=>
        this.value$ = val
    );
  }

  ngOnInit() {
    // Emitting a value from the host app
    this.sharedService.emitValue('Hello from Host!');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}