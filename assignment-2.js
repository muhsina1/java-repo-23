function matchFinder(str1, str2){
    if(str1.includes(str2)){
        return true
    }
    else {
        return false;
    }
}

const result = matchFinder("goblin","lin")
console.log(result)