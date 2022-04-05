// import { generateId } from "../Utils/generateId.js"

export class Snack {
  constructor(name, price, img, qty) {
    // this.id = generateId()
    this.name = name,
    this.price = price,
    this.img = img,
    this.qty = qty
  }

  get CardTemplate() {
    return /*html*/`
    <div class="col-4">
      <div style="min-height: 100%;" class="card m-2 shadow">
        <div class="card-body d-flex flex-column justify-content-between">
        <button onclick="app.snacksController.destroySnack('${this.name}')" class="btn btn-danger">Destroy</button>
         <img class="img-fluid" style="max-width: 100%; max-height: 75%;" src=${this.img}>
          <h4 class="text-uppercase no-select">
            ${this.name}
          </h4>
          <div class="d-flex justify-content-evenly fs-4 fw-bold"><span>$${this.price}</span> <span>${this.qty} in stock</span></div>
        </div>
        <button class="btn btn-success square-top" onclick="app.snacksController.purchaseSnack('${this.name}')">Purchase</button>
      </div>
    </div>
    `
  }
}
