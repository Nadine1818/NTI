
function isPalindrome(){
  let input = prompt("Enter String");
  while(Number(input)){
    input = prompt("error Enter String");
  }
  let Casee = confirm("Do you want to consider case?");

  let inputString = Casee ? input : input.toLowerCase();

  if(inputString.split("").reverse().join("") === inputString)
  {
    alert("input is palindrome");
  }
  else alert("not palindrome");

}
isPalindrome();

