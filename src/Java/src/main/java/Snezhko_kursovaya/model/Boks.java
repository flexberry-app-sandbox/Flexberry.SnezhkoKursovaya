package Snezhko_kursovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Snezhko_kursovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Бокс
 */
@Entity(name = "IISSnezhko_kursovayaБокс")
@Table(schema = "public", name = "Бокс")
public class Boks {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерБокса")
    private String номербокса;

    @Column(name = "Площадь")
    private Integer площадь;

    @Column(name = "ТипАвтомобиля")
    private String типавтомобиля;


    public Boks() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомерБокса() {
      return номербокса;
    }

    public void setНомерБокса(String номербокса) {
      this.номербокса = номербокса;
    }

    public Integer getПлощадь() {
      return площадь;
    }

    public void setПлощадь(Integer площадь) {
      this.площадь = площадь;
    }

    public String getТипАвтомобиля() {
      return типавтомобиля;
    }

    public void setТипАвтомобиля(String типавтомобиля) {
      this.типавтомобиля = типавтомобиля;
    }


}