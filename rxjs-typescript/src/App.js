import "./App.css";
import DebounceTimeAndDistinceUntilChanged from "./components/debounceTime-distinctUntilChanged";
import FetchDataAjax from "./components/fetch-ajax";
import FilterInterval from "./components/Filter&Interval";
import MapIntervalRender from "./components/map-interval-render";
import MergeMap from "./components/mergeMap";
import ObservableObserver from "./components/ObservableObserver";
import OfOperator from "./components/ofOperator";
import Pluck from "./components/pluck";
import ScanAndReduce from "./components/scan-reducer";
import SwitchMap from "./components/SwitchMap";

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
      <MapIntervalRender/>
      <br/>
      <FetchDataAjax/>
      <br/>
      <Pluck/>
      <br/>
      <MergeMap/>
      <br/>
      <SwitchMap/>
    </main>
  );
}

export default App;
