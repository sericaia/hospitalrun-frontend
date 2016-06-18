import AbstractModel from 'hospitalrun/models/abstract';
import DS from 'ember-data';

export default AbstractModel.extend({
  name: DS.attr('string'),
  receivesNotifications: DS.attr('boolean', { defaultValue: true })
});
