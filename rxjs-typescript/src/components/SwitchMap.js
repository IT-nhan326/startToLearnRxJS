import { useEffect } from 'react'
import { fromEvent, interval } from 'rxjs'
import { switchMap } from 'rxjs/operators'
const SwitchMap = () => {

    useEffect(()=>{
        const obs1 = fromEvent(document.getElementById('clickMe'),'click')
        const obs2 = interval(500)

        obs1
          .pipe(switchMap((event) => obs2))
          .subscribe((value) => console.log(value));
    },[])

    return (
        <button id='clickMe'>Click me pls!!</button>
    )
}

export default SwitchMap