var conductor = new BandJS();
conductor.setTimeSignature(4,4);
conductor.setTempo(120);
var piano = conductor.createInstrument();
piano.note('quarter', 'C4');
piano.note('quarter', 'D4');
piano.note('quarter', 'E4');
piano.note('quarter', 'F4');
var player = conductor.finish();
document.querySelector('.play').addEventListener('click', () =>{
player.play();    
})
