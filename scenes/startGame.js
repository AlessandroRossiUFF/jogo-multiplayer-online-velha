let script = document.createElement("script");
script.src = 'https://tic-tac-toe-server.alessandrorossi.repl.co' + '/socket.io/socket.io.js'
document.head.appendChild(script);


const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 600;

add([
  text("What's your name? ",20),
  pos(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 3),
  origin("center")
]);

const nameField = add([
  text("",20),
  pos(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2),
  origin("center")
]);

charInput((ch) => {
    nameField.text += ch;
});

keyRelease("enter", ()=>{
    go("main", {playerName: nameField.text} );
})