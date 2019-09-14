const { writeFile } = require('fs');
const { PlayPodcastIntent, 
  PodcastOnlyIntent, 
  PlayRadioIntent, 
  RadioOnlyIntent, 
  WhatsPlayingIntent, 
  WhatsPlayingTitleAndSynopsisIntent, 
  WhatStationIsPlayingIntent } = require('./data/training-data.json');

  
  function appendDataToCsv(array, name, dataStr = '') {
    for (utterance of array) {
      dataStr += ('\n' + [name, `${utterance}`].join(','));
    }
    return dataStr;
  }
    
  function createCsvFile() {
  let data = 'Intent,Utterance';
  data = appendDataToCsv(PlayPodcastIntent, 'PlayPodcastIntent', data);
  data = appendDataToCsv(PodcastOnlyIntent, 'PodcastOnlyIntent', data);
  data = appendDataToCsv(PlayRadioIntent, 'PlayRadioIntent', data);
  data = appendDataToCsv(RadioOnlyIntent, 'RadioOnlyIntent', data);
  data = appendDataToCsv(WhatsPlayingIntent, 'WhatsPlayingIntent', data);
  data = appendDataToCsv(WhatsPlayingTitleAndSynopsisIntent, 'WhatsPlayingTitleAndSynopsisIntent', data);
  data = appendDataToCsv(WhatStationIsPlayingIntent, 'WhatStationIsPlayingIntent', data);
  return data;
}


writeFile('./data/training-data.csv', createCsvFile(), 'utf8', (err) => {
  if (err) throw err;
  console.log('csv file of complete utterances saved!');
});
