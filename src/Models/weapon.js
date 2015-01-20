var Weapon = Backbone.Model.extend({

  initialize: function(){
    // this.set({selected: false});
  },

  defaults: {
    tool: '',
    action: 'PLAY A GAME',
    img: 'images/cowboy.png',
    class: ''
  },

  select: function(){
    //this.set({selected: true});
    this.trigger('selected', this);
  }

});

