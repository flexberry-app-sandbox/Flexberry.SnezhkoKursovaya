import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-snezhko-kursovaya-бокс-l');
  this.route('i-i-s-snezhko-kursovaya-бокс-e',
  { path: 'i-i-s-snezhko-kursovaya-бокс-e/:id' });
  this.route('i-i-s-snezhko-kursovaya-бокс-e.new',
  { path: 'i-i-s-snezhko-kursovaya-бокс-e/new' });
  this.route('i-i-s-snezhko-kursovaya-детали-l');
  this.route('i-i-s-snezhko-kursovaya-детали-e',
  { path: 'i-i-s-snezhko-kursovaya-детали-e/:id' });
  this.route('i-i-s-snezhko-kursovaya-детали-e.new',
  { path: 'i-i-s-snezhko-kursovaya-детали-e/new' });
  this.route('i-i-s-snezhko-kursovaya-должности-l');
  this.route('i-i-s-snezhko-kursovaya-должности-e',
  { path: 'i-i-s-snezhko-kursovaya-должности-e/:id' });
  this.route('i-i-s-snezhko-kursovaya-должности-e.new',
  { path: 'i-i-s-snezhko-kursovaya-должности-e/new' });
  this.route('i-i-s-snezhko-kursovaya-заказ-l');
  this.route('i-i-s-snezhko-kursovaya-заказ-e',
  { path: 'i-i-s-snezhko-kursovaya-заказ-e/:id' });
  this.route('i-i-s-snezhko-kursovaya-заказ-e.new',
  { path: 'i-i-s-snezhko-kursovaya-заказ-e/new' });
  this.route('i-i-s-snezhko-kursovaya-клиенты-l');
  this.route('i-i-s-snezhko-kursovaya-клиенты-e',
  { path: 'i-i-s-snezhko-kursovaya-клиенты-e/:id' });
  this.route('i-i-s-snezhko-kursovaya-клиенты-e.new',
  { path: 'i-i-s-snezhko-kursovaya-клиенты-e/new' });
  this.route('i-i-s-snezhko-kursovaya-сотрудники-l');
  this.route('i-i-s-snezhko-kursovaya-сотрудники-e',
  { path: 'i-i-s-snezhko-kursovaya-сотрудники-e/:id' });
  this.route('i-i-s-snezhko-kursovaya-сотрудники-e.new',
  { path: 'i-i-s-snezhko-kursovaya-сотрудники-e/new' });
  this.route('i-i-s-snezhko-kursovaya-услуга-l');
  this.route('i-i-s-snezhko-kursovaya-услуга-e',
  { path: 'i-i-s-snezhko-kursovaya-услуга-e/:id' });
  this.route('i-i-s-snezhko-kursovaya-услуга-e.new',
  { path: 'i-i-s-snezhko-kursovaya-услуга-e/new' });
});

export default Router;
