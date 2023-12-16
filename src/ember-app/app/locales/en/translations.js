import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSnezhko_kursovayaБоксLForm from './forms/i-i-s-snezhko-kursovaya-бокс-l';
import IISSnezhko_kursovayaДеталиLForm from './forms/i-i-s-snezhko-kursovaya-детали-l';
import IISSnezhko_kursovayaДолжностиLForm from './forms/i-i-s-snezhko-kursovaya-должности-l';
import IISSnezhko_kursovayaЗаказLForm from './forms/i-i-s-snezhko-kursovaya-заказ-l';
import IISSnezhko_kursovayaКлиентыLForm from './forms/i-i-s-snezhko-kursovaya-клиенты-l';
import IISSnezhko_kursovayaСотрудникиLForm from './forms/i-i-s-snezhko-kursovaya-сотрудники-l';
import IISSnezhko_kursovayaУслугаLForm from './forms/i-i-s-snezhko-kursovaya-услуга-l';
import IISSnezhko_kursovayaБоксEForm from './forms/i-i-s-snezhko-kursovaya-бокс-e';
import IISSnezhko_kursovayaДеталиEForm from './forms/i-i-s-snezhko-kursovaya-детали-e';
import IISSnezhko_kursovayaДолжностиEForm from './forms/i-i-s-snezhko-kursovaya-должности-e';
import IISSnezhko_kursovayaЗаказEForm from './forms/i-i-s-snezhko-kursovaya-заказ-e';
import IISSnezhko_kursovayaКлиентыEForm from './forms/i-i-s-snezhko-kursovaya-клиенты-e';
import IISSnezhko_kursovayaСотрудникиEForm from './forms/i-i-s-snezhko-kursovaya-сотрудники-e';
import IISSnezhko_kursovayaУслугаEForm from './forms/i-i-s-snezhko-kursovaya-услуга-e';
import IISSnezhko_kursovayaАвтомобильModel from './models/i-i-s-snezhko-kursovaya-автомобиль';
import IISSnezhko_kursovayaБоксModel from './models/i-i-s-snezhko-kursovaya-бокс';
import IISSnezhko_kursovayaДеталиModel from './models/i-i-s-snezhko-kursovaya-детали';
import IISSnezhko_kursovayaДолжностиModel from './models/i-i-s-snezhko-kursovaya-должности';
import IISSnezhko_kursovayaЗаказModel from './models/i-i-s-snezhko-kursovaya-заказ';
import IISSnezhko_kursovayaКлиентыModel from './models/i-i-s-snezhko-kursovaya-клиенты';
import IISSnezhko_kursovayaСоставЗаказаModel from './models/i-i-s-snezhko-kursovaya-состав-заказа';
import IISSnezhko_kursovayaСоставУслугиModel from './models/i-i-s-snezhko-kursovaya-состав-услуги';
import IISSnezhko_kursovayaСотрудникиModel from './models/i-i-s-snezhko-kursovaya-сотрудники';
import IISSnezhko_kursovayaУслугаModel from './models/i-i-s-snezhko-kursovaya-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-snezhko-kursovaya-автомобиль': IISSnezhko_kursovayaАвтомобильModel,
    'i-i-s-snezhko-kursovaya-бокс': IISSnezhko_kursovayaБоксModel,
    'i-i-s-snezhko-kursovaya-детали': IISSnezhko_kursovayaДеталиModel,
    'i-i-s-snezhko-kursovaya-должности': IISSnezhko_kursovayaДолжностиModel,
    'i-i-s-snezhko-kursovaya-заказ': IISSnezhko_kursovayaЗаказModel,
    'i-i-s-snezhko-kursovaya-клиенты': IISSnezhko_kursovayaКлиентыModel,
    'i-i-s-snezhko-kursovaya-состав-заказа': IISSnezhko_kursovayaСоставЗаказаModel,
    'i-i-s-snezhko-kursovaya-состав-услуги': IISSnezhko_kursovayaСоставУслугиModel,
    'i-i-s-snezhko-kursovaya-сотрудники': IISSnezhko_kursovayaСотрудникиModel,
    'i-i-s-snezhko-kursovaya-услуга': IISSnezhko_kursovayaУслугаModel
  },

  'application-name': 'Snezhko_kursovaya',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Snezhko_kursovaya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Snezhko_kursovaya',
          title: 'Snezhko_kursovaya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-snezhko-kursovaya-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        'справочник-услуг': {
          caption: 'Справочник услуг',
          title: 'Справочник услуг',
          'i-i-s-snezhko-kursovaya-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-snezhko-kursovaya-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-snezhko-kursovaya-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        бокс: {
          caption: 'Бокс',
          title: 'Бокс',
          'i-i-s-snezhko-kursovaya-бокс-l': {
            caption: 'Бокс',
            title: 'Бокс'
          }
        },
        'справочник-детали': {
          caption: 'Справочник детали',
          title: 'Справочник детали',
          'i-i-s-snezhko-kursovaya-детали-l': {
            caption: 'Детали',
            title: 'Детали'
          }
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          'i-i-s-snezhko-kursovaya-заказ-l': {
            caption: 'Заказ',
            title: 'Заказ'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-snezhko-kursovaya-бокс-l': IISSnezhko_kursovayaБоксLForm,
    'i-i-s-snezhko-kursovaya-детали-l': IISSnezhko_kursovayaДеталиLForm,
    'i-i-s-snezhko-kursovaya-должности-l': IISSnezhko_kursovayaДолжностиLForm,
    'i-i-s-snezhko-kursovaya-заказ-l': IISSnezhko_kursovayaЗаказLForm,
    'i-i-s-snezhko-kursovaya-клиенты-l': IISSnezhko_kursovayaКлиентыLForm,
    'i-i-s-snezhko-kursovaya-сотрудники-l': IISSnezhko_kursovayaСотрудникиLForm,
    'i-i-s-snezhko-kursovaya-услуга-l': IISSnezhko_kursovayaУслугаLForm,
    'i-i-s-snezhko-kursovaya-бокс-e': IISSnezhko_kursovayaБоксEForm,
    'i-i-s-snezhko-kursovaya-детали-e': IISSnezhko_kursovayaДеталиEForm,
    'i-i-s-snezhko-kursovaya-должности-e': IISSnezhko_kursovayaДолжностиEForm,
    'i-i-s-snezhko-kursovaya-заказ-e': IISSnezhko_kursovayaЗаказEForm,
    'i-i-s-snezhko-kursovaya-клиенты-e': IISSnezhko_kursovayaКлиентыEForm,
    'i-i-s-snezhko-kursovaya-сотрудники-e': IISSnezhko_kursovayaСотрудникиEForm,
    'i-i-s-snezhko-kursovaya-услуга-e': IISSnezhko_kursovayaУслугаEForm
  },

});

export default translations;
