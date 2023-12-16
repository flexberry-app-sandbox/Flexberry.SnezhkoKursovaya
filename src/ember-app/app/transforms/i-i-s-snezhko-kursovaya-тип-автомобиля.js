import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипАвтомобиляEnum from '../enums/i-i-s-snezhko-kursovaya-тип-автомобиля';

export default FlexberryEnum.extend({
  enum: ТипАвтомобиляEnum,
  sourceType: 'IIS.Snezhko_kursovaya.ТипАвтомобиля'
});
