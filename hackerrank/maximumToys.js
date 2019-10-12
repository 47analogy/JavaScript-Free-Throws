/* Mark and Jane are very happy after having their first child. Their son loves toys,
so Mark wants to buy some. There are a number of different toys lying in front of him,
tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize
the number of toys he buys with this money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy ?
For example, if prices = [1, 2, 3, 4] and Mark has k = 7 to spend, he can buy items
[1, 2, 3] for 6, or [3, 4] for 7 units of currency.He would choose the first group of 3 items.
*/

function maximumToys (prices, k) {
  let numOfToys = 0
  let moneyLeft = k

  // while moneyLeft > 0
  while (moneyLeft > 0) {
    let lowestPrice = Math.min(...prices)
    // if lowestPrice <  moneyLeft
    if (lowestPrice < moneyLeft) {
      // increase numOfToys by 1
      numOfToys += 1
      // subtract lowestPrice from moneyLeft
      moneyLeft -= lowestPrice
      // remove lowestPrice from array
      prices.splice(prices.indexOf(lowestPrice), 1)
      // else
    } else {
      // return numOfToys
      return numOfToys
    }
  }
}
