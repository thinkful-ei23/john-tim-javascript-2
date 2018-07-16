function jediName(firstName, lastName){
   let jediArray = [];
   jediArray.push( lastName.slice(0,3) + firstName.slice(0,2));
   console.log(jediArray);
}

jediName("John","Timothy")

function beyond(num){
if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY){
console.log("And Beyond");
} else if(num > 0) {
console.log("To infinity");
} else if(num < 0) {
    console.log("To negative infinity");
    } else if (num === 0){
        console.log("Staying home");
    }

}
beyond(-99);
