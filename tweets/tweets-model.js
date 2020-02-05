const db = require("../data/db-config.js");

module.exports = {
    get,
}

const optionsCount = 3;

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function get() {
    return db('tweets')
        .then(tweets => {
            return db('candidates')
                .then(candidates => {
                    const rounds = tweets.map(tweet => {

                        const options = getRandom(candidates, optionsCount);

                        const correctOption = candidates[tweet.candidate_id -1];

                        if (options.includes(correctOption) === false){
                            const randomizedPlace = Math.floor(Math.random() * optionsCount)
                            options[randomizedPlace] = correctOption;
                        }

                        round = {
                            id: tweet.id,
                            tweet: {text: tweet.tweet,},
                            options: options,
                            correct_option_id: tweet.candidate_id
                        }

                        return round;
                    })

                    return {
                        // rounds: shuffle(rounds),
                        rounds: rounds,
                    }
                })
        })
}