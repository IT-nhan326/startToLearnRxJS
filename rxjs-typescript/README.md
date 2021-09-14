#RxJS

##Observables:
1. import { Observable } from 'rxjs'
2. use Contructor method to create an Observable which contains .next(), .error(), .complete() methods of Observable Object

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});