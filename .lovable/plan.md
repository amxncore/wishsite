
## Sunflower Swaying in the Wind

The goal is to give the background image a slow, organic sense of motion — as if a gentle breeze is moving through the sunflower field. Since the image is rendered as a CSS `background-image` on a `div`, the best approach is to animate the `div` itself using CSS `transform`, creating a slow, looping sway.

### The Technique

Rather than animating `background-position` (which can look mechanical), the background `div` will be slightly oversized (scaled to ~108%) so that when it drifts and sways, no white edges are ever revealed. The animation will combine:

- A slow **lateral drift** (gentle `translateX`) — simulating wind pushing the field sideways
- A subtle **vertical drift** (`translateY`) — like the stems bending
- A very slight **scale pulse** — a 1%–2% breathing to give organic weight
- A barely perceptible **rotation skew** — to make the lean feel natural

The entire cycle will run over **18–22 seconds**, looping infinitely and smoothly with `ease-in-out`.

### What Changes

**`src/index.css`** — Add a new `@keyframes sunflowerSway` animation and a `.sunflower-sway` utility class:

```text
@keyframes sunflowerSway {
  0%   { transform: scale(1.08) translateX(0px)   translateY(0px)   rotate(0deg); }
  20%  { transform: scale(1.09) translateX(-6px)  translateY(-3px)  rotate(-0.3deg); }
  45%  { transform: scale(1.08) translateX(-10px) translateY(2px)   rotate(-0.5deg); }
  65%  { transform: scale(1.09) translateX(-4px)  translateY(-2px)  rotate(-0.2deg); }
  80%  { transform: scale(1.08) translateX(4px)   translateY(1px)   rotate(0.2deg); }
  100% { transform: scale(1.08) translateX(0px)   translateY(0px)   rotate(0deg); }
}

.sunflower-sway {
  animation: sunflowerSway 20s ease-in-out infinite;
  transform-origin: center bottom; /* anchors the sway at the base, like a stem */
}
```

**`src/components/LandingScreen.tsx`** — Add the `.sunflower-sway` class to the background `div`, and slightly increase its size so edges never show during the drift.

**`src/components/LetterScreen.tsx`** — Apply the same sway to the `fixed` background div on the letter screen too, so the field keeps living as the user reads. The motion will be subtle enough not to distract from the text.

### Mood Outcome

The result will feel like watching a field through a window on a slow summer afternoon — the sunflowers breathe, lean gently, and return. The effect is barely conscious but deeply felt. No jarring loops, no mechanical back-and-forth. Just the wind.
