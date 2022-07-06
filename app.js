const $classicalDiv = $(".Classical");
const $classicalButton = $('<button class="classical-button"></button>').text("Classical example");
$classicalDiv.append($classicalButton);

$classicalButton.click(function () {
  let conductor = new BandJS();
  conductor.setTimeSignature(9, 8);
  conductor.setTempo(30);

  // Bar 1
  var leftTop = conductor.createInstrument("sine", "oscillators");
  var leftBot = conductor.createInstrument("sine", "oscillators");
  leftTop.setVolume(25);
  leftBot.setVolume(25);
  leftTop.rest("eighth");
  leftTop.note("quarter", "Ab3", true);
  leftTop.note("dottedHalf", "Ab3");

  leftBot.rest("eighth");
  leftBot.note("quarter", "F3", true);
  leftBot.note("dottedHalf", "F3");

  var rightTop = conductor.createInstrument("sine", "oscillators");
  var rightBot = conductor.createInstrument("sine", "oscillators");
  rightTop.setVolume(30);
  rightBot.setVolume(20);

  rightTop.rest("quarter");
  rightTop.note("eighth", "Ab4", true);
  rightTop.note("dottedQuarter", "Ab4");
  rightTop.note("dottedQuarter", "F4", true);

  rightBot.rest("quarter");
  rightBot.note("eighth", "F4", true);
  rightBot.note("dottedQuarter", "F4");
  rightBot.note("dottedQuarter", "Db4", true);

  // Bar 2
  leftTop.note("dottedHalf", "A3", true);
  leftTop.note("dottedQuarter", "A3");

  leftBot.note("dottedHalf", "Gb3", true);
  leftBot.note("dottedQuarter", "Gb3");

  rightTop.note("eighth", "F4");
  rightTop.note("eighth", "Eb4");
  rightTop.note("eighth", "F4");
  rightTop.note("dottedHalf", "Eb4");

  rightBot.note("eighth", "Db4");
  rightBot.note("eighth", "C4");
  rightBot.note("eighth", "Db4");
  rightBot.note("dottedHalf", "C4");

  let player = conductor.finish();
  player.play();
});

const $jazzButton = $(".jazz-button");
$jazzButton.click(function () {
  let conductor = new BandJS();
  conductor.setTimeSignature(3, 4);
  conductor.setTempo(70);

  var trumpet = conductor.createInstrument("sawtooth", "oscillators");
  trumpet.setVolume(20);

  // Bar 1
  trumpet.note("dottedQuarter", "D4");
  trumpet.note("eighth", "C#4");
  trumpet.note("tripletEighth", "B3");
  trumpet.rest("tripletEighth");
  trumpet.note("tripletEighth", "A3");
  trumpet.note("tripletEighth", "F#3");
  trumpet.rest("tripletEighth");
  trumpet.note("tripletEighth", "D4");

  // Bar 2
  trumpet.note("tripletSixteenth", "C#4");
  trumpet.note("tripletSixteenth", "D4");
  trumpet.note("quarter", "C#4");
  trumpet.rest("eighth");
  trumpet.note("eighth", "B3");
  trumpet.note("dottedEighth", "A3");
  trumpet.note("sixteenth", "F#3");
  trumpet.note("tripletEighth", "D3");
  trumpet.note("tripletQuarter", "C#4");
  trumpet.note("quarter", "B3");

  let player = conductor.finish();
  player.play();
});

// A3, B3, D3, F3, G3, B4, C4, D4, E4, F4

let notes = {
  KeyA: "D3",
  KeyS: "F3",
  KeyD: "G3",
  KeyF: "A3",
  KeyG: "B3",
  KeyH: "C4",
  KeyJ: "D4",
  KeyK: "E4",
  KeyL: "F4",
  Semicolon: "B4",
};

$("body").keydown(function (e) {
  console.log(notes[e.code]);
  if (e.code in notes) {
    let conductor = new BandJS();
    let leftHand = conductor.createInstrument("sine", "oscillators");
    leftHand.setVolume(25);
    leftHand.note("half", `${notes[e.code]}`, true);
    let player = conductor.finish();
    player.play();
  }
});

// Ghost mode
// $("body").keyup(function (e) {
//   let player = conductor.finish();
//   player.stop();
// });
