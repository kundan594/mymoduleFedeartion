import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',  // This ensures that the service is available throughout the app
})
export class SharedService {
  private subject = new BehaviorSubject<any>('staring value by behaviour ');

  // Method to emit a value
  emitValue(value: any) {
    this.subject.next(value);
  }

  // Observable that the apps can subscribe to
  getValue() {
    return this.subject.asObservable();
  }
}
