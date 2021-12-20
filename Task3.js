try {
function reverseString(s){
    if(typeof(s) === "string"){
        return console.log(s.split("").reverse().join(''));
    }else{
        throw new Error("s.split is not a function");
    }
}
reverseString(1212);
}catch(err){
    console.log(err.message);
}
