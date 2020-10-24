//multiply number vs 1 to 10

const multiplyNum = num => {
    console.log('In bang nhan:')
    for (let i = 1; i < 11; i++) {
        console.log(num + ' x ' + i + ' = ' + ' ' + num * i)
    }
}

//find even number

const findEvenNum = num => {
    if (num >=1 && num <=30) {
        for (let i = 1; i < 31; i++) {
            if (i % 2 === 0) {
                console.log(i)
            }
            if (i >= num) break
        }
    } else {
        console.log('Bạn cần nhập số từ 1 đến 30')
    }
}

//sum number

const sumNum = num => {
    if (num >=1 && num <=30) {
        let sum = 0
        for (let i = 1; i < 31; i++) {
            sum += i
            if (i >= num) break
        }
        console.log(sum)
    } else {
        console.log('Bạn cần nhập số từ 1 đến 30')
    }
}

// caculate factorial number

const calculateFactorialNum = num => {
    if (num >=1 && num <=30) {
        let factorial = 1
        for (let i = 1; i < 31; i++) {
            factorial *= i
            if (i >= num) break
        }
        console.log(factorial)
    } else {
        console.log('Bạn cần nhập số từ 1 đến 30')
    }
}

// count even number for array

const countEvenNumForArr = Array => {
    let count = 0
    Array.forEach(item => {
        if(item % 2 === 0) {
            count++
        }
    })
    console.log(count)
}

// delete duplicate

const deleteDuplicate = arr => {
    let checkForSurvival = (arr, item) => arr.indexOf(item) > -1
    let arrNew = []
    arr.forEach(element =>{
        if (!checkForSurvival (arrNew, element)) arrNew.push(element)
    })
    return arrNew
}

//groupp arr
const groupArrStudent = () => {
    const studentNames = [
        { id: 1, name: 'Nguyễn Thị Tèo' },
        { id: 2, name: 'Phạm Văn Bưởi' },
        { id: 3, name: 'Hoàng Văn Nam' },
        { id: 4, name: 'Vũ Ngọc Duy' },
        { id: 5, name: 'Nguyễn Minh Nhật' },
        { id: 6, name: 'Phí Duy Quân' },
        { id: 7, name: 'Trần Minh Minh' }
    ]
    const studentScores = [
        { id: 1, score: 9.2 },
        { id: 2, score: 2.3 },
        { id: 3, score: 3.7 },
        { id: 4, score: 6.9 },
        { id: 5, score: 5.2 },
        { id: 6, score: 9.6 },
        { id: 7, score: 6.1 }
    ]
    const students = []
    studentNames.forEach( studentName => {
        studentScores.forEach ( studentScore => {
            if (studentName.id === studentScore.id) {
                students.push(
                Object.assign (studentName, studentScore)
                )
            }
        })
    })
    for(let key in students) {
    if (students.hasOwnProperty(key)){
        console.log(students[key])
    }
    }
}

// the best and the bad in score

const findBestAndBad = () => {
    const students = [
        { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
        { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
        { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
        { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
        { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
        { id: 6, name: 'Phí Duy Quân', score: 9.6 },
        { id: 7, name: 'Trần Minh Minh', score: 6.1 }
    ]
    students.sort((min,max) => {
        return max.score - min.score
    })
    console.log('theBest: ', students[0])
    console.log('theBad: ', students[students.length - 1])
}
