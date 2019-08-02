/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();
var ubvSelector = document.getElementById('ubv');
var tcSelector = document.getElementById('tc');
var rroeSelector = document.getElementById('rroe');
var jsSelector = document.getElementById('js');
var wsjfCalc = document.getElementById('wsjf');
var warning = document.getElementById('warning');



document.getElementById('save').addEventListener('click', function(){
  return t.set('card', 'shared', 'ubv', ubvSelector.value)
  .then(function(){
    return t.set('card', 'shared',  'tc', tcSelector.value)
  })
  .then(function(){
    return t.set('card', 'shared',  'rroe', rroeSelector.value)
  })
  .then(function(){
    return t.set('card', 'shared',  'js', jsSelector.value)
  })
  .then(function(){
    
    var wsjfval = ((ubvSelector.value+tcSelector.value+rroeSelector.value)/jsSelector.value)
    return t.set('card', 'shared',  'wsjf', (wsjfval/10).toFixed(2)); //(parseFloat(Math.round(wsjfval) * 100) / 10000).toFixed(2))
  
  })
  .then(function(){
   
   
     t.closePopup();
  });
});

var wsjf = 0;

t.render(function(){
  return Promise.all([
    t.get('card', 'shared', 'ubv'),
    t.get('card', 'shared', 'tc'),
    t.get('card', 'shared', 'rroe'),
    t.get('card', 'shared', 'js'),
    t.get('card', 'shared', 'wsjf'),
    
    ])
  .spread(function(savedUbv, savedTc, savedRroe, savedJs, savedWsjf){
    
     ubvSelector.value = savedUbv;
     tcSelector.value = savedTc;
     rroeSelector.value = savedRroe;
     jsSelector.value = savedJs;
     wsjfCalc.innerHTML = savedWsjf; 
    
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

