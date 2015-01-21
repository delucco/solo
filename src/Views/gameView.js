var GameView = Backbone.View.extend({

  template: _.template(
    '<h1><%= winner.get("action") %></h1><div class="matches <%= player.get("class") %>">YOU<img src="<%= player.get("img") %>"></div><div class="matches">VS<img src="<%= opponent.get("img") %>"></div>'),

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
