var WeaponView = Backbone.View.extend({

  className: "weapons", 

  tagName: "button",

  template: _.template('<img src="<%= img %>">'),

  initialize: function(){
    this.render();
  },

  events: {
    'click': function(){
      this.model.select();
    }
  },

  render: function(){
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
  }

})