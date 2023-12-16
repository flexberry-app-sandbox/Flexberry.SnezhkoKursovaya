import {
  defineNamespace,
  defineProjections,
  Model as АвтомобильMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-kursovaya-автомобиль';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АвтомобильMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
