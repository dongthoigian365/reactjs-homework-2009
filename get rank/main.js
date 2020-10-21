getRank = (rank) => {
    var rank = prompt('Nhập giá trị điểm trung bình: ')
    if(typeof(rank)!== 'number' && rank < 0){
        alert('Giá trị nhập vào không hợp lệ')
    }
    else if(rank < 5) {
        alert('Xếp loại hạng F')
    }
    else if(rank >= 5 && rank < 7) {
        alert('Xếp loại hạng C')
    }
    else if(rank >= 7 && rank < 9) {
        alert('Xếp loại hạng B')
    }
    else {
        alert('Xếp loại hạng A')
    }
}
getRank()