try{
    function isPositive(a){
        if(a>0){
            console.log("Yes!");
        }else if(a === 0){
            throw new Error("Zero Error");
        } else {
            throw new Error("Negative Error");
        }
    }
    isPositive(1);
}catch(err){
    console.log(err.message);
}