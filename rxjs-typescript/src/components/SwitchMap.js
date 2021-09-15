import { useEffect } from 'react'
import { fromEvent, interval } from 'rxjs'
import { switchMap, take } from 'rxjs/operators'
const SwitchMap = () => {

    useEffect(()=>{
        const obs1 = fromEvent(document.getElementById('clickMe'),'click')
        const obs2 = interval(500)

        obs1
          .pipe(switchMap((event) => obs2),take(5))
          .subscribe((value) => console.log(value));
        
        
    },[])

    return (
        <div>
            <span>SwitchMap </span>
            <button id='clickMe'>Click me pls!!</button>
        </div>
    )
}

export default SwitchMap