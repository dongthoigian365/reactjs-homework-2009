compare = (a) => {
    var a = prompt('Nhập một số nguyên bất kì: ')
    if (a < 100) {
        alert('Số này nhỏ hơn 100')            
    }
    else if (a == 100) {
        alert('Số này bằng 100')
    }
    else {
        alert('Số này lớn hơn 100')
    }
}
compare()