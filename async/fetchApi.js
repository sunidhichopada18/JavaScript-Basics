//fetch api

/*
fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data =>{
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
}); // in api we only get the rejection when there is network issue.
*/

/*
1. fetch the data
2.return the promise
3. log the information inside that data
*/ 

// async await

const getTodos = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious');
    console.log(response.status, response.statusText)

    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }//we getname error instead of json error

    const data = await response.json(); 
    return data;
};

// const test = getTodos();
// console.log(test); //it still returns just the promise

getTodos().then(data => console.log('resolved', data))
.catch(err => console.log('rejected', err.message));

//fetch shows error if there is any syntax errr inside the json file but it doesnt show error if the json file is named wrong here because since we write reponse.json it shows error that, the file is not found 

