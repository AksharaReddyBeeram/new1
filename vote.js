let func = (a) =>{
    if(a>=18 && a>=21) 
        return "Eligible for voting and marriage";
    else if(a>=18)
        return "Eligible only for voting";
    else
        return "Not eligible!!";
}
console.log(func(12));