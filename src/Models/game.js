var Game = Backbone.Model.extend({

  initialize: function(params){
    this.set('options', params.options);
    this.set('player', new Weapon());
    this.set('opponent', new Weapon());
    this.set('winner', new Weapon());

    this.get('options').on('selected', function(player){
      this.set('player', player);
      this.set('opponent', new Weapon(choices[0][Math.floor(Math.random()*3)]));
      this.matchUp(this.get('player'), this.get('opponent'));
    }, this);
  },

  matchUp: function(player, opponent){

    var A = player.get('tool');
    var B = opponent.get('tool');

    if (((A == 0) && (B == 1)) || ((A == 1) && (B == 2)) || ((A == 2) && (B == 0))) {
      this.get('player').set('class', 'win');
      this.set('winner', player);
    } else if (A == B) {
      this.get('player').set('class', 'tie');
      this.set('winner', new Weapon({action: "Its a TIE!"}));
    } else {
      this.get('player').set('class', 'lose');
      this.set('winner', opponent);
    }
  }

})