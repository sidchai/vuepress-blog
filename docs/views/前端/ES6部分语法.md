---
title: "ES6部分语法"
date: 2020-07-22
sidebarDepth: 2
tags:
- "Javascript"
categories:
- "前端"
---

> ES6 新语法
<!-- more -->

### let/var

**事实上var的设计可以看成JavaScript语言设计上的错误，但是这种错误多半不能修复和移除，因为需要向后兼容**

- 大概十年前，Brendan Eich就决定修复这个问题，于是他添加了一个新的关键字：let
- 我们可以将let看成更完美的var

**块级作用域**

- JS中使用var来声明一个变量时，变量的作用域主要是和函数的定义有关
- 针对于其它块定义来说是没有作用域的，比如if/for等，这在开发中往往会引起一些问题

### const

**使用const修饰的标识符为常量，不可以再次赋值**

<h5 style='color:red'>什么时候使用const？</h5>

当我们修饰的标识符不会被再次赋值时，就可以使用const来保证数据的安全性

<h5 style='color:red'>建议：在开发中，优先使用const，只有需要改变某一个标识符的时候才使用let</h5>

```html
<script>
  //1.注意一: 一但给const修饰的标识符被赋值之后，不能修改
  // const name = 'jack';
  // name = 'abc';

  //2.注意二: 在使用const定义标识符，必须进行赋值
  // const name;

  //3.注意三: 常量的含义时指向的对象不能修改，但是可以改变对象内部的属性
  const  obj = {
    name: 'jack',
    age: 18,
    height: 1.88
  };

  // obj = {};
  
  console.log(obj);

  obj.name = 'kobe';
  obj.age = 40;
  obj.height = 1.87;

  console.log(obj);
</script>
```

### 对象增强写法

ES6中，对对象字面量进行了很多增强。

属性初始化简写和方法的简写

```javascript
//1.属性的增强写法
  const name = 'cx';
  const age = 18;
  const height = 1.88;

  //ES5的写法
  const obj1 = {
     name: name,
     age: age,
     height: height
   }

  //ES6的写法
   const obj2 = {
     name,
     age,
     height
   };

//2.函数的增强写法
  //ES5的写法
   const obj1 = {
     run: function () {
  
     },
     eat: function () {
  
     }
   }

  //ES6的写法
  const obj2 = {
    run() {

    },
    eat() {

    }
  }
```

### 箭头函数

- ES6标准新增了一种新的函数：Arrow Function（箭头函数）。

- 基本使用

  ```js
  <script>
    //箭头函数: 也是一种定义函数的方式
    //1. 定义函数的方式： function
    let aaa = function () {
  
    }
  
    //2. 对象字面量中定义函数
    let obj = {
      bbb() {
  
      }
    }
  
    //3. ES6中的箭头函数
    // let ccc = (参数列表) => {
    //
    // }
    let ccc = () => {
  
    }
  </script>
  ```

- 参数和返回值

  ```js
  <script>
    //1. 参数问题:
    //1.1 放入两个参数
    const sum = (num1, num2) => {
      return num1 + num2;
    }
  
    //1.2放入一个参数, ()可以省略
    const power = num => {
      return num * num;
    }
  
    //2. 函数中
    //2.1 函数代码块中有多行代码时
    const test = () => {
      //1.打印Hello World
      console.log('Hello World');
      //2.打印 Hello Vuejs
      console.log('Hello Vuejs');
    }
  
    //2.2 函数代码块中只有一行代码
    // const mu1 = (num1, num2) => {
    //   return num1 * num2;
    // }
    const mu1 = (num1, num2) => num1 * num2
  </script>
  ```

- this的使用

  ```js
  <script>
    //什么时候使用箭头函数
    // setTimeout(function () {
    //   console.log(this)
    // },1000)
    // setTimeout(() =>{
    //   console.log(this)
    // })
  
    //问题: 箭头函数中的this是如何查找的？
    //结论：向外层作用域中，一层层查找this，知道有this的定义
    // const obj = {
    //   aaa() {
    //     setTimeout(function () {
    //       console.log(this); // window
    //     })
    //     setTimeout(() =>{
    //       console.log(this); // obj对象
    //     })
    //   }
    // }
  
    const obj = {
      aaa() {
        setTimeout(function () {
          setTimeout(function () {
            console.log(this); // window
          })
          setTimeout(() =>{
            console.log(this); // window
          })
        })
        setTimeout(() =>{
          setTimeout(function () {
            console.log(this); // window
          })
          setTimeout(() =>{
            console.log(this); // obj对象
          })
        })
      }
    }
  </script>
  ```

  ### Promise

- ES6中一个非常重要和好用的特性就是Promise
- Promise到底是做什么的？
  - Promise是异步编程的一种解决方案

#### 定时器的异步事件

- 先来看看Promise最基本的语法

- 这里我们用一个定时器来模拟异步事件：

  - 假设下面的data是从网络1秒后请求的数据

  - console.log就是我们的处理方式

    ```js
    setTimeout((data) => {
      onsole.log(data);
    },1000)
    ```

- 这是我们过去的处理方式，我们将它换成Promise代码

- 这个例子会让我们感觉脱裤子放屁，多此一举

  - 首先，下面的Promise代码明显比上面的代码看起来还要复杂

  - 其次，下面的Promise代码中包含的resolve、reject、then、catch都是些什么东西啊？

    ```js
    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hello World')
        }, 1000)
      }).then((data) => {
        console.log(data);
      })
    ```

#### Promise三种状态

- 首先，当我们开发中有异步操作时，就可以给异步操作包装一个Promise

  - 异步操作之后会有三种状态
    - pending：等待状态，比如正在进行网络请求，或者定时器没有到事件
    - fulfill：满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()
    - reject：拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()

  ```js
  new Promise(((resolve, reject) => {
      setTimeout(() => {
        // resolve('Hello Vue')
        reject('error message')
      })
    })).then(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  ```
  
  #### Promise的链式调用

```js
new Promise((resolve, reject) => {

    //第一次网络请求的代码
    setTimeout(() => {
      resolve()
    },1000)

  }).then(() => {
    //第一次拿到结果的处理代码
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');

    return new Promise((resolve, reject) => {

      //第二次网络请求的代码
      setTimeout(() => {
        resolve()
      })

    })
  }).then(() => {

    //第二次拿到结果的处理代码
    console.log('Hello Vuejs');
    console.log('Hello Vuejs');
    console.log('Hello Vuejs');
    console.log('Hello Vuejs');

    return new Promise((resolve, reject) => {

      //第三次网络请求的代码
      setTimeout(() => {
        resolve()
      })

    })
  }).then(() => {

    //第三次拿到结果的处理代码
    console.log('Hello Java');
    console.log('Hello Java');
    console.log('Hello Java');
    console.log('Hello Java');
  })
```

```js
//网络请求: aaa -> 自己处理(10行)
  //处理: aaa111 -> 自己处理(10行)
  //处理: aaa111222 -> 自己处理
  // new Promise(((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('aaa')
  //   })
  // })).then(res => {
  //   //1.自己处理10行代码
  //   console.log(res, '第一层的10行代码');
  //
  //   //2.对结果进行第一次处理
  //   return new Promise(resolve => {
  //     resolve(res + '111')
  //   })
  // }).then(res => {
  //   console.log(res, '第二层的10行代码');
  //
  //   return new Promise(resolve => {
  //     resolve(res + '222')
  //   })
  // }).then(res => {
  //   console.log(res, '第三层的10行代码');
  // })

  // new Promise(((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('aaa')
  //   })
  // })).then(res => {
  //   //1.自己处理10行代码
  //   console.log(res, '第一层的10行代码');
  //
  //   //2.对结果进行第一次处理
  //   return Promise.resolve(res + '111')
  // }).then(res => {
  //   console.log(res, '第二层的10行代码');
  //
  //   return Promise.resolve(res + '222')
  // }).then(res => {
  //   console.log(res, '第三层的10行代码');
  // })

  //省略掉Promise.resolve
  // new Promise(((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('aaa')
  //   })
  // })).then(res => {
  //   //1.自己处理10行代码
  //   console.log(res, '第一层的10行代码');
  //
  //   //2.对结果进行第一次处理
  //   return res + '111'
  // }).then(res => {
  //   console.log(res, '第二层的10行代码');
  //
  //   return res + '222'
  // }).then(res => {
  //   console.log(res, '第三层的10行代码');
  // })

  new Promise(((resolve, reject) => {
    setTimeout(() => {
      resolve('aaa')
    })
  })).then(res => {
    //1.自己处理10行代码
    console.log(res, '第一层的10行代码');

    //2.对结果进行第一次处理
    // return Promise.reject('err message')
    throw 'err message'
  }).then(res => {
    console.log(res, '第二层的10行代码');

    return res + '222'
  }).then(res => {
    console.log(res, '第三层的10行代码');
  }).catch(err => {
    console.log(err);
  })
```
