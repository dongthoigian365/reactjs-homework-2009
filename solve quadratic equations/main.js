solveQuadratic = (a, b , c) => {
    var a = prompt('Nhâp giá trị của a: ')
    var b = prompt('Nhâp giá trị của b: ')
    var c = prompt('Nhâp giá trị của c: ')
    var delta = b*b - 4*a*c
    if (a == 0 && b == 0 && c == 0) {
        alert('Phương trình có vô số nghiệm')
    }
    if (a == 0 && b == 0 && c != 0) {
        alert('Phương trình vô nghiệm')
    }    
    if (a == 0 && b != 0 && c != 0) {
        var x = -c/b
        alert('Phương trình có một nghiệm là: ' + x)
    }
    if (a !=0 && b !=0 && c!=0) {        
        var x1 = (-b+Math.sqrt(delta))/(2*a)
        var x2 = (-b-Math.sqrt(delta))/(2*a)
        if (delta < 0) {
            alert('Phương trình vô nghiệm')
        }
        else {
            alert('Phương trình có 2 nghiệm là: ' + x1 + ' và ' + x2)
        }        
    }
}
solveQuadratic()