const dummyFlights = [{ price: 123,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'EWR',
  city: 'Orlando',
  country: 'United States',
  IataCode: 'MCO',
  carrier: 'Spirit Airlines',
  imageUrl:
  ['https://pixabay.com/get/eb35b80f2ef4033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb35b80f2ef1093ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e137b9072ef31c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e83cb20b2df1043ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb35b80f2ef6023ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 206,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'EWR',
  city: 'Ottawa',
  country: 'Canada',
  IataCode: 'YOW',
  carrier: 'Porter Airlines',
  imageUrl:
  ['https://pixabay.com/get/eb34b90a2cf1033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e137b70a2bf31c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ec31b9092fe90825d0471401ef494390e37effd41db810449df7c378a6_640.jpg',
    'https://pixabay.com/get/eb35b20e2df21c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ea37b30729fd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 282,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'EWR',
  city: 'San Juan',
  country: 'Puerto Rico',
  IataCode: 'SJU',
  carrier: 'jetBlue',
  imageUrl:
  ['https://pixabay.com/get/e834b50a2ff6013ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e833b40f2bf2023ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/ee34b60b2cf71c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e030b90b2df11c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e134b3082af01c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 284,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'EWR',
  city: 'Toronto',
  country: 'Canada',
  IataCode: 'YTZ',
  carrier: 'Porter Airlines',
  imageUrl:
  ['https://pixabay.com/get/eb34b90c2ff4073ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb35b90728f4033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83cb10f2ef1003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e133b20b2afc1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e133b20b2bf41c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 285,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'EWR',
  city: 'Cancun',
  country: 'Mexico',
  IataCode: 'CUN',
  carrier: 'United',
  imageUrl:
  ['https://pixabay.com/get/eb35b60d20f0063ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb35b60d20f0003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb35b60d20f0023ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83db1082cf3003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb35b60d20f1013ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 322,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Havana',
  country: 'Cuba',
  IataCode: 'HAV',
  carrier: 'Aeromexico',
  imageUrl:
  ['https://pixabay.com/get/eb34b90729f3083ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb34b40e2bf6023ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb34b40e2bf6053ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb34b30a2ffd083ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb34b30a2ffd063ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 372,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Bridgetown',
  country: 'Barbados',
  IataCode: 'BGI',
  carrier: 'jetBlue',
  imageUrl: ['https://pixabay.com/get/ee34b2082de90825d0471401ef494390e37effd41db810449df7c378a6_640.jpg'] },
{ price: 377,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Pointe-a-Pitre',
  country: 'Guadeloupe',
  IataCode: 'PTP',
  carrier: 'Norwegian',
  imageUrl:
  ['https://pixabay.com/get/eb35b90a2ffd063ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e834b7062bf6083ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e834b4072dfc033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e833b4092ff6093ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e837b10b2df1053ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 393,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Quito',
  country: 'Ecuador',
  IataCode: 'UIO',
  carrier: 'Aeromexico',
  imageUrl:
  ['https://pixabay.com/get/e837b40b29f4043ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/ed33b40b20fd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/eb3cb90c2cfd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ee3db50c21f41c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ee32b2062df01c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 399,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'LGA',
  city: 'San Jose',
  country: 'Costa Rica',
  IataCode: 'SJO',
  carrier: 'Spirit Airlines',
  imageUrl:
  ['https://pixabay.com/get/eb34b1082cf3003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb3db30f2bf21c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/eb3db3082af11c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e031b5092efd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ee3db10f2ff01c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 418,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'LGA',
  city: 'Medellin',
  country: 'Colombia',
  IataCode: 'MDE',
  carrier: 'jetBlue',
  imageUrl:
  ['https://pixabay.com/get/e13db0082dfd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e83db30c2cf21c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e83db30c2af31c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e83db50c2af2013ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 436,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Copenhagen',
  country: 'Denmark',
  IataCode: 'CPH',
  carrier: 'Norwegian',
  imageUrl:
  ['https://pixabay.com/get/e831b30829f51c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e836b6062df2063ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e130b90d2ff51c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e837b10b2ef7033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e835b9062cf1013ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 453,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Rome',
  country: 'Italy',
  IataCode: 'FCO',
  carrier: 'Royal Air Maroc',
  imageUrl:
  ['https://pixabay.com/get/e833b80828f2053ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb3cb20f2ff01c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/eb34b70f2ffc093ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb34b2062cf1033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb34b10b2ff1033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 474,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Samara',
  country: 'Russia',
  IataCode: 'KUF',
  carrier: 'Turkish Airlines',
  imageUrl:
  ['https://pixabay.com/get/eb34b2062afc013ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e831b90c2bf2043ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83cb1092bf31c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/eb30b00f2af21c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e83cb1092bf21c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 498,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Paris',
  country: 'France',
  IataCode: 'ORY',
  carrier: 'Royal Air Maroc',
  imageUrl:
  ['https://pixabay.com/get/e835b3072cf41c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e834b40929f0073ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/ec36b10f2dfc1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e131b20d2afd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e83db7072bf5033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 508,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Puerto Plata',
  country: 'Dominican Republic',
  IataCode: 'POP',
  carrier: 'jetBlue',
  imageUrl:
  ['https://pixabay.com/get/ef35b60c2cf01c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ef35b60c2cf31c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ef35b60c2cfc1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 510,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Stockholm',
  country: 'Sweden',
  IataCode: 'ARN',
  carrier: 'Norwegian',
  imageUrl:
  ['https://pixabay.com/get/ef37b40929f01c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e83db20720f0033ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83db30b2bf2093ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83cb60f2ef4093ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e833b80f2cf0083ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 513,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Dublin',
  country: 'Ireland',
  IataCode: 'DUB',
  carrier: 'British Airways',
  imageUrl:
  ['https://pixabay.com/get/eb34b00729fc053ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e835b5062cf4023ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/ea32b40b29fd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/e834b10e21f4093ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e834b10a21f41c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 515,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Lisbon',
  country: 'Portugal',
  IataCode: 'LIS',
  carrier: 'Royal Air Maroc',
  imageUrl:
  ['https://pixabay.com/get/eb35b30c2cf7043ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb34b70a2ff5063ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/eb35b5072efc053ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83cb60c2df7003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83cb70b29f2053ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] },
{ price: 521,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Caracas',
  country: 'Venezuela',
  IataCode: 'CCS',
  carrier: 'Avianca',
  imageUrl:
  ['https://pixabay.com/get/e034b10c2ce90825d0471401ef494390e37effd41db810449df7c378a6_640.jpg',
    'https://pixabay.com/get/eb34b20d2efd023ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e836b7092af7003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e83db1092bf3003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e03cb00628f21c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg'] },
{ price: 521,
  arrivalDate: '2017-04-19',
  departureDate: '2017-04-28',
  originTerminal: 'JFK',
  city: 'Cartagena',
  country: 'Colombia',
  IataCode: 'CTG',
  carrier: 'jetBlue',
  imageUrl:
  ['https://pixabay.com/get/eb35b40921f4043ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e834b7072bf2003ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg',
    'https://pixabay.com/get/e832b8092cfd1c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/ef3db40b20f51c2ad65a5854e2454393e577ebc818b5184090f8c67ba6ec_640.jpg',
    'https://pixabay.com/get/eb35b40920fd073ed95c4518b7484f93e671e2dc04b0154894f5c97ea5ecb4_640.jpg'] }];

module.exports = dummyFlights;