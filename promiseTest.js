console.log("Start");

//function loginUser(email, password) {
//    setTimeout( function() {
 //       console.log("working...");
//        return { username: "jeans"};
 //   }, 3000);
//}

function loginUser(email, password) {
// function loginUser(email, password, callback) {
    
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("working loginUser...");
            resolve ({ username: "jeans" });
        }, 3000);
    });

    // setTimeout( function() {
    //     console.log("working loginUser...");
    //     callback( { username: "jeans"} );
    // }, 3000);

    return promise;
}

function getUserDetails(username) {

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("working getUserDetails...");
            resolve ({ username, age: 25, likes: 100 });
        }, 1000);
    });
    return promise;

    // setTimeout( function() {
    //     console.log("working getUserDetails...");
    //     callback( { username, age: 25, likes: 100 } );
    // }, 500);
}

//const userObj = loginUser("abc@gmail.com", 'abcdef');
//console.log(userObj);

// loginUser("abc@gmail.com", 'abcdef', function(userObj) {
//     console.log(userObj);

//     getUserDetails(userObj.username, function(data) {
//         console.log(data);
//     } );
// } );

loginUser("abc@gmail.com", 'abcdef')
    .then(function(userObj) {
        console.log(userObj);
        getUserDetails(userObj.username)
    .then( function(data) {
        console.log(data);
    } );
} ).catch(function(reason) {
        console.log("This is the reason");
} ).finally(() => {
    console.log("The End");
} );

// async function example() {
//     try {
//         const userObj = await loginUser("abc@gmail.com", 'abcdef')
//             console.log(userObj);
//         const userDetails = await getUserDetails(userObj.username)
//             console.log(userDetails);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// example();


// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve ({ username: "jeans" });
//     }, 3000);
// });

// promise.then(function (value) {
//     console.log(value);
// }).catch(function(reason) {
//     console.log(reason);
// });

console.log("end");