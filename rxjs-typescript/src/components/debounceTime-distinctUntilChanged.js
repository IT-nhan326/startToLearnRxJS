import { fromEvent } from "rxjs";
import { useEffect, useRef } from "react";
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'


const DebounceTimeAndDistinceUntilChanged = () => {
    const inputField = useRef()
    
    useEffect(() => {
      var observable = fromEvent(inputField.current, "input");

      observable
      .pipe(map(event => event.target.value),debounceTime(500), distinctUntilChanged())
      .subscribe({
        next: (value) => console.log(value),
      });
      return () => observable.unsubscribe()
    },[]);
    


    return <input ref={inputField} className='input'></input>;
}

export default DebounceTimeAndDistinceUntilChanged;