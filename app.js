

//dom
const imgEl = document.querySelector('.dog-img')
const button = document.querySelector('button')
const breads = document.getElementById('breads')

const base_url = 'https://dog.ceo/api'


const api = {
    list_all_breads: '/breeds/list/all',
}

button.onclick = () => {
    button.innerText = 'kutup tur'
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            return response.json()
        })
        .then((dog) => {
            button.innerText = 'fetch random dog'
            console.log(dog);
            imgEl.src = dog.message

        })
}


function getAllDogBreads() {
    fetch(base_url + api.list_all_breads)
        .then((res) => res.json())
        .then((all_breads) => {
            console.log(all_breads);
            const breadlist = Object.keys(all_breads.message)
            console.log(breadlist);
            breads.innerHTML = breadlist.map(name => {
                return `<button>${name}</button>`
            }).join('')
            document.querySelectorAll('#breads button')
                .forEach(btn => {
                    btn.onclick = () => {
                        console.log(btn.innerText);

                    }
                })
        })
}
getAllDogBreads();
