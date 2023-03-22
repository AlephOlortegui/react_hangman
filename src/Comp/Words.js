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
  

  function randomWord() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }
  
  export { randomWord };