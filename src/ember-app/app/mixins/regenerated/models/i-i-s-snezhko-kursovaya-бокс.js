import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерБокса: DS.attr('string'),
  площадь: DS.attr('number'),
  типАвтомобиля: DS.attr('i-i-s-snezhko-kursovaya-тип-автомобиля')
});

export let ValidationRules = {
  номерБокса: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-бокс.validations.номерБокса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-бокс.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типАвтомобиля: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-бокс.validations.типАвтомобиля.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БоксE', 'i-i-s-snezhko-kursovaya-бокс', {
    номерБокса: attr('Номер бокса', { index: 0 }),
    площадь: attr('Площадь', { index: 1 }),
    типАвтомобиля: attr('Тип автомобиля', { index: 2 })
  });

  modelClass.defineProjection('БоксL', 'i-i-s-snezhko-kursovaya-бокс', {
    номерБокса: attr('Номер бокса', { index: 0 }),
    площадь: attr('Площадь', { index: 1 }),
    типАвтомобиля: attr('Тип автомобиля', { index: 2 })
  });
};
