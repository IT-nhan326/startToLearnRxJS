import './Rxjs-Component.css'
import { Observable, of } from "rxjs";
import { useState, useEffect } from 'react';
import List from './List';

const RxjsComponent = () => {
  const [names, setNames] = useState();

  const source = ["Adam", "Brian", "Christine"];
  const names$ = of(source);


  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    console.log(subscription)
  },[]);

  return (
    <div className='App'>
      <h1>RxJS with React</h1>
      {names &&<List items={names} />}
    </div>
  );
}

export default RxjsComponent;
