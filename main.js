
// Lesson_1-Homeworks
// Begin1.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const S = 4 * a;
// alert(S);


// Begin2.
// const  a = parseInt(prompt("a  qiymat kiriting"));
// const S = a * a;
// alert(S);

// Begin3.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const  b = parseInt(prompt("b ga qiymat kiriting"));
// const S = a * b; 
// const P = 2 * (a + b);
// alert(S);
// alert(P);


// Begin4.
// const  d = parseInt(prompt("d ga qiymat kiriting"));
// const L = 3.14 * d;
// alert(L);


// Begin5.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const V = a * a * a; 
// const S = 6 * a * a;
// alert(V);
// alert(S);


// Begin6.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const  b = parseInt(prompt("b ga qiymat kiriting"));
// const  c = parseInt(prompt("c ga qiymat kiriting"));
// const V = a * b * c; 
// const S = 2 * (a * b + b * c + a * c);
// alert(V);
// alert(S);



// Begin7.
// const  R = parseInt(prompt("R ga qiymat kiriting"));
// const L = 2 * 3.14 * R; 
// const S = 3.14 * R * R;
// alert(L);
// alert(S);



// Begin8.
// const  a = parseInt(prompt("a ga qiymat kiriting"));
// const  b = parseInt(prompt("b ga qiymat kiriting"));
// const S = (a + b)/2;
// alert(S);

// Lesson_2-Homeworks

// if_1


// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert(++num);
// } else if (num < 0) {
//   alert(false)
// }


// if_2


// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert(++num);
// } else if (num < 0) {
//   alert(num + 2);
// }


// if_3


// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert(++num);
// } else if (num == 0) {
//   alert(num + 10);
// } else if (num < 0) {
//   alert(num + 2);
// }




// if_6


// let a = parseInt(prompt("a ni kriting"));
// let b = parseInt(prompt("b ni kriting"));

// alert(Math.max(a, b));


// if_7


// let a = parseInt(prompt("a ni kriting"));
// let b = parseInt(prompt("b ni kriting"));

// alert(Math.min(a, b));

// Boolean_1

// let num = parseInt(prompt("sonni kiriting"));

// if (num > 0) {
//   alert("Musbat son");
// } else if (num < 0) {
//   alert("Manfiy son");
// } 


// Boolean_2_&_3

// let num = parseInt(prompt("sonni kiriting"));

// if (num%2==0) {
//   alert("Juft son");
// } 
// else if (num%2==1 ) {
//   alert("Toq son");
// } 



// Boolean_4

// let A = parseInt(prompt("a sonni kiriting"));
// let B = parseInt(prompt("b sonni kiriting"));

// if (A>2&&B<=3) {
//   alert("True");
// } 



// Boolean_5

// let A = parseInt(prompt("a sonni kiriting"));
// let B = parseInt(prompt("b sonni kiriting"));

// if (A>=0||B<-2) {
//   alert("True");
// } 



// Boolean_6

// let A = parseInt(prompt("A sonni kiriting"));
// let B = parseInt(prompt("B sonni kiriting"));
// let C = parseInt(prompt("C sonni kiriting"));

// if (A<=B<=C) {
//   alert("True");
// } 



// // Boolean_11

// let A = parseInt(prompt("A sonni kiriting"));
// let B = parseInt(prompt("B sonni kiriting"));


// if (A%2==0 && B%2==0 ) {
//   alert("Juft sonlar");
// } 
// else if (A%2==1 && B%2==1) {
//   alert("Toq sonlar");
// } 



// Lesson_3-Homeworks

// For_1

// const n = parseInt(prompt("Please enter the value of N"))

// if(n > 0) {
//     for(let k = 0; k < n; k++) {
//         console.log("N -> ", k)
//     }
// }


// For_4

// const price1kg = 2500;

// for(let i =1; i <= 10; i++) {
//     console.log(`Price of candy for ${i}kg is = ${i * price1kg}`)
// }


// For_5

// const price1kg = 5000;

// for(let i =0.1; i <= 1; i += 0.1) {
//     console.log(`Price of candy for ${i}kg is = ${(i * price1kg).toFixed(2)}`)
// }




// For_7


// const  a = parseInt(prompt("A sonini kiriting"))
// const  b = parseInt(prompt("B sonini kiriting"))
// let sum = 0;

// if(a < b) {
//     for(let i = a; i <= b; i++) {
//         sum += i
//     }
//     console.log(`Sum -> `, sum)
// }

// For_8


// const  a = parseInt(prompt("A sonini kiriting"))
// const  b = parseInt(prompt("B sonini kiriting"))
// let sum = 1;

// if(a < b) {
//     for(let i = a; i <= b; i++) {
//         sum *= i
//     }
//     console.log(`Sum -> `, sum)
// }


// For_10

// const n = parseInt(prompt("N sonini kiriting"))
// let sum = 0;


// if(n > 0) {
//     for(let i = 1; i <= n; i++) {
//         sum += 1/i
//     }
//     console.log("Sum -> ", sum)
// }

// For_11

// const n = parseInt(prompt("N sonini kiriting"))
// let S = 0;

// if(n > 0) {
//     for(let i = 0; i <= n; i++) {
//         S += (i+i)**2
//     }
//     console.log("S -> ", S)
// }

//For_12

// const n = parseInt(prompt("N sonini kiriting"))
// let res = 1;


// if(n > 0) {
//     for(let i = 1; i <= n; i +=0.1) {
//         res *= i
//     }
//     console.log("result -> ", res)
// }
