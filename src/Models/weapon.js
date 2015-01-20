var Weapon = Backbone.Model.extend({

  initialize: function(){
    // this.set({selected: false});
  },

  defaults: {
    tool: Math.floor(Math.random()*3),
    action: '',
    img: 'images/cowboy.png'
  },

  select: function(){
    //this.set({selected: true});
    this.trigger('selected', this);
  }

});

