# RxJS

## Observables :

1. import { Observable } from 'rxjs'
2. use Contructor method to create an Observable which contains next(), .error(), .complete() methods of Observable Object
3. Is a wrapper of some data source(stream of value - synchronous or asynchonous)

## Observer :

1. To execute some code whenever we receive a new value or error or Observable report the operation is complete
2. Is a set of callbacks (max 3) one for each type of noti delivered by Observable: "next","error","complete"
3. Observable still works normally if Observer only have 1 or 2 callbacks.

## subcribe (method) - subcription :

1. subcription's definition is a method to signup for observer to receiving signal(value/error) from Observables
1. Subcribe operator is the connection(application of subcription) from observer to an Observable.
2. For observer to see items being emitted by Observable or receive error/complete noti fom Observable, it must first subcribe to that Observable with subcribe operator

## unsubscribe() - method : 

1. to stop receiving signal from Observable anymore
2. First store the subcription of Observable inside an variable. Then variable.unsubcribe() to stop the subcription

## Subject (EvenEmitter) :

1. Rxjs Subject is a special type of Observable that allows values to be multicasted to many Observers.
2. called subject.complete() will eventually stop values to communicate with every Observables

## Operators (all operator execute before subcribe()) :
### **1. Pipeable Operators** : 
_When called they do not change the existing Observable instance. instead, they return a new Observable, whose subcription logic is based on the first Observable
_Piping help to write many *pipeable operators* consecutively is easy to read : obs.pipe(op1(), op2(), op3())
1. **pipe(map())** : to transfer data to another preferrable type of data
2. **pipe(throttleTime(milisecond))** : to only receiving signal from Observable every "milisecond"

### **2. Creation Operators** : can be called as a standalone function to create new Observable 
1. **of()** : of(1,2,3) will create an observable that emit 1, 2, 3 one right after another.
2. **interval()** : takes a number (not Observable) as input and produces an Observable as output