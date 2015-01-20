var GameView = Backbone.View.extend({

  template: _.template(
    '<img class="matches" src="<%= player.get("img") %>"><h1 class="matches"><%= winner %></h1><img class="matches" src="<%= opponent.get("img") %>">'),

  initialize: function(){
    this.render();
    this.model.on('change', this.render, this);
  },

  render: function(){
    console.log(this.model.attributes);
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
    $('body').append(this.$el);
  }

});
