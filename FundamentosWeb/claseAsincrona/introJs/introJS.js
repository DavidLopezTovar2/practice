

//var => variables, global type. Can't be modified
var sal = 'hey';
console.log(sal);


//const y let => can change its value

const date ="06/04/2022";

let favFruit = 'apple';
favFruit = 'banana';

//objects
const student1 = {
    name: 'David Lopez',
    age: 22,
    star: 'MERN'
}

const student2 = {
    name: 'Vale Quijano',
    age: 21,
    star: 'VET'
}

const students = [student1,student2];




let word = ''
palindromo(word);
let palindromo = true;
function palindromo(word){
    for(let ini=0, end=word.length; ini<word/2; ini++, end--){
        if(word[ini] != word[end]){
            return false;
        }
    }
}