function gradeLab(studentLab){
    try{
    for(let obj of studentLab){
    let {student, runLab} = obj;
    if(runLab === undefined){
        throw new Error("Error Thrown!");
    }else if(runLab(3,3) !== Math.pow(3,3)){
        console.log(`${student} code working false`);
    }else{
        console.log(`${student} code working true`);
    }

}
    
}catch(err){
    console.log(err.message);
}
}
gradeLab([
    {
    student: "Blake",
    runLab: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Jessica",
    runLab: function (num) {
    return Math.pow(num, num);
    },
    },
    {
    student: "Mya",
    runLab: function (num) {
    return num * num;
    },
    },
    ])
