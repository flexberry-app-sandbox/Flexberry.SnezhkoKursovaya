import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительностьМин: DS.attr('number'),
  кодУслуги: DS.attr('number'),
  наименование: DS.attr('string'),
  цена: DS.attr('decimal'),
  составУслуги: DS.hasMany('i-i-s-snezhko-kursovaya-состав-услуги', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительностьМин: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-услуга.validations.длительностьМин.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодУслуги: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-услуга.validations.кодУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-услуга.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составУслуги: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-услуга.validations.составУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-snezhko-kursovaya-услуга', {
    кодУслуги: attr('Код услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительностьМин: attr('Длительность мин', { index: 3 }),
    составУслуги: hasMany('i-i-s-snezhko-kursovaya-состав-услуги', 'Состав услуги', {
      детали: belongsTo('i-i-s-snezhko-kursovaya-детали', 'Наименование', {
        наименование: attr('Наименование', { index: 0, hidden: true })
      }, { index: 3, hidden: true }),
      количество: attr('Количество', { index: 1 }),
      единицы: attr('Единицы', { index: 2 })
    })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-snezhko-kursovaya-услуга', {
    кодУслуги: attr('Код услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительностьМин: attr('Длительность мин', { index: 3 })
  });
};
