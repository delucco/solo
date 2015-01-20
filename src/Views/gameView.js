var GameView = Backbone.View.extend({

  //className: 

  template: _.template(
    '<img class="matches <%= player.get("class") %>" src="<%= player.get("img") %>"><h1 class="matches"><%= winner.get("action") %></h1><img class="matches" src="<%= opponent.get("img") %>">'),

  initialize: function(){
    this.render();
    this.model.on('change', this.render, this);
  },

  render: function(){
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
    $('body').append(this.$el);
  }

});
