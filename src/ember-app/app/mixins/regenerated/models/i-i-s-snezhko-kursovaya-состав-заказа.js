import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  услуга: DS.belongsTo('i-i-s-snezhko-kursovaya-услуга', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-snezhko-kursovaya-заказ', { inverse: 'составЗаказа', async: false })
});

export let ValidationRules = {
  услуга: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-состав-заказа.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-состав-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставЗаказаE', 'i-i-s-snezhko-kursovaya-состав-заказа', {
    услуга: belongsTo('i-i-s-snezhko-kursovaya-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 1, hidden: true }),
      цена: attr('Цена', { index: 2 })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
