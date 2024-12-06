import "./index.css";
import { Clock } from "./components/clock";
import { Stopwatch } from "./components/stopwatch";

function App() {
  return (
    <div className="clock">
      <Clock />
      <Stopwatch />
    </div>
  );
}

export default App;
