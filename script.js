function riddle() {
  var text;
  var correctAnswer = "your name";
  var correctAnswerTwo = "Your name";
  var userInput = prompt('What is the answer?');
  switch (userInput) {
    case correctAnswer:
      text = userInput + ' is right! GOOD Job!';
      document.getElementById("responder").style.color = "green";
      break;
    case correctAnswerTwo:
      text = userInput + ' is right! GOOD Job!';
      document.getElementById("responder").style.color = "green";
      break;
    case "":
      text = 'Please enter a guess.';
      document.getElementById("responder").style.color = "red";
      break;
    default:
      text = userInput + ' is not correct, try again..';
      document.getElementById("responder").style.color = "red";
      break;
  }
  document.getElementById("responder").innerHTML = text;
  return;
}
