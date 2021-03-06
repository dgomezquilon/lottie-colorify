import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { colorify, flatten } from 'lottie-colorify';
import LottieSample from './LottieSample.json';
import './App.css';

function App() {
  const container = useRef(null);
  const containerOriginal = useRef(null);
  const containerFlat = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      animationData: colorify(
        [
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
          '#ef32d0',
          [50, 100, 200],
          '#fe0088',
          [100, 100, 200],
          [100, 100, 100],
          [150, 100, 100],
          [20, 100, 100],
          [200, 100, 100],
          [200, 150, 100],
          [200, 15, 100],
        ],
        LottieSample,
      ),
    });

    Lottie.loadAnimation({
      container: containerFlat.current,
      animationData: flatten('#ef4efa', LottieSample),
    });

    // TODO: LottieSample is destroyed after using it. You can't use it again after using following block:
    // BLOCK START
    Lottie.loadAnimation({
      container: containerOriginal.current,
      animationData: LottieSample,
    });
    // BLOCK END
    // You cannot use LottieSample here. Need to investigate
  }, []);

  return (
    <div className="App">
      <div className="Container">
        <div className="LottieContainer" ref={containerOriginal} />
        <div className="LottieContainer" ref={containerFlat} />
        <div className="LottieContainer" ref={container} />
      </div>
      <em>by Ged Jurga</em>
    </div>
  );
}

export default App;
