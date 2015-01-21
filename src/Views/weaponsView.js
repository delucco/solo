var WeaponsView = Backbone.View.extend({

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(
      this.collection.map(function(weapon){
        return new WeaponView({model: weapon}).$el;
      }));
    $('body').append(this.$el);

  }

})