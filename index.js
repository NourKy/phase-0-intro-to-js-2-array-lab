// Write your solution here!
const cats=[];

cats.push("Milo","Otis","Garfield");

destructivelyAppendCat("Ralph");
function destructivelyAppendCat(name)
{
    cats.push(name);
    console.log(cats);
}



cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyPrependCat("Bob");
function destructivelyPrependCat(name)
{
    cats.unshift(name);
    console.log(cats);
}


cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

destructivelyRemoveLastCat();
function destructivelyRemoveLastCat()
{
    cats.pop(2);
console.log(cats);
}

cats.length = 0;

cats.push("Milo", "Otis", "Garfield");

destructivelyRemoveFirstCat();
function destructivelyRemoveFirstCat()
{
    cats.shift(0);
console.log(cats);
}

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");
appendCat("Broom");
function appendCat(name)
{
    
    const copycats=[...cats, "Broom"];
    return copycats;
}

prependCat("Arnold");
function prependCat(name)
{
    const copycats=[name , ...cats];
    return copycats;
}
removeLastCat();
function removeLastCat()
{
    const copycats=  cats.slice(0,cats.length-1);
    return copycats;
}
removeFirstCat();
function removeFirstCat()
{
    const copycats=  cats.slice(1);
    return copycats;
}