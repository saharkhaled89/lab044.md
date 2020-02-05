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

function greeting(){
//input
var age= prompt('enter your age');
var make;
// processing
if (age>0 && age<=12);

{
  make='have anice day';

}

  if(age>12 && age<=100) {

make='im happy to visit my web site'


}

return make;
//output

}

var make =greeting ();
document.write ('<h1>'+ make+'/<h1>');


