//Step-01: Add Event Listener to the deposite button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // Step-02: Get the deposit amount from the input Field 
    const depositAmount = document.getElementById('user-deposit');
    const newDepositedString = depositAmount.value;
  const newDeposited = parseFloat(newDepositedString);
    // Step-03: get the current Deposite Total 
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousHaveAmountString = depositTotalAmount.innerText;
     const previousHaveAmount = parseFloat(previousHaveAmountString);
     const currentDepositAmountString = previousHaveAmount + newDeposited;
    const currentDepositAmount = parseInt(currentDepositAmountString)
    depositTotalAmount.innerText = currentDepositAmount;
    
    //Getting The balance Total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDeposited ;
    balanceTotal.innerText = currentBalanceTotal;


    // step-7: Clearing the deposit feild 
    depositAmount.value = '';
})