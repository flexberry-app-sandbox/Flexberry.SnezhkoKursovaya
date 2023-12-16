import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АвтомобильMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-kursovaya-автомобиль';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АвтомобильMixin, Validations, {
});

defineProjections(Model);

export default Model;
