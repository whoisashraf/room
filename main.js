// navbar
const close_btn = document.querySelector('.close-btn')
const open_btn = document.querySelector('.open-btn')
const nav = document.querySelector('.nav-bar')
const nav_bar = document.querySelector('.nav-bar-main')
open_btn.addEventListener('click', () => {
    nav_bar.classList.remove('hidden')
    nav_bar.classList.add('flex')
    nav.classList.add('bg-white', 'lg:bg-transparent')
})
close_btn.addEventListener('click', () => {
    nav_bar.classList.add('hidden')
    nav_bar.classList.remove('flex')
    nav.classList.remove('bg-white')


})

// image slider
const prev_btn = document.querySelectorAll('.prev-btn')
const next_btn = document.querySelectorAll('.next-btn')
const slider = document.querySelector('.silder')
const slider_mobile = document.querySelector('.silder-mobile')
const slider_head = document.querySelector('.slider-head')
const slider_text = document.querySelector('.slider-text')
// assets
const slide = [
    {
        slide: "1",
        src_mobile: new URL("images/mobile-image-hero-1.jpg", import.meta.url),
        src: new URL("images/desktop-image-hero-1.jpg", import.meta.url),
        head: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        slide: "2",
        src_mobile: new URL("images/mobile-image-hero-2.jpg", import.meta.url),
        src: new URL("images/desktop-image-hero-2.jpg", import.meta.url),
        head: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        slide: "3",
        src_mobile: new URL("images/mobile-image-hero-3.jpg", import.meta.url),
        src: new URL("images/desktop-image-hero-3.jpg", import.meta.url),
        head: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
// slide!!
let current_slide = 0
slider.src = slide[(current_slide)].src
slider_mobile.src = slide[(current_slide)].src
slider_head.textContent = slide[(current_slide)].head
slider_text.textContent = slide[(current_slide)].text
function update_slide(param) {
    slider.src = slide[param].src
    slider_mobile.src = slide[param].src
    slider_head.textContent = slide[param].head
    slider_text.textContent = slide[param].text
    // console.log(current_slide)

}
next_btn.forEach((next_btn) => {
    next_btn.addEventListener('click', () => {
        if (current_slide < (slide.length - 1)) {
            current_slide++
            update_slide(current_slide)
        } else if (current_slide === (slide.length - 1)) {
            current_slide = -1
            current_slide++
            update_slide(current_slide)
        }
    })
})
prev_btn.forEach((prev_btn) => {
    prev_btn.addEventListener('click', () => {
        if (current_slide > 0) {
            current_slide--
            update_slide(current_slide)
        } else if (current_slide <= 0) {
            current_slide = slide.length
            current_slide--
            update_slide(current_slide)
        }
    })
})