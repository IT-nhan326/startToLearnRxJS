import { useRef, useEffect } from "react";
import { fromEvent } from "rxjs";
import { mergeMap,map } from "rxjs/operators";

const MergeMap = () => {
  const input1 = useRef();
  const input2 = useRef();

  useEffect(() => {
    var obs1 = fromEvent(input1.current, "input");
    var obs2 = fromEvent(input2.current, "input");
    const span = document.querySelector('span')

    obs1.pipe(mergeMap(event1 => {
        return obs2
        .pipe(map(event2 => event1.target.value + ' ' + event2.target.value)
        )
    }))
    .subscribe(
        combineValue => span.textContent = ' ' + combineValue
    )

    return () => {
      obs1.unsubscribe();
      obs2.unsubscribe();
    };
  }, []);

  return (
    <div>
      <input ref={input1} type='text' id='input1'></input>
      <input ref={input2} type='text' id='input2'></input>
      <br />
      <p>
        Combine value: 
        <span></span>
      </p>
    </div>
  );
};

export default MergeMap;
