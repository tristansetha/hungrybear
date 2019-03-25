export default class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }


  // When setHunger() is called, it needs to decrement the bear’s food level by 1 every second.
  // Within setHunger(), we utilize a callback to setInterval(). Note the use of fat arrow notation here. 
  // Remember that this doesn’t have lexical scope inside a nested function unless we use arrow notation, 
  // and we don’t want to use the var that = this hack!


  didYouGetEaten() {
    if (this.foodLevel >= 0) {
      return false;
    }
    else
    {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  // didYouGetEatenNotification() {
  //   if (this.didYouGetEaten() == true)
  //   {
  //     return "you got eaten";
  //   }
  //   else if (this.didYouGetEaten() == false)
  //   {
  //     return "feed the bear or get eaten";
  //   }
  // }

  // getEaten() {
  //   if (this.foodLevel <= 0);
  //   {
  //     this.clearInterval();
  //   }
  // }
}
