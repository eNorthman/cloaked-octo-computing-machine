App = Ember.Application.create();


var posts=[];


App.Router.map(function() {
    this.resource('about');
    this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
    });
    this.resource('dicer');
    this.resource("roll");
});



App.PostsRoute = Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('kaasjes').then(function (data){
            posts = data;
            return data;
        });
    }
});


App.PostRoute = Ember.Route.extend({
    model: function(params) {
        return posts.findBy('id', params.post_id);
    }
});


App.PostController = Ember.ObjectController.extend({
    isEditing: false,
    kaasje: '',

    actions: {
        edit: function() {
            console.debug(this.get("kaasje"));
            this.set('isEditing', true);
        },

        doneEditing: function() {
            console.debug('cmsdcisdjcsidjcsiudj'+this.get("kaasje"));
            console.log('This is a cool place to save our data right?');
            this.set('isEditing', false);
        }
    }
});