# RxJS

## 1. Observables :

1. import { Observable } from 'rxjs'
2. use Contructor method to create an Observable which contains next(), .error(), .complete() methods of Observable Object
3. Is a wrapper of some data source(stream of value - synchronous or asynchonous)

## 2. Observer :

1. To execute some code whenever we receive a new value or error or Observable report the operation is complete
2. Is a set of callbacks (max 3) one for each type of noti delivered by Observable: "next","error","complete"
3. Observable still works normally if Observer only have 1 or 2 callbacks.

## 3. subcribe (method) - subcription :

1. subcription's definition is a method to signup for observer to receiving signal(value/error) from Observables
1. Subcribe operator is the connection(application of subcription) from observer to an Observable.
2. For observer to see items being emitted by Observable or receive error/complete noti fom Observable, it must first subcribe to that Observable with subcribe operator

## 4. unsubscribe() - method : 

1. to stop receiving signal from Observable anymore
2. First store the subcription of Observable inside an variable. Then variable.unsubcribe() to stop the subcription

## 5. Subject (EvenEmitter) :

1. Rxjs Subject is a special type of Observable that allows values to be multicasted to many Observers.
2. called subject.complete() will eventually stop values to communicate with every Observables

## 6. Operators (all operator execute before subcribe()) :
### **1. Pipeable Operators** : 
_When called they do not change the existing Observable instance. instead, they return a new Observable, whose subcription logic is based on the first 

_Piping help to write many *pipeable operators* consecutively is easy to read : **obs.pipe(op1(), op2(), op3())**

1. **pipe(map())** : 
to transfer data to another preferrable type of data
2. **pipe(throttleTime(milisecond))** : 
to only receiving signal from Observable every "milisecond"
3. **pipe(filter())** : 
similar to filter() JS
4. **pipe(take(val))** : 
unsubscribe operations after "val" times of execution
5. **pipe(debounceTime(milisecond))** : 
Emits a noti from Observable only after "milisecond" has passed without another emission (means since user stop interaction and since then the "milisecond" counted)
6. **(distinctUntilChanged())** : 
comparison the default value based on the last emitted value

### **2. Creation Operators** : can be called as a standalone function to create new Observable 
1. **of()** : 
of(1,2,3) will create an observable that emit 1, 2, 3 one right after another.
2. **interval(milisecond) !== throttleTime(milisecond)** : 
takes a number (not Observable) as input and produces an Observable as output every "milisecond"
3. **from()** : 
converts various other objects and data types into Observable. from([1,2,3]) will emits 1,2,3 unlike of() will emit [1,2,3]