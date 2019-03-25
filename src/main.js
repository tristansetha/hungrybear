import './styles.css';
import $ from 'jquery';
import  HungryBear  from './hungrybear.js';


$(document).ready(function(){
  $('#hangryBearImage').hide()
  $('#bearJustAteYouImage').hide()
  $('#happySatiatedBearImage').hide()
  let name = "Grizzly";
  let newHungryBear = new HungryBear(name);
  newHungryBear.setHunger();
  setInterval(function(){
    if (newHungryBear.didYouGetEaten() == false){
      $('#foodLevel').text(newHungryBear.foodLevel);
    } else {
      newHungryBear.clearInterval();
    }

    if (0 < newHungryBear.foodLevel && newHungryBear.foodLevel <= 5) {
      $('#happySatiatedBearImage').hide();
      $('#hangryBearImage').show();
      $('#bearLabel').text("Bear is hungry");
    } else if (newHungryBear.foodLevel == 0) {
      $('#hangryBearImage').hide();
      $('#happySatiatedBearImage').hide();
      $('#bearJustAteYouImage').show();
      $('#bearLabel').text("Bear is just ate you");
    } else {
      $('#bearJustAteYouImage').hide();
      $('#hangryBearImage').hide();
      $('#happySatiatedBearImage').show();
      $('#bearLabel').text("Bear is happy");
    }
  }, 1000);
  
  $('#run').submit(function(event){
    event.preventDefault();
    newHungryBear.feed();
  });
});