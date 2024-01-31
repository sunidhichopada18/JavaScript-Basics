const getTodos = (resource, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState)
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)//convert json string to js object
        resolve(data);
    } else if(request.readyState === 4){
        reject('error getting resource')
    }
});

    request.open('GET', resource);// this shows the type of request and where to get the data from, this just sets the request
    //request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/'); => error
    request.send();// this sends the request 
    });

};

    

// console.log(1);
// console.log(2);

// getTodos('todos/mario.json', (err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// });
// console.log(3);
// console.log(4);

/* there might also be the case where:-
there can be error occured due to incorrect link so status comes 404 error. so we need to pay attendtion to that too.

check HTTP port menaning, we need to make sure have reponse status in 200's
*/

/*
ready states:
0. Unsent:- client has been created open() notcalled yet
1. OPENED:- open() has been called
2. HEADERS_RECEIVED:- send() has been called and headers and status are available
3. loading:- downloading: responseText holds partial data
4. DONE:- the operation is complete
*/

// promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         //fetch something
//         //resolve('some data');
//         reject('some error');
//     });
//     //resolved or rejected

// };


// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err)
// });
 
// neater version//
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

getTodos('todos/https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious').then((data) => {
    console.log('promise 1 resolved:', data)
    return getTodos('todos/https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious')
}).then((data) => {
    console.log('promise 2 resolved: ', data)
}).catch((err) => {
    console.log('promise rejected:', err);
})

