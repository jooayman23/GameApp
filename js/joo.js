import { DataProduct } from "./ui.js";

let navClick = document.getElementById('navClick')
let mmorpg = document.getElementById('mmorpg')
let shooter = document.getElementById('shooter')
let sailing = document.getElementById('sailing')
let permadeath = document.getElementById('permadeath')
let superhero = document.getElementById('superhero')
let pixel = document.getElementById('pixel')
let loading = document.getElementById('loading')
class Products {
    constructor(result) {
      this.resultData = result
      new DataProduct(result)
    }
}
export class ProductApi {
    async getData(categoryName){
    
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e80c744b97msh31ff09a6eaa9a22p133fe0jsnba6cab6bf616',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        loading.classList.remove('d-none')
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}` , options);
	    let result = await data.json();

        loading.classList.add('d-none')
      new Products(result)
                                                                
     
    }

}
ProductApi.prototype.getData('mmorpg')
navClick.addEventListener('click', (e)=>{
    ProductApi.prototype.getData(e.target.textContent)
    if (e.target==shooter) {
        mmorpg.classList.remove('active','text-color')
        shooter.classList.add('active','text-color')
        sailing.classList.remove('active','text-color')
        permadeath.classList.remove('active','text-color')
        superhero.classList.remove('active','text-color')
        pixel.classList.remove('active','text-color')

    }else if (e.target==sailing) {
        mmorpg.classList.remove('active','text-color')
        shooter.classList.remove('active','text-color')
        sailing.classList.add('active','text-color')
        permadeath.classList.remove('active','text-color')
        superhero.classList.remove('active','text-color')
        pixel.classList.remove('active','text-color')

    }else if (e.target==permadeath) {
        mmorpg.classList.remove('active','text-color')
        shooter.classList.remove('active','text-color')
        sailing.classList.remove('active','text-color')
        permadeath.classList.add('active','text-color')
        superhero.classList.remove('active','text-color')
        pixel.classList.remove('active','text-color')

    }else if (e.target==superhero) {
        mmorpg.classList.remove('active','text-color')
        shooter.classList.remove('active','text-color')
        sailing.classList.remove('active','text-color')
        permadeath.classList.remove('active','text-color')
        superhero.classList.add('active','text-color')
        pixel.classList.remove('active','text-color')

    }else if (e.target==pixel) {
        mmorpg.classList.remove('active','text-color')
        shooter.classList.remove('active','text-color')
        sailing.classList.remove('active','text-color')
        permadeath.classList.remove('active','text-color')
        superhero.classList.remove('active','text-color')
        pixel.classList.add('active','text-color')

    }else if (e.target==mmorpg) {
        mmorpg.classList.add('active','text-color')
        shooter.classList.remove('active','text-color')
        sailing.classList.remove('active','text-color')
        permadeath.classList.remove('active','text-color')
        superhero.classList.remove('active','text-color')
        pixel.classList.remove('active','text-color')

    }

})



















