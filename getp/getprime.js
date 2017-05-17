function getPrime(number) {
    var primes = [];
    for(var i = 2; i < value; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(number);
    for(var i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < number; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < number; i++) {
        if(primes[i] === true) {
            
        }
    }
}