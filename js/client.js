console.log('here');

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';
var GREY_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717';
var WHITE_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182';

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			icon: BLACK_ROCKET_ICON,
			text: 'WSJF',
      callback: function(t) {
        return t.popup({
          title: "WSJF",
          url: 'estimate.html',
        });
      }
		}];
	},
  'card-badges': function(t, options) {
    return t.get('card', 'shared',  'wsjf')
    .then(function(wsjf) {
      return [{
        icon:  WHITE_ROCKET_ICON,
         text: wsjf  || 'No WSJF!',
        color: wsjf ? 'green' : 'red',
    }];
  });
          },
   'card-detail-badges': function(t, options) {
    return t.get('card', 'shared',  'wsjf')
    .then(function( wsjf) {
      return [{
        title: 'WSJF',
        text: wsjf  || 'No WSJF!',
        color: wsjf ? 'green' : 'red',
        callback: function(t) {
          return t.popup({
            title: "WSJF",
            url: 'estimate.html',
          });
        }
      }]
    });
  },
  'show-settings': function(t, options){
    // when a user clicks the gear icon by your Power-Up in the Power-Ups menu
    // what should Trello show. We highly recommend the popup in this case as
    // it is the least disruptive, and fits in well with the rest of Trello's UX
    return t.popup({
      title: 'Custom Fields Settings',
      url: './settings.html',
      height: 184 // we can always resize later
    });
  }
          
});
