const arr = [1,2,3,4,5];

arr.forEach(function(val){
    console.log(val);
})

const arr1 = arr.map(function(val){
    if(val>2){
        return val*2;
    }
});

console.log(arr1);

const arr2 = arr.filter(function(val){
    return val>2;//true false based here 
});


console.log(arr2);

const arr3 = arr.find(function(val){
    return val>2;//true false based here 
});

console.log(arr3);

console.log(arr.indexOf(10));


const obj = {
    name : 'tharun',
    age : 20
};

console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));

console.log(Object.entries(obj)[0][0]);

obj.age = 21;

console.log(obj);

Object.freeze(obj);

obj.age = 22;

console.log(obj);



function f1 (val){
    return val*2;
}

let a = f1(5);

console.log(a);

const f2 = function(val){
    return val*2;
}

let b = f2(5);

console.log(b);

const f3 = (val) => {
    return val*2;
}

let c = f3(5);

console.log(c);

// var t = await fetch("https://reqres.in/api/users?page=2");
// var t1 = await t.json();

// console.log(t);

// console.log(t1);


async function hero(){
    var t = await fetch("https://reqres.in/api/users?page=2");
    var t1 = await t.json();
    console.log(t);
    console.log(t1);
}

hero();