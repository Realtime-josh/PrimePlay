
const multiplyPrimes = (primeArray) => {
  const multipleArray = []
  for(let i=0; i<primeArray.length; i++){
    let multipleObject = {};
    multipleObject[primeArray[i]] = [primeArray[i], primeArray[i]*2,primeArray[i]*3,primeArray[i]*4, 
                                     primeArray[i]*5,primeArray[i]*6, primeArray[i]*7, primeArray[i]*8, 
                                     primeArray[i]*9,primeArray[i]*10];
    multipleArray.push(multipleObject);
  };
  return multipleArray;
};


export default multiplyPrimes;