let close = document.getElementById('close')
let imgDeit = document.getElementById('imgDeit')
let genreGame = document.getElementById('genreGame')
let titleGame = document.getElementById('titleGame')
let platformGame = document.getElementById('platformGame')
let statusGame = document.getElementById('statusGame')
let descriptionGame = document.getElementById('descriptionGame')
let linkGame = document.getElementById('linkGame')
let load = document.getElementById('load')
let cattt = document.getElementById('cattt')








close.addEventListener('click',()=>{
    document.getElementById('section').classList.replace('d-none','d-block')
    document.getElementById('deities').classList.replace('d-block','d-none')
})
document.addEventListener("keydown", (e)=> {
    if (e.key=="Escape") {
        document.getElementById('section').classList.replace('d-none','d-block')
    document.getElementById('deities').classList.replace('d-block','d-none')
    }
})




class GameDeities {
    constructor(data) {
        this.data=data
        console.log(this.data);
        imgDeit.setAttribute('src',this.data.thumbnail)
        titleGame.innerHTML = this.data.title
        genreGame.innerHTML = this.data.genre
        platformGame.innerHTML = this.data.platform
        statusGame.innerHTML = this.data.status
        descriptionGame.innerHTML = this.data.description
        linkGame.setAttribute('href', this.data.freetogame_profile_url)
        }
    }

    



 export class GetDeities {
    async deities(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e80c744b97msh31ff09a6eaa9a22p133fe0jsnba6cab6bf616',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        load.classList.remove('d-none')
        cattt.classList.add('d-none')

        
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options);
	    let result = await data.json();
        new GameDeities(result)
        load.classList.add('d-none')
        cattt.classList.remove('d-none')


        
        

    }
}






