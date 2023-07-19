const students = ["sakhawat","Abu Huarin","sakibe","Joney","Rony"]

console.log(students.sort())


const roll_numbers = [3,5,6,9,11,15,16,19]

console.log(roll_numbers.sort(function(a,b){
    return(b-a)


}))


function isLeapYear (year){
    
    if((year % 400 ===0)|| (year % 4 === 0) && (year % 100 !== 0) ){
        console.log(`${year} is leap year`)
    }
    else{
        console.log(`${year} is a not  leap year`)
    }


}

isLeapYear(2028)


const vowels = ["a","e","i","o","u"]
function countVowel(sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;



}

console.log(countVowel("I love Bangladesh"))


const numbers = [1,2,3,4,2,5,6,7,8,9,10,9,8];
const duplicates = numbers.filter(function(value,index,array){
    return array.indexOf(value) !== index
})
console.log(duplicates);

const number = [1,2,3,4,2,5,6,7,8,9,10,9];
const duplicatesi = number.filter(function(value,index,array){
    return array.indexOf(value) == index
})
console.log(duplicatesi);