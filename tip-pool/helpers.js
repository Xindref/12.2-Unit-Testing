
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}


function appendDeleteBtn(tr) {
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'X';

  tr.append(deleteBtn);

  deleteBtn.addEventListener('click', function () {
    if (this.parentElement.id.includes('payment')) {
      paymentTbody.removeChild(this.parentElement);
      delete allPayments[this.parentElement.id];
    }
    else if (this.parentElement.id.includes('server')) {
      delete allServers[this.parentElement.id];
      serverTbody.removeChild(this.parentElement);
    }
    updateServerTable();
    updateSummary();
  });
}