import  HungryBear  from './../src/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });
});

// With Jasmine Clock, we need to set up the clock before each test and then tear it down after each test, 
// so we add a beforeEach() and afterEach() block where we install and then uninstall the clock.
// Once the clock is installed, we have access to the tick() helper method. Each tick is a millisecond, 
// so when we call jasmine.clock().tick(3001);, that means just over three seconds have passed. When fuzzy is created, 
// he should have a foodLevel of 10. After three seconds, fuzzy’s foodLevel should be down to 7.