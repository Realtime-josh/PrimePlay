/* 
  The function primeNumbers takes in 3 arguments.

  k= The range of prime numbers within its positive boundary.
  
  n= The number of prime numbers the user desires to obtain. If the 
  user requires all prime numbers within the range of k, The limit should be 
  raised equal to or above the value of k.
  
  t= Set at default of 2. Used to manipulate the function while deriving
  prime numbers.
  */

const getPrimeObject = (gatheredNums) => {
    const allNumbers = [];
    const allPrimeNumbers = [];
    const count = {};
    for(let nums of gatheredNums){
      allNumbers.push(Number(Object.keys(nums)))
    };
    for(let i=0; i<allNumbers.length; i++){
      count[allNumbers[i]] = 1 + (count[allNumbers[i]] || 0);
    };
    for(let prime in count){
      if(count[prime] < 2){
        allPrimeNumbers.push(Number(prime));
      };
    };
    return allPrimeNumbers;
  };
  
  const gatherNumbers = (holder) => {
    const newNumbersHolder = [];
    const numberDump = [];
    for(let i=0; i<holder.length; i++){
      for(let data of holder[i]){
        if(Number(Object.keys(data)) % Number(Object.values(data)) === 0 && Number(Object.keys(data)) !== 
           Number(Object.values(data))){
          numberDump.push(data)
          continue;
        }else{
          newNumbersHolder.push(data)
        };
      };
    };
    return getPrimeObject(numberDump);
  }
  
  const splitArray = (array, parts=8) => {
    let result;
    result= [];
    for(let i=parts; i>0; i--){
      result.push(array.splice(0, Math.ceil(array.length / i)));
    };
    return gatherNumbers(result);
  };
  
  const arrayTruthy = (objectNumbers) => {  
    const value = splitArray(objectNumbers);
    return value;
  };
  
  
  const primeNumbers = (n, k, t=2) => {
    try{
      if(typeof n !== 'number' || typeof k !== 'number' || typeof t !== 'number'){
        return "Cannot process input";
      }else{
        let primeArray;
        primeArray = [];
        for(let i=t; i<=k ; i++){
          for(let j=t-1; j<=10; j++){
            if(i !== j){
              let arrayObject;
              arrayObject= {};
              arrayObject[i] = j;
              primeArray.push(arrayObject);
            };
          };
        };
        return arrayTruthy(primeArray).slice(0,n);
      };
    }catch{
      throw "Unable to process data"
    };
  };
  
  export default primeNumbers;

//   const solution = primeNumbers(10, 5000);
//   console.log(solution);
  
  
  