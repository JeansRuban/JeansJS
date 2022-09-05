console.log("Start");

//function loginUser(email, password) {
//    setTimeout( function() {
 //       console.log("working...");
//        return { username: "jeans"};
 //   }, 3000);
//}

function loginUser(email, password, callback) {
    setTimeout( function() {
        console.log("working loginUser...");
        callback( { username: "jeans"} );
    }, 3000);
}

function getUserDetails(username, callback) {
    setTimeout( function() {
        console.log("working getUserDetails...");
        callback( { username, age: 25, likes: 100 } );
    }, 500);
}

//const userObj = loginUser("abc@gmail.com", 'abcdef');
//console.log(userObj);

loginUser("abc@gmail.com", 'abcdef', function(userObj) {
    console.log(userObj);

    getUserDetails(userObj.username, function(data) {
        console.log(data);
    } );
} );

//loginUser("abc@gmail.com", 'abcdef', function(userObj) {
//    console.log(userObj);
//} );

//getUserDetails(userObj.username, function(data) {
//    console.log(data);
//} );

console.log("end");