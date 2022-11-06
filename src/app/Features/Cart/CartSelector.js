import { createSelector } from "@reduxjs/toolkit";

export const cartsItem = (state) => state.carts.carts;

//count total cart prouduct quantity
export const totalCartItem = createSelector(cartsItem, (items) => {
  //items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  let total = 0;
  if (items) {
    items.map((i) => (total += i.quantity));
  }
  return total;
});

//calculate subtotal proudct price
export const subTotalPrice = createSelector(cartsItem, (items) => {
  let total = 0;
  if (items) {
    items.map((i) => (total += i.price * i.quantity));
  }
  return total.toFixed(2);
});
//calculate tax to purchase item
//if the purchase ammount is 300$ or more then include 2% tax
export const totalTax = createSelector(subTotalPrice, (tax) =>
  (tax * (2 / 100)).toFixed(2)
);

//count total cart price including tax
export const totalPrice = createSelector(
  subTotalPrice,
  totalTax,
  (subtotal, tax) => parseFloat(subtotal) + parseFloat(tax)
);
