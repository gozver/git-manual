const goldbachsConjecture = require('./goldbachs-conjecture');

const n = 90;

const gc = goldbachsConjecture.getGoldbachsConjecture(n);

console.log('Goldbach\'s conjecture primes for', n, 'are', gc);
