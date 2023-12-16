import {
  defineNamespace,
  defineProjections,
  Model as ДеталиMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-kursovaya-детали';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДеталиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
