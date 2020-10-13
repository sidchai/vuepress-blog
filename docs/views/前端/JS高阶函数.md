---
title: "JS高阶函数"
date: 2020-07-24
sidebarDepth: 2
tags:
- "Javascript"
categories:
- "前端"
---

## JS高阶函数

```javascript
//编程范式：命令式编程声明式编程
//编程范式：面向对象编程(第一公民: 对象)/函数式编程(第一公民: 函数)
//filter/map/reduce
/*
  filter中的回调函数有一个要求：必须返回一个boolean值
    true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
    false:当返回false时，函数内部会过滤掉这次的n
 */
const nums = [10, 20, 30, 40, 50, 111, 222, 333, 444];

// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue,n) => preValue + n);
// console.log(total);

let total = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2;
}).reduce(function (preValue,n) {
  return preValue + n;
},0)
console.log(total);

// //1.filter函数的使用
// let newNums = nums.filter(function (n) {
//   return n < 100;
// });
// // console.log(newNums);
//
// //2.map函数的使用
// let newNums2 = newNums.map(function (n) {
//   return n * 2;
// })
// // console.log(newNums2);
//
// //3.reduce函数的使用
// //reduce作用对数组中所有的内容进行汇总
// let total = newNums2.reduce(function (preValue, n) {
//   return preValue + n;
// }, 0)
// console.log(total);
//第一次: preValue: 0  n: 20
//第二次: preValue: 20 n: 40
//第三次: preValue: 60 n: 60
//第四次: preValue: 120 n: 80
//第五次: preValue: 200 n: 100
// 300

// //1.需求：取出所有小于100的数字
// let newNums1 = [];
// for(let n of nums){
//   if(n < 100){
//     newNums1.push(n);
//   }
// }
//
// //2.需求：将所有小于100的数字进行转化：全部*2
// let newNums2 = [];
// for(let n of newNums1){
//   if(n < 100){
//     newNums2.push(n);
//   }
// }
//
// console.log(newNums2);
//
// //3.需求：将所有newNums2数字相加，得到最终的结果
//
// let total = 0;
// for(let n of newNums2){
//   total += n;
// }
```
