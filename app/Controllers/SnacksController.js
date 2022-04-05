import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let snacks = ProxyState.snacks;
  let cardsTemplate = ''
  snacks.forEach(s => cardsTemplate += s.CardTemplate)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3"> 
    <span class="fs-2">Your Wallet: $${ProxyState.money}</span>
    <div class="snacks d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}

{/* <button class="btn btn-secondary text-white elevation-2" onclick="app.snacksController.addValue()">Add Value</button>  */}


//Public
export class SnacksController {
  constructor() {
    ProxyState.on("snacks", _draw);
    _draw()
  }

purchaseSnack(name){
  snacksService.purchaseSnack(name)
  _draw()
}

  addValue() {
    snacksService.addSnack()
  }

  async destroySnack(name) {
    const yes = await Pop.confirm('Remove Snack')
    if (yes) {
      snacksService.destroySnack(name)
      _draw()
    }
  }

}
