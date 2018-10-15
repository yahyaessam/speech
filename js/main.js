var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new webkitSpeechRecognition();
var speechRecognitionList = new webkitSpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
function clickedButton(element) {
    recognition.start();
    console.log('Ready to receiva a voice input');
    // element.nextSibling.nextSibling.innerHTML = "I changed This :)";
    recognition.onresult = function (event) {
        var color = event.results[0][0].transcript;
        element.nextSibling.nextSibling.innerHTML = 'Result received: ' + color;
        bg.style.backgroundColor = color;
    }
}
var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

//
// document.body.onclick = function() {
//   recognition.start();
//   console.log('Ready to receive a color command.');
// }

