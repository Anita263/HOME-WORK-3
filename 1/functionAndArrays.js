// // // Создайте файл functionsAndArrays.js. В нем напишите функцию, которая принимает на вход два массива из чисел. Функция должна вернуть true, если сумма чисел из обоих массивов одинаковая, иначе функция должна вернуть false.

// // // function hasEqualSums(first, second) {
// // //  // тут твой код
// // // }

// // // console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]));
// // // // должен вернуть true, т.к. 11+22=33 и 1+20+10+1+1=33

// // // console.log(hasEqualSums([4, 4], [3, 6]));
// // // // должен вернуть false, т.к. 4+4=8, а 3

function hasEqualSums(first, second){
let firstSum = 0;
for (i = 0; i < first.length; i++) {firstSum += first[i]} /* firstSum += first[i]- к результату полученному в предыдущей операции прибавляет следующее число массива.*/ 
let secondSum = 0;
 for (i = 0; i < second.length; i++) {secondSum += second[i]} 
  if (firstSum === secondSum)
 { return true;
 }else{
        return false;
    }
    }
    console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]));
    console.log(hasEqualSums([4, 4], [3, 6]));



// В ранее созданном файле, напишите функцию, которая принимает два параметра: массив имен и число. 
// -  Функция должна вернуть массив, в котором остались только те имена, длина которых соответствует указанному во втором параметре числу.
function filterNames(names, number) {
    let myArray = [];
      for (i = 0; i < names.length; i++)
    if (names[i].length === number)
myArray.push(names[i])
{
return myArray
}
}
function filterNames(names, number){
 let result = names.filter(names => names.length === number) 

return result; 
}
 console.log(filterNames(['alt', 'shoo', 'js', 'html', 'git'], 4));
// //  должен вернуть массив ['shoo', 'html']

