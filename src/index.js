function reverse(numder) {
    let arr=(""+numder).split('').map(Number)
    let rev_arr=arr.reverse()
    let new_number=''
    for (i=0; i<arr.length;i++){
        new_number+=rev_arr[i]
    }
    return new_number
    }