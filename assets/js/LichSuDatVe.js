const element_types = document.querySelectorAll('.element_type')
const filter_button = document.querySelectorAll('#filter_button .btn')

Array.from(element_types).forEach((ele) => {
    if (ele.dataset.item === 'current') {
        ele.style.display = 'block'
    }
    else {
        ele.style.display = 'none'
    }
})

Array.from(filter_button).forEach((element) => {
    element.addEventListener('click', (event) => {
        for (let i = 0; i < filter_button.length; i += 1) {
            filter_button[i].classList.remove('active')
        }
        element.classList.add('active')

        let name_filter = element.dataset.filter

        Array.from(element_types).forEach((ele) => {
            if (ele.dataset.item === name_filter) {
                ele.style.display = 'block'
            }
            else {
                ele.style.display = 'none'
            }
        })
    })
})