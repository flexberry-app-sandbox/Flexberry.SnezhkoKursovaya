import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-kursovaya-состав-заказа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставЗаказаMixin, Validations, {
});

defineProjections(Model);

export default Model;
