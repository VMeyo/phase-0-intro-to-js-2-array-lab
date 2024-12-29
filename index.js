// Write your solution here!
//Defining cats
const cats = ["Milo", "Otis", "Garfield"];

//Destructively Appending a cat's name
function destructivelyAppendCat(name){
    return cats.push(name);
}

//Destructively Prepending a cat's name
function destructivelyPrependCat(name){
    return cats.unshift(name);
}

//Destructively remove last cat's name
function destructivelyRemoveLastCat(name){
    return cats.splice(2);
}

//Destructively remove first cat from the cats array
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

//Append cat, have a copy of cat array and add 'Broom'
function appendCat(name){
    return [...cats, name ];
}

//Prepend cat, have a copy of cat array and add name
function prependCat(name){
    return [ name, ...cats ];
}

//Removes the last cat in the cat's array and make a copy
function removeLastCat(name){
    return cats.slice(0, -1);
}

//Removes the first cat in the cat's array and make a copy
function removeFirstCat(name){
    return cats.slice(1);
}