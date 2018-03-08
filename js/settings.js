var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var showSelector = document.getElementById('show');


t.render(function(){
  return Promise.all([
    t.get('board', 'shared', 'show'),
    
  ])
  
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  
    return t.set('board', 'shared', 'show', showSelector.value);
  })
  .then(function(){
    t.closePopup();
  })

