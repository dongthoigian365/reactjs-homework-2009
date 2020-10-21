function caculateSalary(sal) {
    var sal = prompt('Nhập lương của nhân viên')    
    if (sal <= 0) {
        alert('Không được nhập nhỏ hơn và bằng 0') 
    }
    else if (sal > 0 && sal < 7000000) {
        var tax = sal * 0.1
        var salary = sal - (sal * 0.1)
        alert('THuế thu nhập là: ' + tax)
        alert('Luong ròng là: ' + salary)
    }
    else if (sal === 7000000 && sal < 15000000) {
        var tax = sal * 0.2
        var salary = sal - (sal * 0.2)
        alert('THuế thu nhập là: ' + tax)
        alert('Luong ròng là: ' + salary)
    }    
    else {
        var tax = sal * 0.3
        var salary = sal - (sal * 0.3)
        alert('THuế thu nhập là: ' + tax)
        alert('Luong ròng là: ' + salary)
    }
}

caculateSalary()