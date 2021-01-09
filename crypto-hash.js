const crypto = require('crypto')

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    // sort() inputs so arguments can be added in any order
    hash.update(inputs.sort().join(' '));

    return hash.digest('hex');
}

module.exports = cryptoHash;