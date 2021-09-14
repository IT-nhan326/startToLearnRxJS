import { interval } from "rxjs";
import { filter,take } from "rxjs/operators";


const FilterInterval = () => {
  var observable = interval(500);

  const FilteredObs = observable.pipe(filter((value) => value % 2 === 0));
  FilteredObs
    .pipe(take(3))
    .subscribe({
    next: (value) => console.log(value),
  });
  return null;
};

export default FilterInterval;
