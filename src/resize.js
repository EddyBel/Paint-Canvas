const w = window

const size = 85
const size_two = 95
const size_tree = 70

w.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('drawing_area')
    const containerCanvas = document.querySelector('.conteiner_canvas')

    let widthContainer = containerCanvas.clientWidth
    let heightContainer = containerCanvas.clientHeight

    if (w.innerWidth <= 788) {
        widthCanvas = porcentaje(widthContainer, size_two)
        heightCanvas = porcentaje(heightContainer, size_tree)
    } else {
        widthCanvas = porcentaje(widthContainer, size)
        heightCanvas = porcentaje(heightContainer, size)
    }

    canvas.setAttribute('width', widthCanvas)
    canvas.setAttribute('height', heightCanvas)

    w.addEventListener('resize', () => {

        widthContainer = containerCanvas.clientWidth
        heightContainer = containerCanvas.clientHeight

        // console.log(widthCanvas)
        // console.log(heightCanvas)

        if (w.innerWidth <= 788) {
            widthCanvas = porcentaje(widthContainer, size_two)
            heightCanvas = porcentaje(heightContainer, size_tree)
        } else {
            widthCanvas = porcentaje(widthContainer, size)
            heightCanvas = porcentaje(heightContainer, size)
        }

        canvas.setAttribute('width', widthCanvas)
        canvas.setAttribute('height', heightCanvas)
    })

    function porcentaje(total, porcentaje) {
        return (porcentaje * total / 100)
    }

})
