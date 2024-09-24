
import { GetDeities } from "./deities.js";

    
let display = document.getElementById('display')


export class DataProduct {
    constructor(oop) {
        this.data = oop
        console.log(this.data,'done6');
        let box ="" ;
        for (let i = 0; i < this.data.length; i++) {
            console.log(this.data.length);
box+=`

<div id="cool" class="col-md-3">
            <div id="joo${i}" class="layer rounded-3 mx-2">
                <div class="img-game mx-3 my-2 ">
                <img class="w-100 my-2" src="${this.data[i].thumbnail}" alt="gameImg">
                <div class="button-free d-flex justify-content-between align align-items-center mt-2">
                    <p class="text-white">${this.data[i].title}</p>
                    <button class="btn btn-primary d-flex justify-content-center align-items-center "><span>Free</span></button>
                </div>
                <div class="description text-center" >
                <p class="text-white-50  ">${this.data[i].short_description}</p>
                </div>
                </div>
                <div class="footer pt-2 rounded-bottom-3 border-top border-secondary border-opacity-75 mt-4 mb-0 w-100 d-flex justify-content-between align-items-center">
                   <p class="loggo mb-2 rounded-3 ms-3 text-center">${this.data[i].genre}</p>
                   <p class="loggo mb-2 rounded-3 me-3 text-center">${this.data[i].platform}</p>
                </div>
            </div>
        </div>
`
            
        }
        display.innerHTML = box
      
        for (let i = 0; i < this.data.length; i++) {
            let productElement = document.getElementById(`joo${i}`);
            productElement.addEventListener('click', () => {

                document.getElementById('section').classList.replace('d-block','d-none')
                document.getElementById('deities').classList.replace('d-none','d-block')

                GetDeities.prototype.deities(this.data[i].id)

            })
        }
        
       
    }
}
