import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-snezhko-kursovaya-единицы'),
  количество: DS.attr('number'),
  детали: DS.belongsTo('i-i-s-snezhko-kursovaya-детали', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-snezhko-kursovaya-услуга', { inverse: 'составУслуги', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-состав-услуги.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-состав-услуги.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  детали: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-состав-услуги.validations.детали.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-состав-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставУслугиE', 'i-i-s-snezhko-kursovaya-состав-услуги', {
    детали: belongsTo('i-i-s-snezhko-kursovaya-детали', 'Наименование', {
      наименование: attr('Наименование', { index: 0, hidden: true })
    }, { index: 3, hidden: true }),
    количество: attr('Количество', { index: 1 }),
    единицы: attr('Единицы', { index: 2 })
  });
};
