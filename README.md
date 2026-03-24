🎨 Etch-a-Sketch

Hi, it's Thomas — and again this is one of my learning projects built while going through [The Odin Project](https://www.theodinproject.com/) curriculum.

Here is a browser-based sketchpad inspired by the classic Etch-A-Sketch toy, built with vanilla HTML, CSS, and JavaScript.

## Demo

[Live Demo](https://thomastbl.github.io/etch-a-sketch/)

## Features

- **Dynamic grid generation** — grid is built entirely with JavaScript
- **Draw by clicking and dragging** — hold the mouse button and move across cells to draw
- **Adjustable grid size** — use the range slider to resize the grid from 50px to 500px
- **Reset button** — clears the drawing and regenerates the grid

## How to Use

1. Use the **slider** to choose a grid size
2. **Click and drag** across the grid to draw
3. Click the button to clear the canvas

## Tech Stack

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (DOM manipulation, event listeners)

## What I Learned

- Generating DOM elements dynamically with `document.createElement`
- Using Flexbox with `flex-wrap` to build a responsive grid
- Managing application state with a global `isDrawing` boolean
- Combining `mousedown`, `mouseover`, and `mouseup` events to replicate a drawing experience
- The importance of `box-sizing: border-box` when sizing grid cells precisely
- Structuring code into clean, single-responsibility functions

## Project Structure

```
etch-a-sketch/
├── index.html
├── style.css
└── javascript.js
```

## Roadmap / Ideas

- [ ] Color picker to choose drawing color
- [ ] Random RGB color mode
- [ ] Progressive darkening effect (10 passes = fully black)
- [ ] Eraser tool
- [ ] Toggle grid lines on/off

---

_Project built as part of [The Odin Project](https://www.theodinproject.com/) curriculum._
