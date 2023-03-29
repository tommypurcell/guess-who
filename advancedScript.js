let cards = []

function toggleEliminated(element) {
    element.classList.toggle('eliminated')
}
function selectRandomCard() {
    let randomIndex = Math.floor(Math.random() * 20)
    console.log(randomIndex)
    console.log(cards[randomIndex])
    document.querySelector('.mystery-card-img').src = cards[randomIndex].image
    document.querySelector('.mystery-card').querySelector('span').innerHTML = cards[randomIndex].name
}

let divsArray = document.querySelectorAll('.card')
let imageArray = document.querySelector('.cards').querySelectorAll('img')
let namesArray = []
console.log(imageArray)
for (let i = 0; i < divsArray.length; i++) {
   namesArray[i] = divsArray[i].querySelector('span').innerHTML
   let character = {
        name: divsArray[i].querySelector('span').innerHTML,
        image: imageArray[i].src
   }
   cards[i] = character
}



selectRandomCard()

// Characters Object with each character
let characters = {
    char1: {
        name: 'Sakura',
        image: 'characters_01.jpg'
    },
    char2: {
        name: 'Kaede',
        image: 'characters_02.jpg'
    }, 
    char3: {
        name: 'Aya',
        image: 'characters_03.jpg'
    },
    char4: {
        name: 'Yuuki',
        image: 'characters_04.jpg'
    },
    char5: {
        name: 'Mikoto',
        image: 'characters_05.jpg'
    },
    char6: {
        name: 'Ren',
        image: 'characters_06.jpg'
    },
    char7: {
        name: 'Ryo',
        image: 'characters_07.jpg'
    },
    char8: {
        name: 'Yori',
        image: 'characters_08.jpg'
    },
    char9: {
        name: 'Hana',
        image: 'characters_09.jpg'
    },
    char10: {
        name: 'Tatsuya',
        image: 'characters_10.jpg'
    },
    char11: {
        name: 'Taro',
        image: 'characters_11.jpg'
    },
    char12: {
        name: 'Mai',
        image: 'characters_12.jpg'
    },
    char13: {
        name: 'Emiko',
        image: 'characters_13.jpg'
    },
    char14: {
        name: 'Ayumi',
        image: 'characters_14.jpg'
    },
    char15: {
        name: 'Hotaru',
        image: 'characters_15.jpg'
    },
    char16: {
        name: 'Haru',
        image: 'characters_16.jpg'
    },
    char17: {
        name: 'Kazuya',
        image: 'characters_17.jpg'
    },
    char18: {
        name: 'Akria',
        image: 'characters_18.jpg'
    },
    char19: {
         name: 'Saki',
        image: 'characters_19.jpg'
    },
    char20: {
        name: 'Kazuo',
        image: 'characters_20.jpg'
    }
}

for (let i = 0; i < characters.length; i++) {
    cards[i] = characters[i]
}
console.log(cards)