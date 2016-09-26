var notes = [
"C", 
"C#/Db", 
"D", 
"D#/Eb", 
"E", 
"F", 
"F#/Gb", 
"G", 
"G#/Ab", 
"A", 
"A#/Bb", 
"B",
"C", 
"C#/Db", 
"D", 
"D#/Eb", 
"E", 
"F", 
"F#/Gb", 
"G", 
"G#/Ab", 
"A", 
"A#/Bb", 
"B"
]

$("li").click(function() {

	//get child element value
	var index = $("li").index(this);

	//assign element value to array, print array string
	$("#clicked-note").text("Key " + notes[index] );


});
