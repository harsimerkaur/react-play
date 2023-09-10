import { useRef, useState, useEffect } from 'react';

function Stopwatch() {
  let timerIdRef = 0;
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef = setInterval(() => setCount(c => c+1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef);
    timerIdRef = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
export default Stopwatch;