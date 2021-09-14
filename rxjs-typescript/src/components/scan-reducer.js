import { of } from "rxjs";
import { reduce } from 'rxjs/operators'


const ScanAndReduce = () => {
    const observable = of(1,2,3,4,5)

    observable
        .pipe(reduce((total, currentValue) => {
            return total + currentValue
        },0))
        .subscribe({
            next: value => console.log('reduceValue = ' + value)
        })
    return null
}

export default ScanAndReduce