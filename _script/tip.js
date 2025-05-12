const billInput = document.getElementById('bill');
const tipSelect = document.getElementById('tip');
const calculateBtn = document.getElementById('calculateBtn');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');

calculateBtn.addEventListener('click', () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseInt(tipSelect.value);

  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  tipAmount.textContent = `Tip: $${tip.toFixed(2)}`;
  totalAmount.textContent = `Total: $${total.toFixed(2)}`;
});

billInput.addEventListener('focus', () => {
  billInput.style.borderColor = '#4a00e0';
});


tipSelect.addEventListener('change', () => {
  const tipValue = parseInt(tipSelect.value);

  switch (tipValue) {
    case 20:
      document.body.style.background = "linear-gradient(to right, #f7971e, #ffd200)"; 
      break;
    case 15:
      document.body.style.background = "linear-gradient(to right, #ff6a00, #ffb347)"; 
      break;
    case 10:
      document.body.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)"; 
      break;
    case 5:
      document.body.style.background = "linear-gradient(to right, #2193b0, #6dd5ed)"; 
      break;
    case 0:
    default:
      document.body.style.background = "linear-gradient(to right, #8e2de2, #4a00e0)"; 
  }
});
