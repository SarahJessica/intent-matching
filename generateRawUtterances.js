const { writeFile } = require('fs');

// PlayPodcastIntent.js
const podcastValues = require('./input/PlayPodcastIntent').values;
const podcastUtterances = require('./input/PlayPodcastIntent').utterances;

// PlayRadioIntent.js
const radioValues = require('./input/PlayRadioIntent').values;
const radioUtterances = require('./input/PlayRadioIntent').utterances;

// misc intents
const {WhatStationIsPlayingIntent, WhatsPlayingTitleAndSynopsisIntent, WhatsPlayingIntent} = require ('./input/otherIntents');

function makeSynonymsAndValuesArray(valuesObject) {
  let slotValues = [];
  for (valueObject of valuesObject) {
    slotValues.push(valueObject.name.value);
    for (synonym of valueObject.name.synonyms) {
      slotValues.push(synonym);
    }
  }
  return slotValues;
}

function createCompleteUtterances(phrases, values, replaceValue) {
  let allPhrases = [];
  for (phrase of phrases) {
    for (value of values) {
      allPhrases.push(phrase.replace(replaceValue, value));
    }
  }
  return allPhrases;
}

const podcastArray = makeSynonymsAndValuesArray(podcastValues);
const makePodcastUtterances = () => {
  return createCompleteUtterances(podcastUtterances, podcastArray, '{ProgrammeBrand}');
}

const radioArray = makeSynonymsAndValuesArray(radioValues);
const makeRadioUtterances = () => {
  return createCompleteUtterances(radioUtterances, radioArray, '{RadioStation}');
}

const trainingData = {
  PlayPodcastIntent: makePodcastUtterances(),
  PodcastOnlyIntent: podcastArray,
  PlayRadioIntent: makeRadioUtterances(),
  RadioOnlyIntent: radioArray,
  WhatsPlayingIntent,
  WhatsPlayingTitleAndSynopsisIntent,
  WhatStationIsPlayingIntent
}

writeFile('./data/training-data.json', JSON.stringify(trainingData), 'utf8', (err) => {
  if (err) throw err;
  console.log('json file of complete utterances saved!');
});