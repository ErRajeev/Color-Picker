const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const cyan = document.querySelector('.cyan')
const result = document.querySelector('.result')

const getBgColor = (element) => window.getComputedStyle(element).backgroundColor

const mgColor = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        result.style.backgroundColor = color;
    })
}

mgColor(red, getBgColor(red))
mgColor(blue, getBgColor(blue))
mgColor(green, getBgColor(green))
mgColor(cyan, getBgColor(cyan))
