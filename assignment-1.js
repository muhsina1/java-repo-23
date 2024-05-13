function cubeNumber(number){
    if(typeof number!=='number'){
        console.log('please type a number')
    }
    const result = number*number*number
    console.log(result)
}

cubeNumber(2)
cubeNumber(3)
cubeNumber('v')