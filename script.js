// toggle elimnated class to make opacity 20% for cards when clicked
function toggleEliminated(element) {
    element.classList.toggle('eliminated')
}

// cards array with each character object
let cards = [
    {
        name: 'Sakura',
        image: 'characters_01.jpg'
    }, {
        name: 'Kaede',
        image: 'characters_02.jpg'
    }, {
        name: 'Aya',
        image: 'characters_03.jpg'
    }, {
        name: 'Yuuki',
        image: 'characters_04.jpg'
    }, {
        name: 'Mikoto',
        image: 'characters_05.jpg'
    }, {
        name: 'Ren',
        image: 'characters_06.jpg'
    }, {
        name: 'Ryo',
        image: 'characters_07.jpg'
    }, {
        name: 'Yori',
        image: 'characters_08.jpg'
    }, {
        name: 'Hana',
        image: 'characters_09.jpg'
    }, {
        name: 'Tatsuya',
        image: 'characters_10.jpg'
    }, {
        name: 'Taro',
        image: 'characters_11.jpg'
    }, {
        name: 'Mai',
        image: 'characters_12.jpg'
    }, {
        name: 'Emiko',
        image: 'characters_13.jpg'
    }, {
        name: 'Ayumi',
        image: 'characters_14.jpg'
    }, {
        name: 'Hotaru',
        image: 'characters_15.jpg'
    }, {
        name: 'Haru',
        image: 'characters_16.jpg'
    }, {
        name: 'Kazuya',
        image: 'characters_17.jpg'
    }, {
        name: 'Akria',
        image: 'characters_18.jpg'
    }, {
         name: 'Saki',
        image: 'characters_19.jpg'
    }, {
        name: 'Kazuo',
        image: 'characters_20.jpg'
    }
]

// select a random card for the mystery card
function selectRandomCard() {
    let randomIndex = Math.floor(Math.random() * 20) // create a random index from 0 to 19
    document.querySelector('.mystery-card-img').src = 'images/' + cards[randomIndex].image // change mystery card image to randomly selected card image
    document.querySelector('.mystery-card').querySelector('span').innerHTML = cards[randomIndex].name // change mystery card name to randomly selected card name
}

// call function to change mystery card image
selectRandomCard()

