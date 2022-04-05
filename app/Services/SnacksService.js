import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";


class SnacksService {

  purchaseSnack(name){
    let purchasedSnack = ProxyState.snacks.find(s => s.name == name)
    console.log("purchasedSnack", purchasedSnack);
    if(purchasedSnack.price <= ProxyState.money && purchasedSnack.qty > 0){
      ProxyState.money -= purchasedSnack.price 
      purchasedSnack.qty--
    }
    if(purchasedSnack.price > ProxyState.money){
      alert("Ew a poor")
    }
    if(purchasedSnack.qty == 0){
      alert('Item Sold Out')
    }

  }
  addSnack() {
    ProxyState.snacks = [...ProxyState.snacks, new Snack({ title: Math.random() })]
  }
  destroySnack(name) {
    const selectedSnack = ProxyState.snacks.find(s => s.name == name)
        // ProxyState.snacks.splice(selectedSnack) = [...ProxyState.snacks]
        let snackIndex = ProxyState.snacks.findIndex(s => s.name == name)
        ProxyState.snacks.splice(snackIndex, 1)
        console.log("destroy button in services", selectedSnack);
  }
}

export const snacksService = new SnacksService();

