import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-snezhko-kursovaya-заказ', 'Unit | Model | i-i-s-snezhko-kursovaya-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-snezhko-kursovaya-автомобиль',
    'model:i-i-s-snezhko-kursovaya-бокс',
    'model:i-i-s-snezhko-kursovaya-детали',
    'model:i-i-s-snezhko-kursovaya-должности',
    'model:i-i-s-snezhko-kursovaya-заказ',
    'model:i-i-s-snezhko-kursovaya-клиенты',
    'model:i-i-s-snezhko-kursovaya-состав-заказа',
    'model:i-i-s-snezhko-kursovaya-состав-услуги',
    'model:i-i-s-snezhko-kursovaya-сотрудники',
    'model:i-i-s-snezhko-kursovaya-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
