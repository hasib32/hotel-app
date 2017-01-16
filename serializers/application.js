import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.users = payload.data;
    delete payload.data;
    
    return this._super(...arguments);
  }
});
