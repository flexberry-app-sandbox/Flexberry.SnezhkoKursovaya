import { Serializer as ДеталиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhko-kursovaya-детали';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДеталиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
