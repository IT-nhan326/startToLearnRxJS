import "./App.css";
import DebounceTimeAndDistinceUntilChanged from "./components/debounceTime-distinctUntilChanged";
import FilterInterval from "./components/Filter&Interval";
import ObservableObserver from "./components/ObservableObserver";
import OfOperator from "./components/ofOperator";
import ScanAndReduce from "./components/scan-reducer";

function App() {
  return (
    <main>
      <OfOperator />
      <ObservableObserver />
      <FilterInterval />
      <br/>
      <DebounceTimeAndDistinceUntilChanged />
      <br/>
      <ScanAndReduce/>
    </main>
  );
}

export default App;
