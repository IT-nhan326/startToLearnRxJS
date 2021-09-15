import { fromEvent } from "rxjs";
import { useEffect, useRef } from "react";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

const Pluck = () => {
  const inputField = useRef();

  useEffect(() => {
    var observable = fromEvent(inputField.current, "input");

    observable
      //using pluck to drill into "observable" => extract from target object(our action) the "value" properties (the inputfield)
      .pipe(
        pluck("target", "value"),
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe({
        next: (value) => console.log(value),
      });
    return () => observable.unsubscribe();
  }, []);

  return (
    <span>
      <span>Pluck </span>
      <input ref={inputField} className='input'></input>
    </span>
  );
};

export default Pluck;
