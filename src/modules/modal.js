import { animate } from "./helpers"

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popup = document.querySelector('.popup')
    const content = popup.querySelector('.popup-content')


    function showModal() {
        popup.style.display = 'block'
        if (window.screen.availWidth > 767) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    content.style.opacity = progress
                }
            })
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modal.style.display = 'block'
            showModal()

        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'

        }
    })

}

export default modal