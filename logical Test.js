//! 1Q: Write a program to print only the even numbers of the array.

// function getEvenNumbers() {
//         var arr = [1, 2, 3, 4, 5, 6];
    
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 === 0) {
//                 document.writeln(arr[i] + "<br />");
//             }
//         }
//     }
    
//     getEvenNumbers();
// ! 2Q:Find the maximum consecutive 1's in an array of 0's and 1's.

// const arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];
// const arr= [1,0,0,0,0,1,0,0,0,1 ];
// const findMaxConsecutiveOnes = (arr = []) => {
//    let left = 0;
//    let right = 0;
//    let max = 0;
//    while (right < arr.length) {
//       if (arr[right] === 0) {
//          if (right - left > max) {
//             max = right - left
//          };
//          right++;
//          left = right;
//       } else {
//          right++
//       };
//    };
//    return right - left > max ? right - left : max;
// }
// document.write(findMaxConsecutiveOnes(arr));
// ! 3Q: Suppose you have an array of 101 integers.

var sample_data = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51]

function process(data){

    var result = []
    var a;
    var b;

    for (var i=0; i < data.length; i++) {

        a = data[i];

        for (var j=0; j < data.length; j++) {

            b = data[j]

            if ( (parseInt(a) + parseInt(b)) === 100 && result.indexOf(a+","+b) == -1 && result.indexOf(b+","+a ) == -1 ) {
               result.push( a+","+b )
            }

        }    
    }

    for (var i=0; i < result.length; i++) {
        result[i] = result[i].split(',')
    }

    return result
} 

process(sample_data);





// !4Q:Write a sample code to call this rest api and display the result.
// let xhr = new XMLHttpRequest();
// xhr.open('get', 'https://my-json-server.typicode.com/typicode/demo/posts');
// xhr.send();

// xhr.onload = function() {
//     console.log(xhr.response);
// };

// ! 5Q:Write a code to sort the object by id  I.e final output should have objected sort by id’s

// var items = [
//     {
//         "id": 4,
//         "name": "abc"
//     },
//     {
//         "id": 10,
//         "name": "ab2"
//     },
//     {
//         "id": 5,
//         "name": "abc3"
//     },
//     {
//         "id": 6,
//         "name": "abc5"
//     },
    
// ];

// items.sort(function(a, b) {
//     return (a.id - b.id);
// }).sort(function(a, b) {
//     return (a.name - b.name);
// });

// console.log(items);