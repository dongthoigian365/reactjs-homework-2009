// function enterAge(age) {
//     var age = prompt('Nhập tuổi của bạn:')    
//     if (age <= 0) {
//         alert('Không được nhập nhỏ hơn và bằng 0') 
//     }
//     if (age > 0 && age < 16) {
//         alert('Bạn chưa đủ tuổi để nhập học lớp 10')
//     }
//     if (age = 16) {
//         alert('Bạn đã đủ tuổi để nhập học lớp 10')
//     }    
//     if (age > 16) {
//         alert('Bạn đã quá tuổi để nhập học lớp 10')
//     }
// }

function enterAge(age) {
    var age = prompt('Nhập tuổi của bạn: ')     
    if (age > 16) {
        alert('Bạn đã quá tuổi để nhập học lớp 10')
    }
    else if (age > 0 && age < 16) {
        alert('Bạn chưa đủ tuổi để nhập học lớp 10')
    }
    else if (age == 16) {
        alert('Bạn đã đủ tuổi để nhập học lớp 10')
    }
    else if (age == 0) {
        alert('Không được nhập nhỏ hơn bằng 0 hoặc nhập kí tự')
    }
    else if (age < 0) {
        alert('Không được nhập nhỏ hơn bằng 0 hoặc nhập kí tự')
    }
}

enterAge()