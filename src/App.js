import React, { useState } from 'react';
import './css/App.css';
import primeNumbers from './helpers/primeFunction';
import multiplePrimes from './helpers/multiplyPrimes';


const App = (props) => {
  let [count, setCount] = useState(props.count);
  let [primeBorder, setBorder] = useState(props.primeBorder);
  let [multiplePrime, setPrime] = useState(props.multiplePrime);

  const setPrimes = () => {
    setPrime(multiplePrimes(primeNumbers(primeBorder, count)));
  };

  const increment = () => {
    setCount(count + 1);
    setPrimes();
  };

  const decrement = () => {
    count == 0 ? setCount(0) : setCount(count - 1);
    setPrimes();
  };

  const reset = () => {
    setCount(0);
    setPrimes();
  };

  const borderRange = () => {
    setBorder(primeBorder + 1);
    setPrimes();
  };

  const resetBorderRange = () => {
    setBorder(10);
    setPrimes();
  };

  return (
    <div className="App">
      <div>
        <p>{`The prime numbers between ${count}`}</p>
        <p>{`Now showing up to ${primeBorder} prime numbers within range ${count}`}</p>
        <p className='primeDiv'>{`${primeNumbers(primeBorder, count)}`}</p>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => reset()}>reset</button>
        <button onClick={() => borderRange()}>Increase Prime Range</button>
        <button onClick={() => resetBorderRange()}>Reset Prime Range</button>
      </div>

      <div className='primeTableDiv'>
        <table className='primeTable'>
          <tbody>
           {multiplePrime.map((data) => (
             Object.values(data).map(result => (
              <tr><td>{`${result}, `}</td></tr>
             ))
           ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

App.defaultProps = {
  count : 0,
  primeBorder: 10,
  multiplePrime: [],
};

export default App;
