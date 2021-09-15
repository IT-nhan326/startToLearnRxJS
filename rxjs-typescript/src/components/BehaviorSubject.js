import { useEffect } from "react";
import { BehaviorSubject, fromEvent } from "rxjs";

const Behaviorsubject = () => {
  const clickEmitted = new BehaviorSubject(0);

  //clickEmitted.subscribe(print)
  //clickEmitted.next(1)
  //calling subscribe after .next will get the value(1) unlike Subject, the later subscribe will not hold any value
  //clickEmitted.subscribe()
  useEffect(() => {
    clickEmitted.subscribe(
      (value) => (document.getElementById("printedOut").textContent = value)
    );
  }, []);

  return (
    <div>
      <span>Behavior Subject </span>
      <button
        id='clickMe'
        onClick={() => clickEmitted.next(clickEmitted.getValue() + 1)}
      >
        Click Me!!!
      </button>
      <div id='printedOut'></div>
    </div>
  );
};

export default Behaviorsubject;
