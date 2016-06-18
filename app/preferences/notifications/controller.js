import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import Ember from 'ember';

export default AbstractEditController.extend({
  title: 'Preferences',
  updateButtonText: 'Update',
  actions: {
    cancel: function() {
      this.send('closeModal');
    },
    afterUpdate: function(record) {
      this.set('model', record);
      this.send('closeModal');
      this.send('update');

      // var model = this.get('model');
      // model.set('receivesNotifications', record.receivesNotifications);
      // this.send('update', true);
      // this.send('closeModal');
    }
  }
});
