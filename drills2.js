function jediName(firstName, lastName){
   let jediArray = [];
   jediArray.push( lastName.slice(0,3) + firstName.slice(0,2));
   console.log(jediArray);
}

jediName("John","Timothy")