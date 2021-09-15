import { of } from "rxjs";
import { useState, useEffect } from "react";
import List from "../UI/List";

const OfOperator = () => {
  const [names, setNames] = useState('');

  const source = ["Adam", "Brian", "Christine"];
  const names$ = of(source);

  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => subscription.unsubscribe()
  }, []);

  return (
    <div className='App'>
      <h2>Of Operator</h2>
      {names && <List items={names} />}
    </div>
  );
};

export default OfOperator;
