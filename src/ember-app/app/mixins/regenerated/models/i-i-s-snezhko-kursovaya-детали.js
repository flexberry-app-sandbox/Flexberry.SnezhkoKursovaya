import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодДетали: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.attr('string'),
  страна: DS.attr('string')
});

export let ValidationRules = {
  кодДетали: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-детали.validations.кодДетали.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-детали.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-детали.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  страна: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-детали.validations.страна.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДеталиE', 'i-i-s-snezhko-kursovaya-детали', {
    кодДетали: attr('Код детали', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: attr('Производитель', { index: 2 }),
    страна: attr('Страна', { index: 3 })
  });

  modelClass.defineProjection('ДеталиL', 'i-i-s-snezhko-kursovaya-детали', {
    кодДетали: attr('Код детали', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    производитель: attr('Производитель', { index: 2 }),
    страна: attr('Страна', { index: 3 })
  });
};
