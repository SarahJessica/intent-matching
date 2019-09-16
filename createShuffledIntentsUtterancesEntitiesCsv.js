const { writeFile } = require('fs');

// PlayPodcastIntent.js
const podcastValues = require('./input/PlayPodcastIntent').values;
const podcastUtterances = require('./input/PlayPodcastIntent').utterances;
// PlayRadioIntent
const radioValues = require('./input/PlayRadioIntent').values;
const radioUtterances = require('./input/PlayRadioIntent').utterances;
// misc intents
const {
  WhatStationIsPlayingIntent,
  WhatsPlayingTitleAndSynopsisIntent,
  WhatsPlayingIntent
} = require('./input/otherIntents');

const csvHead = 'Intent,Utterance,Entitiy,Id';
// let csv = '';

const podcastArray = () => {
  let podcastArray = [];

  for (utterance of podcastUtterances) {
    for (value of podcastValues) {
      podcastArray.push([
        'PlayPodcastIntent',
        utterance.replace('{ProgrammeBrand}', value.name.value),
        value.name.value,
        value.id
      ]);
      for (synonym of value.name.synonyms) {
        podcastArray.push([
          'PlayPodcastIntent',
          utterance.replace('{ProgrammeBrand}', synonym),
          synonym,
          value.id
        ]);
      }
    }
  }
  return podcastArray;
};

const radioArray = () => {
  let radioArray = [];

  for (utterance of radioUtterances) {
    for (value of radioValues) {
      radioArray.push([
        'PlayRadioIntent',
        utterance.replace('{RadioStation}', value.name.value),
        value.name.value,
        value.id
      ]);
      for (synonym of value.name.synonyms) {
        radioArray.push([
          'PlayRadioIntent',
          utterance.replace('{RadioStation}', synonym),
          synonym,
          value.id
        ]);
      }
    }
  }
  return radioArray;
};

const miscArray = () => {
  let miscArray = [];
  for (utterance of WhatStationIsPlayingIntent) {
    miscArray.push([ 'WhatStationIsPlayingIntent', utterance, '', '' ].join(','));
  }
  for (utterance of WhatsPlayingTitleAndSynopsisIntent) {
    miscArray.push([ 'WhatsPlayingTitleAndSynopsisIntent', utterance, '', '' ].join(','));
  }
  for (utterance of WhatsPlayingIntent) {
    miscArray.push([ 'WhatsPlayingIntent', utterance, '', '' ].join(','));
  }

  return miscArray;
};

// sorted to shuffle a bit
const data = [
  podcastArray().sort(() => 0.5 - Math.random()).join('\n'),
  radioArray().sort(() => 0.5 - Math.random()).join('\n'),
  // miscArray().sort(() => 0.5 - Math.random()).join('\n')
].sort(() => 0.5 - Math.random());

data.unshift(csvHead);

writeFile(
  './data/training-data-with-entities.csv',
  data.join('\n'),
  'utf8',
  (err) => {
    if (err) throw err;
    console.log('csv file of complete utterances with entities saved!');
  }
);
