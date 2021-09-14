import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { useState, useEffect } from "react";
import List from "../UI/List";

const MapIntervalRender = () => {
  const [names, setNames] = useState();

  const source = ["Adam", "Brian", "Christine"];
  const names$ = interval(1000).pipe(map(i => source.slice(0,i+1)));

  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className='App'>
      <h1>MapIntervalRender</h1>
      {names && <List items={names} />}
    </div>
  );
};

export default MapIntervalRender;
