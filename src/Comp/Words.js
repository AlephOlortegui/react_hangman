var COLORS = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "aquamarine",
    "beige",
    "brown",
    "burlywood",
    "cadetblue",
    "coral",
    "chocolate",
    "crimson",
    "cyan",
    "darkcyan",
    "orange",
    "gold",
    "pink",
    "khaki",
    "mistyrose",
    "plum",
    "springgreen",
    "wheat",
    "salmon"
  ];
  

  let ANIMALS = [
    'lion',
    'cow',
    'shark',
    'rabbit',
    'duck',
    'monkey',
    'goat',
    'koala',
    'tiger',
    'penguin',
    'panda',
    'bear',
    'horse',
    'girafee',
    'lizard',
    "zebra"
  ]
  
  let COUNTRIES = [
    'france',
    'china',
    'spain',
    'italy',
    'canada',
    'peru',
    'brasil',
    'argentina',
    'colombia',
    'mexico',
    'japan',
    'thailand',
    'england',
    'israel',
    "egypt",
    "russia"
  ]
  
    function randomWord(type=COLORS) {
      switch (type) {
        case 'animals':
          return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  
        case 'countries':
          return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
        
        case 'colors':
        default:
          return COLORS[Math.floor(Math.random() * COLORS.length)];
      }
    }
    
    export { randomWord };