import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  госНомер: DS.attr('string'),
  марка: DS.attr('string'),
  типАвтомобиля: DS.attr('i-i-s-snezhko-kursovaya-тип-автомобиля'),
  цвет: DS.attr('string'),
  клиенты: DS.belongsTo('i-i-s-snezhko-kursovaya-клиенты', { inverse: 'автомобиль', async: false })
});

export let ValidationRules = {
  госНомер: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-автомобиль.validations.госНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-автомобиль.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типАвтомобиля: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-автомобиль.validations.типАвтомобиля.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цвет: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-автомобиль.validations.цвет.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-snezhko-kursovaya-автомобиль.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АвтомобильE', 'i-i-s-snezhko-kursovaya-автомобиль', {
    госНомер: attr('Гос номер', { index: 0 }),
    цвет: attr('Цвет', { index: 1 }),
    марка: attr('Марка', { index: 2 }),
    типАвтомобиля: attr('Тип автомобиля', { index: 3 })
  });
};
