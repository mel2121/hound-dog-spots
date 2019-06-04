var str= "leetcode";
var arr = str.split('');
var selectArr=[];
var tempArr=[];
var i,j,k,temp;
var distArr=[];
var newLow;
//create array of select values
for (i=0;i<arr.length;i++){
  if(arr[i]=='e'){
    selectArr.push(i);
  } else {
    //do nothing
  }
 
}
for (k=0; k<arr.length; k++){
  if(selectArr.includes(k)){
    distArr.push(0);
  } else {
    //subtract them
    for (j=0;j<selectArr.length;j++){
      temp=Math.abs(selectArr[j]-k);
      tempArr.push(temp);
    }
      newLow=Math.min(...tempArr);
    //  console.log(newLow)
      distArr.push(newLow);
      ///distArr.push(temp);
      tempArr.length=0;
    
  
  }
   
}


console.log(distArr);
