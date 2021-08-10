function receivesAFunction(newFunction){
    newFunction();
}

function returnsANamedFunction(){
    return receivesAFunction;
}


function returnsAnAnonymousFunction(){
    return (function(){});
    
}