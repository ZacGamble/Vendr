import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack('Mountain Bull', 2.50, 'https://fmcg-viet.com/wp-content/uploads/2020/04/red-bull-250ml-can-1.jpg', 8),
    new Snack('Red Despot', 4.00, 'https://images.heb.com/is/image/HEBGrocery/003910506', 8),
    new Snack('Flaming Hot Os', 7.00, 'https://sporkful.s3.amazonaws.com/uploads/2021/09/17133508/cheetos-735x488.jpg', 8),
    new Snack('Wheat Disks', 5.00, 'https://static01.nyt.com/images/2014/11/05/dining/05JPHUNGRY8/05JPHUNGRY8-articleLarge-v2.jpg', 5),
    new Snack('Brown Crunch', 6.00, 'https://topsecretrecipes.com/images/product/nestle-crunch-copycat-recipe.jpg', 4),
    new Snack('Pressed Rectangles', 10.00, 'https://assets.epicurious.com/photos/60637186ceabd6ae3d2ebc7f/4:3/w_4136,h_3102,c_limit/CrispyWaffles_HERO_v2_032521_12048_JD_final.jpg', 3)
  ]
money= 100

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
