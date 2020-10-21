calPostage = (postage) => {
    var a = 25000
    var b = prompt('Nhập số phút gọi điện thoại: ')
    if (b == 0) {
        alert('Cước điện thoại bạn sử dụng là: ' + a)
    }
    else if (b > 0 && b <= 50) {
        var c = a + b*600
        alert('Cước điện thoại bạn sử dụng là: ' + c)
    }
    else if (b >50 && b <= 200) {
        var c = a + 50*600 + (b - 50) * 400
        alert('Cước điện thoại bạn sử dụng là: ' + c)
    }
    else if (b > 200) {
        var c = a + 50*600 + 150 * 400 + (b-200)*200
        alert('Cước điện thoại bạn sử dụng là: ' + c)
    }
}
calPostage()