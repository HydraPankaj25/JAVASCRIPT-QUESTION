uniqueStyles([
  "Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal",
]); //➞ 9

uniqueStyles([
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul",
]); //➞ 7

function uniqueStyles(musicNotes) {
  let allNotes = musicNotes.join(",").split(",");
  let uniqueNotes = [... new Set(allNotes)];
  console.log(uniqueNotes.length);
}
