
function calculateProfit() {
  const joiningFees = parseFloat(document.getElementById("joiningFees").value);
  const numberOfLegs = parseInt(document.getElementById("numberOfLegs").value);
  const depthValues = document.getElementById("depthValues").value.trim();

  // Convert depth values to an array and validate input
  const depthArray = depthValues.split(",").map(depth => parseInt(depth.trim()));
  if (depthArray.length !== numberOfLegs || depthArray.some(isNaN)) {
    alert("Please enter valid depth values for each leg.");
    return;
  }
  const abc = depthValues.split(",")
  console.log(abc);

  var nums = abc.map(function(str) {
    // using map() to convert array of strings to numbers

    return parseInt(str); });
    console.log(nums);


    nums.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    console.log(nums);
   let sum = 0;
    let pair = 0;
    for (let i=0; i<nums.length; i++){
       sum += nums[i]
    }
 
    // 2,20,50,100
    let maxindex = nums.length-1
    let i = nums.length-2
    
while(i>=0) {
  console.log(maxindex);

  //2,6,7,9
  if (nums[maxindex]< nums[i]){
    pair+= nums[maxindex]
    maxindex= i;
    nums [ maxindex] = 0 
    nums[i] -= nums[maxindex]
    i-=1
  }
  else if (nums[maxindex]== nums[i]){
      pair+= nums[i]
      nums[maxindex]= 0 
      maxindex = i -1 
      nums[i] = 0
      i-=2
  }
  else{
      pair += nums[i]
      nums[maxindex]-= nums[i]
      nums[i]= 0
      i-=1
  }
}




console.log(pair);

let unpair = sum-(2*pair)
console.log(sum-(2*pair));




 
  // const TotalJoiningFees = (sum+1)*joiningFees
  // console.log(TotalJoiningFees);
  const bonus = parseFloat(document.getElementById("bonus").value);
  // const tds = parseFloat(document.getElementById("tds").value);
  // const adminCharges = parseFloat(document.getElementById("adminCharges").value);
  // const Capping = parseInt(document.getElementById("capping").value);

  // const Tcapping = TotalJoiningFees*Capping/100


  // // Calculate total pair and bonus income
  // const totalPairs = Math.floor(numberOfLegs / 2);

  // // Calculate bonus income based on depth levels and pair matching in different legs
  // // let totalBonusIncome = 0;
  // // for (let i = 0; i < depthArray.length; i++) {
  // //   const depthBonusRate = depthArray[i];
  // //   // Calculate pairs for each leg
  // //   const pairsInThisLeg = Math.floor(depthArray[i] / 2);
  // //   totalBonusIncome += pairsInThisLeg * bonus * depthBonusRate;
  // // }

  totalBonus = pair*bonus
  // Ttds = (tds*totalBonus/100)
  // TadminCharges = ( adminCharges*totalBonus/100)

  // Calculate total profit
  // const totalProfit = TotalJoiningFees - (Ttds + TadminCharges+totalBonus)

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Total Pairs: ${pair}<br>
                            Total UnPairs: ${unpair}<br>
                          <h2> Total Bonus Income: ${totalBonus}<br>                          
                          
                           </h2>`;
}