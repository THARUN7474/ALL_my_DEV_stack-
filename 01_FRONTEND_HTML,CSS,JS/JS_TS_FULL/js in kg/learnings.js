let product = {
      name: 'TShirt',
      price: 789,
      rating: {
        stars: 4.5,
        noOfReviews: 453,//better to keep this as it helps us so to write next line error less later
      },
    };
    console.log(typeof product);
    console.log(product);
    let str = JSON.stringify(product);//converts to json formate
    console.log(typeof str);
    console.log(str);

    let newProduct = JSON.parse(str);//converts to objecttype fromjson
    console.log(typeof newProduct);
    console.log(newProduct);

    let product1 = {
        name: 'TShirt',
        price: 789,
        rating: {
          stars: 4.5,
          noOfReviews: 453,
        },
      };


      //works in browser tools
  
      // localStorage.setItem('Name', 'KG Coding');
      // localStorage.setItem('Price', '87656');
  
      // console.log(localStorage.getItem('Name'));
      // localStorage.setItem('product', JSON.stringify(product));
      // let product2 = JSON.parse(localStorage.getItem('product'));
      // console.log(product2);
      // localStorage.removeItem('Price');
      // localStorage.clear();
  


       // let myDate = new Date();
    // console.log(myDate.getTime());
    // console.log(myDate.getFullYear());
    // console.log(myDate.getDay());
    // console.log(myDate.getHours());
    // console.log(myDate.getMinutes());
    // console.log(myDate.getMilliseconds());

    let button = document.createElement('Button');
    button.innerText = 'Click Me';
    document.querySelector('.my-div').appendChild(button);
    document.querySelector('.my-div').removeChild(button);



    // let numbers = [1,4,3,7,5,6,7,2];
    // console.log(numbers);
    // console.log(numbers.length);
    // console.log(numbers[5]);

    // let obj = {lkj: 98};
    // let doosra = [1, true, null, 'asdfasd'];
    // console.log(doosra[3]);
    // console.log(typeof doosra);

    // console.log(Array.isArray(doosra));
    // console.log(Array.isArray(obj));


    // let arr = [1,2,3];
    // console.log(arr);
    // arr.push(6);
    // console.log(arr);
    // console.log('popped ' + arr.pop());
    // console.log(arr);
    // console.log('popped ' + arr.pop());
    // console.log(arr);


    // let arr = [3,5,7,6];
    // console.log(arr);
    // arr.splice(1, 3);
    // console.log(arr);
    
    let arr = [9,8,5,7,6];
    console.log(arr);
    arr.sort();
    console.log(arr);

    console.log(arr.valueOf());
    let arr2 = arr;
    arr2[0] = 99;
    console.log(arr);

    let [a,b,c,d] = arr;
    console.log(a + " " + b + " " + c + ' ' + d);



    // let arr = [1,2,3,4,5];
    // let squares = arr.map(num => num*num);
    // console.log(squares);


    // let arr = [1,2,3,4,5,6,7,8,9];
    // let odds = arr.filter((num, index) => {
    //   if (num % 2 === 1) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    // let newOdds = arr.filter(
    //   (num, index) => num % 2 === 1
    // );
    // console.log(newOdds);









    //let arr = [3,5,7,9];
    // for (let i = 0 ; i < arr.length; i++) {
    //   console.log(arr[i]);
    // }

    // let arr = [1,2,3,4,5,6,7,8,9];
    // arr.forEach(num => {
    //   if (num === 5) {
    //     return;
    //   }
    //   console.log(`visited:${num}`);
    // });


    // function search(arr, num) {
    //   for (let i = 0 ; i < arr.length; i++) {
    //     if (arr[i] === num) {
    //       console.log(`element found at:${i}`);
    //       return;
    //     }
    //   }
    //   console.log('Element was not found');
    // }

    //search(arr, 10);









    // let buttonElement = document.querySelector('#my-button');
    // let behaviour = event => console.log('I am clicked');
    // buttonElement.addEventListener('click', behaviour);

    // let printDate = event => console.log(new Date());
    // buttonElement.addEventListener('click', printDate);
    // buttonElement.removeEventListener('click', behaviour);





    // let sum = function(num1, num2) {
    //   return num1 + num2;
    // };
    // let newSum = sum;
    // console.log(sum(4, 5));
    // console.log(newSum(4, 5));

    // ((4 + 5) + 7)
    // let sumThreeNumbers = function(num1, num2, num3, sumTwoNumbers) {
    //   let sum1 = sumTwoNumbers(num1, num2);
    //   return sumTwoNumbers(sum1, num3);
    // }

    // console.log(sumThreeNumbers(4,5,6, sum));

    // console.log(sumThreeNumbers);
    // console.log(typeof sumThreeNumbers);
    
    // let sum = (num1, num2) => {
    //   return num1 + num2;
    // }
    //console.log(sum(6,8));

    // let square = num => num * num;

    // console.log(square(5));

    // let alarm = () => console.log(`Subaha ho gayi, uth jaao. ${new Date()}`);
    // let timerId = setTimeout(alarm, 1000);
    // console.log(`Alaram set with timerID:${timerId}`);
    // clearTimeout(timerId);

    // let intervalId = setInterval(alarm, 1000);
    // setTimeout(() => clearInterval(intervalId), 5000);