/*
You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price, p dollars. However, 
they are planning to have the seasonal Halloween Sale next month in which you
can buy games at a cheaper price. Specifically, the first game you buy during
the sale will be sold at p dollars, but every subsequent game you buy will be sold 
at exactly  dollars less than the cost of the previous one you bought. 
This will continue until the cost becomes less than or equal to  dollars, 
after which every game you buy will cost m dollars each.

For example, if p = 20, d = 3  and m =6 , then the following are the costs
of the first 11 games you buy, in order: 20, 17, 14, 11, 8, 6, 6, 6, 6, 6, 6

You have s dollars in your Mist money in wallet. How many games can you buy during the Halloween Sale?
*/

function howManyGames(p, d, m, s) {
  // gamesBought = 0
  let gamesBought = 0;

  // not enough to buy any games at all
  if (s < p) {
    return gamesBought;
  }

  // while enough money in wallet
  while (s >= 0) {
    // buy game (increase gamesBought)
    gamesBought += 1;
    // subtract price from money in wallet
    s -= p;
    // subtract discount amount from price (new price)
    p -= d;

    // not enough money to buy any more games
    if (p > s) return gamesBought;

    // if price <= cheapest price
    if (p <= m) {
      // divide money in wallet by cheapest price
      let gamesCheapestPrice = Math.floor(s / m);
      // add whole number from quotient to gamesBought
      gamesBought += gamesCheapestPrice;

      //return gamesBought
      return gamesBought;
    }
  }
}
