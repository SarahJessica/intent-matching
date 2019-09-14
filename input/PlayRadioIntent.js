const values = [
  {
    id: 'bbc_radio_one',
    name: {
      value: 'b. b. c. radio one',
      synonyms: [ 'radio one', 'bbc radio one' ]
    }
  },
  {
    id: 'bbc_1xtra',
    name: {
      value: 'b. b. c. radio one extra',
      synonyms: [
        'bbc radio one extra',
        'one extra',
        'radio one extra',
        'one xtra',
        'radio one xtra',
        'bbc radio one xtra',
        'b. b. c. radio one xtra'
      ]
    }
  },
  {
    id: 'bbc_radio_two',
    name: {
      value: 'b. b. c. radio two',
      synonyms: [ 'radio two', 'bbc radio two' ]
    }
  },
  {
    id: 'bbc_radio_three',
    name: {
      value: 'b. b. c. radio three',
      synonyms: [ 'radio three', 'bbc radio three' ]
    }
  },
  {
    id: 'bbc_radio_fourfm',
    name: {
      value: 'b. b. c. radio four f. m.',
      synonyms: [
        'bbc radio four f. m.',
        'radio four f. m.',
        'b. b. c. radio four',
        'bbc radio four',
        'radio four'
      ]
    }
  },
  {
    id: 'bbc_radio_four_extra',
    name: {
      value: 'b. b. c. radio four extra',
      synonyms: [ 'bbc radio four extra', 'radio four extra' ]
    }
  },
  {
    id: 'bbc_radio_five_live',
    name: {
      value: 'b. b. c. radio five live',
      synonyms: [ 'radio five live', 'five live', 'radio five', 'bbc radio five live' ]
    }
  },
  {
    id: 'bbc_radio_five_live_sports_extra',
    name: {
      value: 'b. b. c. radio five live sports extra',
      synonyms: [
        'radio five live sports extra',
        'sports extra',
        'five live sports extra',
        'bbc radio five live sports extra'
      ]
    }
  },
  {
    id: 'bbc_6music',
    name: {
      value: 'b. b. c. radio six music',
      synonyms: [ 'radio six music', 'six music', 'radio six', 'bbc radio six music' ]
    }
  },
  {
    id: 'bbc_asian_network',
    name: {
      value: 'b. b. c. asian network',
      synonyms: [ 'asian network', 'radio asian network', 'bbc asian network' ]
    }
  },
  {
    id: 'bbc_world_service',
    name: {
      value: 'b. b. c. world service online',
      synonyms: [
        'world service online',
        'b. b. c. world service',
        'bbc world service',
        'world service',
        'radio world service',
        'bbc world service online'
      ]
    }
  },
  {
    id: 'bbc_radio_scotland_fm',
    name: {
      value: 'b. b. c. radio scotland f. m.',
      synonyms: [
        'bbc radio scotland f. m.',
        'b. b. c. radio scotland',
        'bbc radio scotland',
        'b. b. c. scotland',
        'bbc scotland',
        'radio scotland f. m.',
        'radio scotland',
        'scotland radio',
        'scotland'
      ]
    }
  },
  {
    id: 'bbc_radio_nan_gaidheal',
    name: {
      value: 'b. b. c. radio nan gaidheal',
      synonyms: [
        'bbc radio nan gaidheal',
        'b. b. c. nan gaidheal',
        'bbc nan gaidheal',
        'b. b. c. gaidheal',
        'bbc gaidheal',
        'b. b. c. radio gaidheal',
        'bbc radio gaidheal',
        'radio nan gaidheal'
      ]
    }
  },
  {
    id: 'bbc_radio_ulster',
    name: {
      value: 'b. b. c. radio ulster',
      synonyms: [
        'bbc radio ulster',
        'radio ulster',
        'b. b. c. ulster',
        'bbc ulster',
        'ulster radio',
        'ulster'
      ]
    }
  },
  {
    id: 'bbc_radio_foyle',
    name: {
      value: 'b. b. c. radio foyle',
      synonyms: [
        'bbc radio foyle',
        'b. b. c. foyle',
        'bbc foyle',
        'radio foyle',
        'foyle radio',
        'foyle'
      ]
    }
  },
  {
    id: 'bbc_radio_wales_fm',
    name: {
      value: 'b. b. c. radio wales f. m.',
      synonyms: [
        'bbc radio wales f. m.',
        'b. b. c. radio wales',
        'bbc radio wales',
        'b. b. c. wales',
        'bbc wales',
        'radio wales f. m.',
        'radio wales',
        'wales radio',
        'wales'
      ]
    }
  },
  {
    id: 'bbc_radio_cymru',
    name: {
      value: 'b. b. c. radio cymru',
      synonyms: [
        'bbc radio cymru',
        'b. b. c. cymru',
        'bbc cymru',
        'radio cymru',
        'cymru radio',
        'cymru'
      ]
    }
  },
  {
    id: 'bbc_radio_cymru_2',
    name: {
      value: 'b. b. c. radio cymru two',
      synonyms: [
        'bbc radio cymru two',
        'b. b. c. cymru two',
        'bbc cymru two',
        'radio cymru two',
        'cymru two radio',
        'cymru two'
      ]
    }
  },
  {
    id: 'cbeebies_radio',
    name: {
      value: 'cbeebies radio',
      synonyms: [
        'radio cbeebies',
        'cbeebies',
        'b. b. c. radio cbeebies',
        'bbc radio cbeebies',
        'b. b. c. cbeebies radio',
        'bbc cbeebies radio'
      ]
    }
  },
  {
    id: 'bbc_radio_berkshire',
    name: {
      value: 'b. b. c. radio berkshire',
      synonyms: [
        'bbc radio berkshire',
        'b. b. c. berkshire',
        'bbc berkshire',
        'radio berkshire',
        'berkshire radio',
        'berkshire'
      ]
    }
  },
  {
    id: 'bbc_radio_bristol',
    name: {
      value: 'b. b. c. radio bristol',
      synonyms: [
        'bbc radio bristol',
        'b. b. c. bristol',
        'bbc bristol',
        'radio bristol',
        'bristol radio',
        'bristol'
      ]
    }
  },
  {
    id: 'bbc_radio_cambridge',
    name: {
      value: 'b. b. c. radio cambridgeshire',
      synonyms: [
        'bbc radio cambridgeshire',
        'b. b. c. radio cambridge',
        'bbc radio cambridge',
        'b. b. c. cambridgeshire',
        'bbc cambridgeshire',
        'b. b. c. cambridge',
        'bbc cambridge',
        'radio cambridgeshire',
        'cambridgeshire radio',
        'radio cambridge',
        'cambridge radio',
        'cambridgeshire',
        'cambridge'
      ]
    }
  },
  {
    id: 'bbc_radio_cornwall',
    name: {
      value: 'b. b. c. radio cornwall',
      synonyms: [
        'bbc radio cornwall',
        'b. b. c. cornwall',
        'bbc cornwall',
        'radio cornwall',
        'cornwall radio'
      ]
    }
  },
  {
    id: 'bbc_radio_coventry_warwickshire',
    name: {
      value: 'b. b. c. coventry and warwickshire',
      synonyms: [
        'bbc coventry and warwickshire',
        'b. b. c. radio coventry and warwickshire',
        'bbc radio coventry and warwickshire',
        'radio coventry and warwickshire',
        'coventry and warwickshire',
        'b. b. c. CWR',
        'bbc CWR',
        'radio coventry',
        'coventry radio'
      ]
    }
  },
  {
    id: 'bbc_radio_cumbria',
    name: {
      value: 'b. b. c. radio cumbria',
      synonyms: [
        'bbc radio cumbria',
        'b. b. c. cumbria',
        'bbc cumbria',
        'radio cumbria',
        'cumbria radio'
      ]
    }
  },
  {
    id: 'bbc_radio_derby',
    name: {
      value: 'b. b. c. radio derby',
      synonyms: [
        'bbc radio derby',
        'b. b. c. derby',
        'bbc derby',
        'radio derby',
        'derby radio',
        'radio derbyshire',
        'derbyshire radio',
        'derby',
        'derbyshire'
      ]
    }
  },
  {
    id: 'bbc_radio_devon',
    name: {
      value: 'b. b. c. radio devon',
      synonyms: [
        'bbc radio devon',
        'b. b. c. devon',
        'bbc devon',
        'radio devon',
        'devon radio',
        'devon'
      ]
    }
  },
  {
    id: 'bbc_radio_essex',
    name: {
      value: 'b. b. c. essex',
      synonyms: [
        'bbc essex',
        'b. b. c. radio essex',
        'bbc radio essex',
        'radio essex',
        'essex radio',
        'essex'
      ]
    }
  },
  {
    id: 'bbc_radio_gloucestershire',
    name: {
      value: 'b. b. c. radio gloucestershire',
      synonyms: [
        'bbc radio gloucestershire',
        'b. b. c. radio gloucester',
        'bbc radio gloucester',
        'b. b. c. gloucestershire',
        'bbc gloucestershire',
        'b. b. c. gloucester',
        'bbc gloucester',
        'radio gloucestershire',
        'gloucestershire radio',
        'radio gloucester',
        'gloucester radio',
        'gloucestershire',
        'gloucester'
      ]
    }
  },
  {
    id: 'bbc_radio_guernsey',
    name: {
      value: 'b. b. c. radio guernsey',
      synonyms: [
        'bbc radio guernsey',
        'b. b. c. guernsey',
        'bbc guernsey',
        'radio guernsey',
        'guernsey radio',
        'guernsey'
      ]
    }
  },
  {
    id: 'bbc_radio_hereford_worcester',
    name: {
      value: 'b. b. c. hereford and worcester',
      synonyms: [
        'bbc hereford and worcester',
        'b. b. c. radio hereford and worcester',
        'bbc radio hereford and worcester',
        'radio hereford and worcester',
        'hereford and worcester',
        'b. b. c. hereford radio',
        'bbc hereford radio',
        'b. b. c. hereford',
        'bbc hereford',
        'b. b. c. worcester radio',
        'bbc worcester radio',
        'b. b. c. worcester',
        'bbc worcester'
      ]
    }
  },
  {
    id: 'bbc_radio_humberside',
    name: {
      value: 'b. b. c. radio humberside',
      synonyms: [
        'bbc radio humberside',
        'b. b. c. humberside',
        'bbc humberside',
        'radio humberside',
        'b. b. c. radio humber',
        'bbc radio humber',
        'humberside'
      ]
    }
  },
  {
    id: 'bbc_radio_jersey',
    name: {
      value: 'b. b. c. radio jersey',
      synonyms: [
        'bbc radio jersey',
        'b. b. c. jersey',
        'bbc jersey',
        'radio jersey',
        'jersey radio',
        'jersey'
      ]
    }
  },
  {
    id: 'bbc_radio_kent',
    name: {
      value: 'b. b. c. radio kent',
      synonyms: [
        'bbc radio kent',
        'b. b. c. kent',
        'bbc kent',
        'radio kent',
        'kent radio',
        'kent'
      ]
    }
  },
  {
    id: 'bbc_radio_lancashire',
    name: {
      value: 'b. b. c. radio lancashire',
      synonyms: [
        'bbc radio lancashire',
        'b. b. c. lancashire',
        'bbc lancashire',
        'radio lancashire',
        'lancashire radio',
        'lancashire'
      ]
    }
  },
  {
    id: 'bbc_radio_leeds',
    name: {
      value: 'b. b. c. radio leeds',
      synonyms: [
        'bbc radio leeds',
        'b. b. c. leeds',
        'bbc leeds',
        'radio leeds',
        'leeds radio',
        'leeds'
      ]
    }
  },
  {
    id: 'bbc_radio_leicester',
    name: {
      value: 'b. b. c. radio leicester',
      synonyms: [
        'bbc radio leicester',
        'b. b. c. leicester',
        'bbc leicester',
        'radio leicester',
        'leicester radio',
        'leicester',
        'b. b. c. radio lester',
        'bbc radio lester'
      ]
    }
  },
  {
    id: 'bbc_radio_lincolnshire',
    name: {
      value: 'b. b. c. radio lincolnshire',
      synonyms: [
        'bbc radio lincolnshire',
        'b. b. c. lincolnshire',
        'bbc lincolnshire',
        'radio lincolnshire',
        'lincolnshire radio',
        'lincolnshire'
      ]
    }
  },
  {
    id: 'bbc_london',
    name: {
      value: 'b. b. c. radio london',
      synonyms: [
        'bbc radio london',
        'b. b. c. london',
        'bbc london',
        'radio london',
        'london radio',
        'london'
      ]
    }
  },
  {
    id: 'bbc_radio_manchester',
    name: {
      value: 'b. b. c. radio manchester',
      synonyms: [
        'bbc radio manchester',
        'b. b. c. manchester',
        'bbc manchester',
        'radio manchester',
        'manchester radio',
        'manchester',
        'GMR'
      ]
    }
  },
  {
    id: 'bbc_radio_merseyside',
    name: {
      value: 'b. b. c. radio merseyside',
      synonyms: [
        'bbc radio merseyside',
        'b. b. c. merseyside',
        'bbc merseyside',
        'radio merseyside',
        'merseyside radio',
        'merseyside'
      ]
    }
  },
  {
    id: 'bbc_radio_newcastle',
    name: {
      value: 'b. b. c. newcastle',
      synonyms: [
        'bbc newcastle',
        'b. b. c. radio newcastle',
        'bbc radio newcastle',
        'radio newcastle',
        'newcastle radio',
        'newcastle'
      ]
    }
  },
  {
    id: 'bbc_radio_norfolk',
    name: {
      value: 'b. b. c. radio norfolk',
      synonyms: [
        'bbc radio norfolk',
        'b. b. c. norfolk',
        'bbc norfolk',
        'radio norfolk',
        'norfolk radio',
        'norfolk'
      ]
    }
  },
  {
    id: 'bbc_radio_northampton',
    name: {
      value: 'b. b. c. radio northampton',
      synonyms: [
        'bbc radio northampton',
        'b. b. c. northampton',
        'bbc northampton',
        'radio northampton',
        'northampton radio',
        'northampton'
      ]
    }
  },
  {
    id: 'bbc_radio_nottingham',
    name: {
      value: 'b. b. c. radio nottingham',
      synonyms: [
        'bbc radio nottingham',
        'b. b. c. nottingham',
        'bbc nottingham',
        'radio nottingham',
        'nottingham radio',
        'nottingham'
      ]
    }
  },
  {
    id: 'bbc_radio_oxford',
    name: {
      value: 'b. b. c. radio oxford',
      synonyms: [
        'bbc radio oxford',
        'b. b. c. oxford',
        'bbc oxford',
        'radio oxford',
        'oxford radio',
        'oxford'
      ]
    }
  },
  {
    id: 'bbc_radio_sheffield',
    name: {
      value: 'b. b. c. radio sheffield',
      synonyms: [
        'bbc radio sheffield',
        'b. b. c. sheffield',
        'bbc sheffield',
        'radio sheffield',
        'sheffield radio',
        'sheffield'
      ]
    }
  },
  {
    id: 'bbc_radio_shropshire',
    name: {
      value: 'b. b. c. radio shropshire',
      synonyms: [
        'bbc radio shropshire',
        'b. b. c. shropshire',
        'bbc shropshire',
        'radio shropshire',
        'shropshire radio',
        'shropshire'
      ]
    }
  },
  {
    id: 'bbc_radio_solent',
    name: {
      value: 'b. b. c. radio solent',
      synonyms: [
        'bbc radio solent',
        'b. b. c. solent',
        'bbc solent',
        'radio solent',
        'solent radio',
        'solent',
        'b. b. c. southampton',
        'bbc southampton'
      ]
    }
  },
  {
    id: 'bbc_radio_somerset_sound',
    name: {
      value: 'b. b. c. somerset',
      synonyms: [
        'bbc somerset',
        'b. b. c. radio somerset',
        'bbc radio somerset',
        'radio somerset',
        'somerset radio',
        'somerset'
      ]
    }
  },
  {
    id: 'bbc_radio_stoke',
    name: {
      value: 'b. b. c. radio stoke',
      synonyms: [
        'bbc radio stoke',
        'b. b. c. stoke',
        'bbc stoke',
        'radio stoke',
        'stoke radio',
        'stoke'
      ]
    }
  },
  {
    id: 'bbc_radio_suffolk',
    name: {
      value: 'b. b. c. radio suffolk',
      synonyms: [
        'bbc radio suffolk',
        'b. b. c. suffolk',
        'bbc suffolk',
        'radio suffolk',
        'suffolk radio',
        'suffolk'
      ]
    }
  },
  {
    id: 'bbc_radio_surrey',
    name: {
      value: 'b. b. c. surrey',
      synonyms: [
        'bbc surrey',
        'b. b. c. radio surrey',
        'bbc radio surrey',
        'radio surrey',
        'surrey radio',
        'surrey'
      ]
    }
  },
  {
    id: 'bbc_radio_sussex',
    name: {
      value: 'b. b. c. sussex',
      synonyms: [
        'bbc sussex',
        'b. b. c. radio sussex',
        'bbc radio sussex',
        'radio sussex',
        'sussex radio',
        'sussex',
        'b. b. c. sussex and surrey',
        'bbc sussex and surrey'
      ]
    }
  },
  {
    id: 'bbc_tees',
    name: {
      value: 'b. b. c. tees',
      synonyms: [
        'bbc tees',
        'b. b. c. radio tees',
        'bbc radio tees',
        'tees',
        'radio tees',
        'tees radio',
        'radio teeside',
        'teeside radio'
      ]
    }
  },
  {
    id: 'bbc_three_counties_radio',
    name: {
      value: 'b. b. c. three counties radio',
      synonyms: [
        'bbc three counties radio',
        'b. b. c. three counties',
        'bbc three counties',
        'radio three counties',
        'three counties radio',
        'three counties',
        'b. b. c. 3CR',
        'bbc 3CR'
      ]
    }
  },
  {
    id: 'bbc_radio_wiltshire',
    name: {
      value: 'b. b. c. wiltshire',
      synonyms: [
        'bbc wiltshire',
        'b. b. c. radio wiltshire',
        'bbc radio wiltshire',
        'radio wiltshire',
        'wiltshire radio',
        'wiltshire',
        'b. b. c. swindon',
        'bbc swindon'
      ]
    }
  },
  {
    id: 'bbc_wm',
    name: {
      value: 'b. b. c. w. m. ninety five point six',
      synonyms: [
        'bbc w. m. ninety five point six',
        'w. m. ninety five point six',
        'radio w. m. ninety five point six',
        'b. b. c. radio w. m. ninety five point six',
        'bbc radio w. m. ninety five point six',
        'west midlands ninety five point six',
        'radio west midlands ninety five point six',
        'b. b. c. radio west midlands ninety five point six',
        'bbc radio west midlands ninety five point six',
        'w. m.',
        'radio w. m.',
        'b. b. c. w. m.',
        'bbc w. m.',
        'b. b. c. radio w. m.',
        'bbc radio w. m.',
        'b. b. c. midlands',
        'bbc midlands',
        'west midlands',
        'radio west midlands',
        'b. b. c. radio west midlands',
        'bbc radio west midlands'
      ]
    }
  },
  {
    id: 'bbc_radio_york',
    name: {
      value: 'b. b. c. radio york',
      synonyms: [
        'bbc radio york',
        'b. b. c. york',
        'bbc york',
        'radio york',
        'york radio',
        'york'
      ]
    }
  },
  {
    id: 'bbc_radio_glastonbury',
    name: {
      value: 'radio glastonbury',
      synonyms: [ 'glastonbury', 'music from glastonbury' ]
    }
  }
];

const utterances = [
  'play {RadioStation}',
  'play {RadioStation} please',
  'play me {RadioStation}',
  'can I play {RadioStation}',
  'can I play {RadioStation} please',
  'let me play {RadioStation}',
  'let me play {RadioStation} please',
  'start playing {RadioStation}',
  'start playing {RadioStation} please',
  'begin playing {RadioStation}',
  'let me hear {RadioStation}',
  'let me hear {RadioStation} please',
  'can I hear {RadioStation}',
  'can I hear {RadioStation} please',
  'let me listen to {RadioStation}',
  'let me listen to {RadioStation} please',
  'can I listen to {RadioStation}',
  'can I listen to {RadioStation} please',
  'get me {RadioStation}',
  'get me {RadioStation} please',
  'fetch me {RadioStation}',
  'fetch me {RadioStation} please',
  'find me {RadioStation}',
  'find me {RadioStation} please',
  'bring me {RadioStation}',
  'bring me {RadioStation} please',
  'retrieve {RadioStation}',
  'retrieve {RadioStation} please',
  'start {RadioStation}',
  'start {RadioStation} please',
  'begin {RadioStation}',
  'open {RadioStation}',
  'open {RadioStation} please',
  'commence {RadioStation}',
  'commence {RadioStation} please',
  'activate {RadioStation}',
  'activate {RadioStation} please'
];

module.exports = { values, utterances };
