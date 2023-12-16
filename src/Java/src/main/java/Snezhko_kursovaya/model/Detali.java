package Snezhko_kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhko_kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Детали
 */
@Entity(name = "IISSnezhko_kursovayaДетали")
@Table(schema = "public", name = "Детали")
public class Detali {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДетали")
    private Integer коддетали;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Производитель")
    private String производитель;

    @Column(name = "Страна")
    private String страна;


    public Detali() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДетали() {
      return коддетали;
    }

    public void setКодДетали(Integer коддетали) {
      this.коддетали = коддетали;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getПроизводитель() {
      return производитель;
    }

    public void setПроизводитель(String производитель) {
      this.производитель = производитель;
    }

    public String getСтрана() {
      return страна;
    }

    public void setСтрана(String страна) {
      this.страна = страна;
    }


}