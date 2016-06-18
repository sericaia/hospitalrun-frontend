import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import Ember from 'ember';

export default AbstractEditController.extend({
  title: 'Preferences',
  updateButtonText: 'Update',
  afterUpdate: function() {
    this.send('closeModal');
  },
  actions: {
    cancel: function() {
      this.send('closeModal');
    },
    update: function() {
      this.saveModel(false);
    }
  }
});
