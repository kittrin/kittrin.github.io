const slides = document.querySelectorAll('.slide')

// const kit0 = 'https://images.wallpaperscraft.ru/image/single/kot_morda_agressiya_vzglyad_56702_3072x2035.jpg'
// const kit1 = 'https://images.wallpaperscraft.ru/image/single/kot_morda_ispug_polosatyy_vzglyad_53497_3840x2400.jpg'
// const kit2 = 'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-ryzhih-kotov-9.jpg'
// const kit3 = 'https://img.joinfo.com/i/2018/06/800x0/5b30ce1e882dc.jpg'
// const kit4 = 'https://famt.ru/wp-content/uploads/2019/05/sonnik-govoryaschiy-kot.jpg'

//const imageSlide = [kit0, kit1, kit2, kit3, kit4]

let kit0 = {
    adress: 'https://images.wallpaperscraft.ru/image/single/kot_morda_agressiya_vzglyad_56702_3072x2035.jpg',
    text: 'ANGER'
}
let kit1 = {
    adress: 'https://images.wallpaperscraft.ru/image/single/kot_morda_ispug_polosatyy_vzglyad_53497_3840x2400.jpg',
    text: 'ALERTNESS'
}
let kit2 = {
    adress: 'https://proprikol.ru/wp-content/uploads/2020/12/kartinki-ryzhih-kotov-9.jpg',
    text: 'LUCK'
}
let kit3 = {
    adress: 'https://img.joinfo.com/i/2018/06/800x0/5b30ce1e882dc.jpg',
    text: 'FUNNY'
}
let kit4 = {
    adress: 'https://famt.ru/wp-content/uploads/2019/05/sonnik-govoryaschiy-kot.jpg',
    text: 'CUTE'
}
let kit5 = {
    adress: 'https://w-dog.ru/wallpapers/6/1/357873493962558/kot-ryzhij-zevaet-imbir.jpg',
    text: 'kit6'
}
let kit6 = {
    adress:'https://funik.ru/wp-content/uploads/2018/12/1ad7a412cc9e09dd7b22.jpg',
    text: 'kit7'
}
let kit7 = {
    adress: 'https://avatars.mds.yandex.net/get-zen_doc/4761941/pub_601e79a753bb652e6a3a2316_601e7c0753bb652e6a3e7233/scale_1200',
    text: 'kit8'
}
let kit8 = {
    adress: 'https://4tololo.ru/sites/default/files/images/20142009140355.jpg',
    text: 'kit9'
}
let kit9 = {
    adress: 'https://fanibani.ru/wp-content/uploads/2021/07/top3000d.jpg',
    text: 'kit10'
}

const imageSlide = [kit0, kit1, kit2, kit3, kit4, kit5, kit6, kit7, kit8, kit9]


slides.forEach((slide, idx) => {
    slide.querySelector('h3').textContent = imageSlide[idx].text
    slide.style.backgroundImage = `url(${imageSlide[idx].adress})` 
})

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearClass()
        slide.classList.add('active')
    })
}

function clearClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

