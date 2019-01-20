/*
sentimood v1.0
a CoffeeScript browser-compatible port of thinkroth's Sentimental
open-source under the MIT license, (c) Ethan Arterberry 2015

modified by Kevin de Haan
*/

import { afinn } from './afindb.js';

/* Usage:
    sentiment = new Sentimood();
    analysis = sentiment.analyze("phrase");
*/

export default class Sentimood {
  constructor() {
    this.afinn = afinn;

    this.negations = {
      "not": -1,
      "t": -1,
    };
  }


  analyze(phrase) {
    var addPush, hits, i, item, j, len, noPunctuation, tokens, words;
    addPush = function(t, score) {
      hits += score;
      return words.push({t, score});
    };
    noPunctuation = phrase.replace(/[^a-zA-Z ]+/g, ' ').replace('/ {2,}/', ' ');
    tokens = noPunctuation.toLowerCase().split(" ");
    hits = 0;
    words = [];
    var negate = false;
    for (i = j = 0, len = tokens.length; j < len; i = ++j) {
      item = tokens[i];
      if (this.afinn.hasOwnProperty(item)) {
        if (negate) {
          addPush(item, this.afinn[item]*-1);
        } else {
          addPush(item, this.afinn[item]);
        }
      }
      negate = false;
      if (this.negations.hasOwnProperty(item)) {
        negate = true;
      }
    }
    return {
      score: hits,
      comparative: hits / words.length,
      words: words
    };
  }
}
