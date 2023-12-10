const spriteAnimations = [];
const states = [
  {
    name: "idle",
    frames: 0,
    width: 15,
  },
  {
    name: "start swing",
    frames: 16,
    width: 20,
  },
  {
    name: "swing",
    frames: 39,
    width: 24,
  },
  {
    name: "swing follow through",
    frames: 63,
    width: 26,
  },
  {
    name: "continue follow through",
    frames: 93,
    width: 26,
  },
  {
    name: "end",
    frames: 120,
    width: 26,
  }
];

states.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let i = 0; i < state.frames; i++) {
    let positionX = i * SPRITE_WIDTH;
    let positionY = index * SPRITE_HEIGHT;
    frames.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);