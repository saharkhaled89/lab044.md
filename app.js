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
var person;
// processing
while (age <12){
  console.log('you cant enter page');
  age= prompt('enter your age again');
}
  if(age>12 && age<=100) {

make='im happy to visit my web site'

return make;
}

return make;
//output

}
function make_shop(){
  var num_item = prompt('how many items you would like to make?');
  return num_item;
}
var make =greeting ();
document.write ('<h1>'+ make+'</h1>');
var num_make = make_shop();
for(var i=0; i<num_make;i++){
  document.write ('<h2>Item'+ (i+1) +'</h2>');

}