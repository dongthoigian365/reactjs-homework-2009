calPerCommission = (sales) => {
    var sales = prompt('Nhập doanh số bán được: ')
    if (sales <= 100000000) {
        alert('Số hoa hồng bạn nhận được là: ' + sales*0.05)
    }
    else if (sales > 100000000 && sales <= 300000000) {
        alert('Số hoa hồng bạn nhận được là: ' + sales*0.1)  
    }
    else if (sales > 300000000) {
        alert('Số hoa hồng bạn nhận được là: ' + sales*0.2)
    }
}
calPerCommission()