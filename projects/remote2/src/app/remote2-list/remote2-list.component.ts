import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { combineLatest, concatMap, forkJoin, fromEvent, map, Observable, of } from "rxjs";
//import { ajax } from "rxjs/ajax";

@Component({
  selector: 'app-remote2-list',
  imports: [],
  templateUrl: './remote2-list.component.html',
  styleUrl: './remote2-list.component.scss'
})
export class Remote2ListComponent implements OnInit ,DoCheck{
 //https://rxmarbles.com/
 //https://rxjs.dev/guide/observable

  ngOnInit(){

    this.Warm_up_Observable();

  }

  // ngOnchanges(){

  // }

  ngDoCheck(): void {
    
  }

Warm_up_Observable(){

  const observable1$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('A');
    subscriber.next('B');
    subscriber.complete();
  });
  
  observable1$.subscribe();
  observable1$.subscribe();
  observable1$.subscribe();


const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

const subscription = observable$.subscribe(value => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 3000);
  }


  otherExampleToRead(){
    
const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

console.log('Subscription 1 starts');
observable$.subscribe(value => console.log('Subscription 1:', value));

setTimeout(() => {
  console.log('Subscription 2 starts');
  observable$.subscribe(value => console.log('Subscription 2:', value));
}, 1000);

// next 

const observable2$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
});

console.log('Before subscribe');
observable2$.subscribe(value => console.log(value));
console.log('After subscribe');

  }

  tearDown(){
    
const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
    subscriber.complete();
  }, 2000);

  return () => {
    // after subscriptipn has been completed then tear down will run .
    console.log('Teardown');
  };
});

console.log('Before subscribe');
observable$.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});
console.log('After subscribe');
  }


  error_notification(){
    
const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
  }, 2000);
  setTimeout(() => subscriber.error(new Error('Failure')), 4000);

  return () => {
    console.log('Teardown');
  };
});

console.log('Before subscribe');
observable$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err.message),
  complete: () => console.log('Completed')
});
console.log('After subscribe');
  }

  cancellation_subscription(){
    const interval$ = new Observable<number>(subscriber => {
      let counter = 1;
    
      const intervalId = setInterval(() => {
        console.log('Emitted', counter);
        subscriber.next(counter++);
      }, 2000);
    
      return () => {
        clearInterval(intervalId);
      };
    });
    
    const subscription = interval$.subscribe(value => console.log(value));
    
    setTimeout(() => {
      console.log('Unsubscribe');
      subscription.unsubscribe();
    }, 7000);
  }


  cold_obserable(){
//     const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

// ajax$.subscribe(
//   data => console.log('Sub 1:', data.response.first_name)
// );

// ajax$.subscribe(
//   data => console.log('Sub 2:', data.response.first_name)
// );

// ajax$.subscribe(
//   data => console.log('Sub 3:', data.response.first_name)
// );

  }

  hotObservable(){
    
const helloButton = document.querySelector('button#hello') as HTMLButtonElement;

if (helloButton) {

const helloClick$ = new Observable<MouseEvent>(subscriber => {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});


helloClick$.subscribe(
  event => console.log('Sub 1:', event.type, event.x, event.y)
);



setTimeout(() => {
  console.log('Subscription 2 starts');
  helloClick$.subscribe(
    event => console.log('Sub 2:', event.type, event.x, event.y)
  );
}, 5000);

}


  }

  forkJoinExample(){
    interface NameResponse {
      first_name: string;
    }
    
    interface NationResponse {
      capital: string;
    }
    
    interface FoodResponse {
      dish: string;
    }
    const randomName$ = fetch('https://random-data-api.com/api/name/random_name')  ;

const randomNation$ = fetch('https://random-data-api.com/api/nation/random_nation');

const randomFood$ = fetch('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe(ajaxResponse => console.log(ajaxResponse.response.first_name));
// randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse.response.capital));
// randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) => console.log(`${nameAjax} is from ${nationAjax} and likes to eat ${foodAjax}.`)
);
  }


  forkError(){
    const a$ = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next('A');
        subscriber.complete();
      }, 5000);
    
      return () => {
        console.log('A teardown');
      };
    });
    
    const b$ = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.error('Failure!');
      }, 3000);
      
      return () => {
        console.log('B teardown');
      };
    });
    
    forkJoin([a$, b$]).subscribe({
      next: value => console.log(value),
      error: err => console.log('Error:', err)
    });
  }

  combinedLatest(){


// Get HTML elements and handle potential null values
const temperatureInput = document.getElementById('temperature-input') as HTMLInputElement;
const conversionDropdown = document.getElementById('conversion-dropdown') as HTMLSelectElement;
const resultText = document.getElementById('result-text') as HTMLElement;

if (!temperatureInput || !conversionDropdown || !resultText) {
  console.error('Required DOM elements are missing.');
} else {
  // Create observables for input events
  const temperatureInputEvent$ = fromEvent<InputEvent>(temperatureInput, 'input');
  const conversionInputEvent$ = fromEvent<Event>(conversionDropdown, 'change');

  // Combine latest values from both observables
  combineLatest([temperatureInputEvent$, conversionInputEvent$]).subscribe({
    next: ([temperatureInputEvent, conversionInputEvent]) => {
      const temperature = parseFloat((temperatureInputEvent.target as HTMLInputElement).value);
      const conversion = (conversionInputEvent.target as HTMLSelectElement).value;

      let result: number | undefined;
      if (conversion === 'f-to-c') {
        result = (temperature - 32) * 5 / 9;
      } else if (conversion === 'c-to-f') {
        result = temperature * 9 / 5 + 32;
      }

      resultText.innerText = result !== undefined ? `Result: ${result.toFixed(2)}` : 'Invalid conversion type';
    },
    error: (err) => {
      console.error('An error occurred:', err);
    },
  });
}


  }


  testcode(){
    const source$ = new Observable(subscriber => {
      setTimeout(() => subscriber.next('A'), 2000);
      setTimeout(() => subscriber.next('B'), 5000);
    });
    
    console.log('App has started');
    source$.pipe(
      concatMap(value => of(1, 2))
    ).subscribe(value => console.log(value));

    ////
    const endpointInput: HTMLInputElement = document.querySelector('input#endpoint') as HTMLInputElement;
const fetchButton = document.querySelector('button#fetch') as HTMLButtonElement;

fromEvent(fetchButton, 'click').pipe(
  map(() => endpointInput.value),
  concatMap(value =>
    fetch(`https://random-data-api.com/api/${value}/random_${value}`)
  )
).subscribe(
  value => console.log(value)
);
  }

  ////////


//   const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
// const fetchButton = document.querySelector('button#fetch');

// fromEvent(fetchButton, 'click').pipe(
//   map(() => endpointInput.value),
//   concatMap(value =>
//     ajax(`https://random-data-api.com/api/${value}/random_${value}`)
//   ),
//   catchError(() => EMPTY)
// ).subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });


//////

// const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
// const fetchButton = document.querySelector('button#fetch');

// fromEvent(fetchButton, 'click').pipe(
//   map(() => endpointInput.value),
//   concatMap(value =>
//     ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
//       catchError(error => of(`Could not fetch data: ${error}`))
//     )
//   )
// ).subscribe({
//   next: value => console.log(value),
//   error: err => console.log('Error:', err),
//   complete: () => console.log('Completed')
// });



// const emitButton = document.querySelector('button#emit');
// const inputElement: HTMLInputElement = document.querySelector('#value-input');
// const subscribeButton = document.querySelector('button#subscribe');

// const value$ = new Subject<string>();

// fromEvent(emitButton, 'click').pipe(
//   map(() => inputElement.value)
// ).subscribe(value$);

// fromEvent(subscribeButton, 'click').subscribe(
//   () => {
//     console.log('New Subscription');
//     value$.subscribe(value => console.log(value));
//   }



////



// const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
// const loginButton: HTMLElement = document.querySelector('button#login');
// const logoutButton: HTMLElement = document.querySelector('button#logout');
// const printStateButton: HTMLElement = document.querySelector('button#print-state');

// const isLoggedIn$ = new BehaviorSubject<boolean>(false);

// fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
// fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

// // Navigation bar
// isLoggedIn$.subscribe(
//   isLoggedIn => loggedInSpan.innerText = isLoggedIn.toString()
// );

// // Buttons
// isLoggedIn$.subscribe(isLoggedIn => {
//   logoutButton.style.display = isLoggedIn ? 'block' : 'none';
//   loginButton.style.display = !isLoggedIn ? 'block' : 'none';
// });

// fromEvent(printStateButton, 'click').pipe(
//   withLatestFrom(isLoggedIn$)
// ).subscribe(
//   ([event, isLoggedIn]) => console.log('User is logged in:', isLoggedIn)
// );



  // nesxt 



  

}
