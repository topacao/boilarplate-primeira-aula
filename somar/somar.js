const somar = () => {
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
  const result = parseFloat(number1) + parseFloat(number2);
  document.getElementById('result').innerText = result;
}