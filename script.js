function press (keyVal) {
     if (keyVal == 'C') {
          document.getElementById('screen').value = '';
     }
     else {
          document.getElementById('screen').value += keyVal;
     }
}
function equals(equation) {
     var answer = eval(equation);
     document.getElementById('screen').value = answer;
}