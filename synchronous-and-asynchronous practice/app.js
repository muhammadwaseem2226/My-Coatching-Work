alert('working')

// 1-callback

console.log('step 1....');

setTimeout(function(){
    console.log('step 2.... 1gb excel');
},2000);

console.log('step 3....');

// 2-Promise



const doSomething = new Promise(function(resolve,reject){
    if (false) {
        resolve({
            name: "waseem",
            last: "ali",
            address: "orangi town",
        });
    } else {
        reject("this error occurred");
    }
})

doSomething
.then(function(data){
    console.log(data," promise data");
})
.catch(function(error){
    console.log(error," promise error");
})

// 3-asyns await

const getTodosData = function () {
    return fetch ("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data,"data");
        return data;
    })
    .catch(function (error) {
        console.log(error);
        return error;
    });
};

const doSomethingAsyncAwait = async function () {
    const data =await getTodosData();
    if (data) {
        data.forEach((singleItem) => {
            console.log(singleItem);
        });
    }
};

doSomethingAsyncAwait();

