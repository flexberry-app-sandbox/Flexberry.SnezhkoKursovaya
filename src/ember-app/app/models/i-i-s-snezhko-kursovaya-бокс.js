import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БоксMixin
} from '../mixins/regenerated/models/i-i-s-snezhko-kursovaya-бокс';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БоксMixin, Validations, {
});

defineProjections(Model);

export default Model;
