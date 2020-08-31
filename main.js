const binInput = document.getElementById('bin-input');
const decInput = document.getElementById('dec-input');
const convertBtn = document.getElementById('convert-btn');
const resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', () => {
  binInput.value = ''
  decInput.value = '';
});

convertBtn.addEventListener('click', () => {
  const binNumber = binInput.value;
  let decimalNumber = 0;

  if (binNumber !== '' && !isNaN(binNumber) && binNumber.match(/^[01]+$/g)) {
    for (let index = 0; index < binNumber.length; index++) {
      decimalNumber += parseInt(binNumber[index]) * (2 ** (binNumber.length - 1 - index));
    }

    decInput.value = decimalNumber;

  } else {
    alert('Insert a valid binary number!');
  }
});