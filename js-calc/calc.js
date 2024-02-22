function clear(){
    document.getElementById("rezultat").value = "";
}

function display(){
    document.getElementById("rezultat").value += value;
}

function calculate(){
    let x = document.getElementById("rezultat").value;
    let y = eval(x);
    document.getElementById("rezultat").value = y;
}

button1.addEventListener('click', function() {
    rezultat.value += button1.value; 
  });
  
button2.addEventListener('click', function() {
    rezultat.value += button2.value; 
  });
  
button3.addEventListener('click', function() {
    rezultat.value += button3.value; 
  });
  
button4.addEventListener('click', function() {
    rezultat.value += button4.value; 
  });
  
button5.addEventListener('click', function() {
    rezultat.value += button5.value; 
  });
  
button6.addEventListener('click', function() {
    rezultat.value += button6.value; 
  });
  
button7.addEventListener('click', function() {
    rezultat.value += button7.value; 
  });
  
button8.addEventListener('click', function() {
    rezultat.value += button8.value; 
  });
  
button9.addEventListener('click', function() {
    rezultat.value += button9.value; 
  });
  
button0.addEventListener('click', function() {
    rezultat.value += button0.value; 
  });
  
buttonPlus.addEventListener('click', function() {
    rezultat.value += buttonPlus.value; 
  });
  
buttonMinus.addEventListener('click', function() {
    rezultat.value += buttonMinus.value; 
  });

buttonPuta.addEventListener('click', function() {
    rezultat.value += buttonPuta.value; 
  });

buttonPodeljeno.addEventListener('click', function() {
      rezultat.value += buttonPodeljeno.value; 
    });
    
buttonTacka.addEventListener('click', function() {
    rezultat.value += buttonTacka.value; 
  });

buttonJednako.addEventListener('click', function() {
    calculate();
  });
  
buttonC.addEventListener('click', function() {
    rezultat.value = "";
  });
