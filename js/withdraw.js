//1. Add Event Handler to the withdraw Button 
//2.Get The withdraw Amount From The Withdraw Input Field
//3.Get Previous withdraw
//4.calculating Total Withdraw Amount
//5.Set Total Withdraw Amount
// 6. Get the Balance Implementation
//7.Clear the Withdraw Feild

// step-01:
document.getElementById('btn-withdraw').addEventListener('click',function(){
  // step-02:
  const withdrawFeild = document.getElementById('user-withdraw')  ;
  const newWithdrawAmountString = withdrawFeild.value ;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  //step-03
  const previousWithdrawAmount = document.getElementById('withdraw-amount');
  const previouswithdrawAmountString = previousWithdrawAmount.innerText;
  const previouswithdrawing = parseFloat(previouswithdrawAmountString);
// step-04
const currentWithdrawAmount = previouswithdrawing + newWithdrawAmount ;
// step-05
previousWithdrawAmount.innerText = currentWithdrawAmount;
//step-06:
const withdrawTotalBalance = document.getElementById('balance-total');
const previousBalanceuptoWithdrawString = withdrawTotalBalance.innerText;
const previousBalanceuptoWithdraw = parseFloat(previousBalanceuptoWithdrawString);
const currentWithdraw = previousBalanceuptoWithdraw - newWithdrawAmount;
 withdrawTotalBalance.innerText = currentWithdraw;
//step-07:
withdrawFeild.value = '';
})