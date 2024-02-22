const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('#people');
const customInput = document.querySelector('#custom');
const reset = document.querySelector('#resetBtn')
const tipsBtn = document.querySelectorAll('.btn');
const tipAmountPerPerson = document.querySelector('#tipAmount');
const totalPerPerson = document.querySelector('#total');

billInput.value = '0.0'
peopleInput.value = '1'
tipAmountPerPerson.innerHTML = '$' + (0.00).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.00).toFixed(2);

billValue = 0.0
peopleValue = 1
let tipSelected = null

const billInputChange = () => {
    billValue = parseFloat(billInput.value);
    calculateTip()
}

const peopleInputChange = () => {
    peopleValue = parseFloat(peopleInput.value);
    calculateTip();
}

bill.addEventListener('input', billInputChange);
people.addEventListener('input', peopleInputChange)


const handleClick = (e) => { 
    tipsBtn.forEach(btn => {
        btn.classList.remove("active")
    })
    e.target.classList.add("active")
    tipSelected = Number(e.target.value)
    calculateTip()
}

tipsBtn.forEach(btn => {
    btn.addEventListener('click', handleClick)
    
})


const calculateTip = () => {
    const tipAmount = billValue * (tipSelected / 100) / peopleValue
    const totalAmount = billValue/peopleValue + tipAmount

    tipAmountPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = '$' + totalAmount.toFixed(2);

}

const resetBtn = () => {
   tipAmountPerPerson.innerHTML = '$0.00';
   totalPerPerson.innerHTML = '$0.00';
   billInput.value = '0.0'
   peopleInput.value = '1'
   tipsBtn.forEach(btn => {
        btn.classList.remove("active")
    })
};

reset.addEventListener('click',resetBtn);
