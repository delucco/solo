var Game = Backbone.Model.extend({

  initialize: function(params){
    this.set('options', params.options);
    this.set('player', new Weapon());
    this.set('opponent', new Weapon());
    this.set('winner', 'PLAY A GAME');

    this.get('options').on('selected', function(player){
      this.set('player', player);
      this.matchUp(this.get('player'), this.get('opponent'));
    }, this);

  },

  matchUp: function(player, opponent){
    var A = player.get('tool');
    var B = Math.floor(Math.random()*3);
    //opponent.get('tool');

    if (((A == 0) && (B == 1)) || ((A == 1) && (B == 2)) || ((A == 2) && (B == 0))) {
      this.set('winner', 'PLAYER WINS');
      console.log('player wins' + B + ' vs ' + A);
    } else if (A == B) {
      this.set('winner', 'TIE');
      console.log('tie! ' + B + ' vs ' + A);
    } else {
      this.set('winner', 'OPPONENT WINS');
      console.log('opponent wins ' + B + ' vs ' + A);
    }
  }

})