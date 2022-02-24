function receivesAFunction(callbackFunction) {
    callbackFunction()
}
// receivesAFunction(function() {
//     console.log("See the Output")
// })

function returnsANamedFunction() {
    return receivesAFunction
    }

function returnsAnAnonymousFunction() {
    return function() {2 + 2}
}