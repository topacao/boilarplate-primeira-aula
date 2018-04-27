const start = () => {
  const name = prompt('Digite seu nome');
  const age  = prompt('Digite sua idade');

  const mesage =  `${name}, bem vindo, você tem ${age} anos`;
  const ms = document.getElementById('message');
  const maior = document.getElementById('maior');
  if (age >= 18) {
    maior.innerText = 'Você é maior de Idade';
  } else {
    maior.innerText = 'Você não é maior de Idade';
  }
  ms.innerText = mesage;
}
