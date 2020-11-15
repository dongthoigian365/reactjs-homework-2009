const submenu = document.getElementsByClassName('submenu')
const span = document.getElementsByClassName('fas fa-chevron-down')
const show1 = () => {
    if (submenu[0].style.display === 'block') {
        submenu[0].style.display = 'none'
    } else {
        submenu[0].style.display = 'block'
    }
    if (span[0].style.transform === 'rotate(0)'){
        span[0].style.transform = 'rotate(-90deg)'
    } else {
        span[0].style.transform = 'rotate(0)'
    }
    submenu[1].style.display = 'none'
    submenu[2].style.display = 'none'
    submenu[3].style.display = 'none'
    submenu[4].style.display = 'none'
}

const show2 = () => {
    if (submenu[1].style.display === 'block') {
        submenu[1].style.display = 'none'
    } else {
        submenu[1].style.display = 'block'
    }
    if (span[1].style.transform === 'rotate(0)'){
        span[1].style.transform = 'rotate(-90deg)'
    } else {
        span[1].style.transform = 'rotate(0)'
    }
    submenu[0].style.display = 'none'
    submenu[2].style.display = 'none'
    submenu[3].style.display = 'none'
    submenu[4].style.display = 'none'
}

const show3 = () => {
    if (submenu[2].style.display === 'block') {
        submenu[2].style.display = 'none'
    } else {
        submenu[2].style.display = 'block'
    }
    if (span[2].style.transform === 'rotate(0)'){
        span[2].style.transform = 'rotate(-90deg)'
    } else {
        span[2].style.transform = 'rotate(0)'
    }
    submenu[0].style.display = 'none'
    submenu[1].style.display = 'none'
    submenu[3].style.display = 'none'
    submenu[4].style.display = 'none'
}

const show4 = () => {
    if (submenu[3].style.display === 'block') {
        submenu[3].style.display = 'none'
    } else {
        submenu[3].style.display = 'block'
    }
    if (span[3].style.transform === 'rotate(0)'){
        span[3].style.transform = 'rotate(-90deg)'
    } else {
        span[3].style.transform = 'rotate(0)'
    }
    submenu[0].style.display = 'none'
    submenu[1].style.display = 'none'
    submenu[2].style.display = 'none'
    submenu[4].style.display = 'none'
}

const show5 = () => {
    if (submenu[4].style.display === 'block') {
        submenu[4].style.display = 'none'
    } else {
        submenu[4].style.display = 'block'
    }
    if (span[4].style.transform === 'rotate(0)'){
        span[4].style.transform = 'rotate(-90deg)'
    } else {
        span[4].style.transform = 'rotate(0)'
    }
    submenu[0].style.display = 'none'
    submenu[1].style.display = 'none'
    submenu[2].style.display = 'none'
    submenu[3].style.display = 'none'
}
