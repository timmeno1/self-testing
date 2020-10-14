import React, {useState} from 'react';
import s from './App.module.css';



function App() {
    const maxLimit = 10;
    const [number, setNumber] = useState<number>(0);

    const increment = () => {
        if (number < maxLimit) {
            setNumber(number+1);
        }
    }

    const reset = () => {
        setNumber(0)
    }

    return (
    <div className={s.App}>
      <div className={s.mainBlock}>
          <div className={number!==maxLimit ? s.displayBlock : s.maxDisplayBlock}>{number}</div>
          <div className={s.buttonsBlock}>
              <button className={number===maxLimit ? s.disabledButtonInc : s.buttonInc} onClick={increment}>inc</button>
              <button className={number===0 ? s.disabledButtonReset : s.buttonReset} onClick={reset}>reset</button>
          </div>
      </div>
    </div>
  );
}

export default App;
