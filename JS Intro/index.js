// let num;
// num = 10
// console.log(num)
// num = 7
// console.log(num)

// const num = 10;

// num = 11

// console.log(num)

// const str = "hi";
// const num = 1;
// const float = 1.4;
// const arr = [1,'hi',2,1.5] // 0,1,2,3,4....
// const obj = {name:"P.Deepak",age :22}
// const bool = true //false

// console.log(str,num,float,arr,obj)

// console.log(arr[1])

// console.log(obj.name)
// console.log(obj['name'])

// console.log(0 === 0, 0>=0 , 0<=0) // == === <= >= < > !

// console.log(Boolean(!0)) // 0-false ''-false

// console.log(Boolean(true || false))  // || (or) &&(and)

// const val = prompt("Enter the Number");

// const val2 = val == 1 ? 1 : 0 // const var = condition ? true val : false val

// const val3 = 0 && 2; // && it executes the 1st value if it is false,if it is true it executes the second value
// const val4 = 0 || false; // || it executes the first value if the first value is true,else it executes the second val

// console.log(val3,val4)

// function add(a1,a2) {
//     return a1+a2
// }

// const add = (a1,a2) => {return a1+a2}

// const a = add(1,2)

// const b = add(2,3)

// console.log(a,b)

// Condition Statements
// if (1>1) {
//    alert('hi')
// } else if(1>1) {
//    alert("The else if block is executed")
// } else {
//     alert('else block is executed')
// }

// switch(1) {
//     case 2: // 1===1
//         console.log('hi');
//         break;
//     case 3:
//         console.log('case 2');
//         break;
//     default:
//         console.log('default is executed') // partialy equal to if with the equality check
// }

// for(let i = 0;i<=10;i++) {
//       if(i==2) {
//         break; // it just terminates the entire loop
//       }
//       console.log(i)
// }

// const arr = [1,2,3,4,5,6,7] // index:0,1,2,3,4,5,6
// console.log(arr.length)

// for(let i = 0;i<=10;i++) {
//     if(i==2) {
//       continue; // According to the condition(i.e i == 2) it just terminates that one iteration
//     }
//     console.log(i)
// }

// for(let i =0;i<=arr.length - 1;i++) {
//      console.log(arr[i])
// }

// for(const val of arr) {
//   console.log("It is " + val + " loop")
// }

const obj = { name: "Deepak", password: 7283344201, age: 22 };

for (const val in obj) {
  console.log(val + ":" + obj[val]);
}

let var1 = 0;

let i = 0;

while (!var1) {
  i = i + 1;
  if (i < 10) {
    console.log("hi");
  } else {
    var1 = 1;
  }
}

console.dir(document);

const p = document.body.children[0];
const input = document.body.children[1][0];
const button = document.body.children[1][1];

// const promptCollector = prompt("Enter the admin name:").toLowerCase()

// if(promptCollector == 'deepak') {
//   p.style.backgroundColor = 'black'
//   p.style.color = 'white'
// }
let name1;
button.addEventListener("click", (event) => {
  event.preventDefault()
  name1 = input.value
  console.log(name1)
});
