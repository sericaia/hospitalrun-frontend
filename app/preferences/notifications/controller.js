import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import Ember from 'ember';

export default AbstractEditController.extend({
  title: 'Preferences',
  actions: {
    cancel: function() {
      this.send('closeModal');
    },
  },
});
