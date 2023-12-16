import { Serializer as УслугаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-snezhko-kursovaya-услуга';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УслугаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
