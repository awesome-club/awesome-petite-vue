import { createApp } from 'https://unpkg.com/petite-vue?module'

createApp({
  $delimiters: ['${', '}'],
  isAdded: false,
  dark: false,
  toggled: false,
  qty: 1,
  cart: [],
  color: "red",

  get cartSize() {
    return this.cart
      .map(it => it.qty)
      .reduce((a, b) => a + b, 0);
  },

  get isCartEmpty() {
    return this.cart.length === 0;
  },

  addProduct(product, qty, color) {
    this.cart.push({
      qty: qty ? parseInt(qty) : 1,
      color: color ?? "",
      name: product,
    })
  },

  changeColor(color) {
    this.color = color;
  },

  toggleDark() {
    this.dark = !this.dark;
  },

  toggle() {
    this.toggled = !this.toggled;
  },

  onMounted() {
    console.log("Mounted!");
  }
}).mount("#app")
