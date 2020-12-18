const tagsEl = document.querySelector('.tags')

const textarea = document.querySelector('.textarea')
console.log(textarea)

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter') {
        highlightRandom();
    }
})

function createTags(input) {

    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag');
        tagEl.innerText = tag

        tagsEl.appendChild(tagEl)
    })

    console.log(tags)
}

function highlightRandom ()  {
    const times = 30;
    
    const interval = setInterval(() => {
        const tag = pickRandomTag()
        highlightTag(tag)
        setTimeout(() => {
            unhighlightTag(tag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const tag = pickRandomTag()
            highlightTag(tag)
        },100)
    }, times * 100)
}

const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

const highlightTag = (tag) => {
    tag.classList.add('highlight')
}
const unhighlightTag = (tag) => {
    tag.classList.remove('highlight')
}

