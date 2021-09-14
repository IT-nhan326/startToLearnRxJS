import { Observable } from "rxjs";

const ObservableObserver = () => {

  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
  //create an observer
  const observer = {
    next: (x) => {console.log("Observer got a next value: " + x)},
    error: (err) => console.error("Observer got an error: " + err),
    complete: () => console.log("Observer got a complete notification"),
  };
  
  observable.subscribe(observer)


  return (
    <div className='App'>
      <h1>Observable-Observer</h1>
    </div>
  );
};

export default ObservableObserver;
