const getGoldbachsConjecture = (n) => {

  if (n < 2 || n % 2 !== 0) {
    return;
  }

  const primes = getFirstPrimes(n);

  for (let i = 0; i < primes.length; i++) {

    for (let j = 0; j < primes.length; j++) {

      const primesSum = primes[i] + primes[j];

      if (primesSum === n) {
        return [primes[i], primes[j]];
      } else if (primesSum > n) {
        break;
      }
    }
  }
}

const getFirstPrimes = (n) => {

  const primes = [];

  for (let i = 1; i < n; i++) {

    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

const isPrime = (n) => {

  if (n < 2) {
    return false;
  }

  for (let potentialDivisor = 2; potentialDivisor < n; potentialDivisor++) {

    if (n % potentialDivisor === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  getGoldbachsConjecture
};
