if (confirm("are you good today?")) {
    alert("good i hope you still feel the same") ;
  } else {
  alert("i hope your day gets better");
  }

  var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
  document.write(txt)
}

