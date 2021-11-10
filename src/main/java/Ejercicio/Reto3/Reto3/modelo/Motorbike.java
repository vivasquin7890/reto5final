/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ejercicio.Reto3.Reto3.modelo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//indica que una clase en java representa una tabla en la base de datos
@Entity
// recibe el nombre de la tabla motorbike
@Table(name = "motorbike")
/* 
  * clase que implementa serializable y todos sus campos son serializable
  * para convertir el objeto a bytes y pueda ser enviado a travez de la red y 
  * despues sea reconstruido al otro lado de la red 
  * @author Victor Vasquez Quintana
*/ 
public class Motorbike implements Serializable{
    
    //hereda de javax persistencia indica que el campo es la clave principal de la entidad
    @Id
    //hereda de javax persistencia y configura la forma de incremento de la columna
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    //atributos 
    private Integer id;// atributo privado  id de la moto
    private String name;// atributo privado  nombre de la moto
    private String brand;// atributo privado  marca de la moto
    private Integer year; // atributo privado  año de la moto
    private String description;//atributo privado descripcion de la moto
    
    //relaciones entre la tabla motorbike con las otras tablas
    
    /*
      * relacion de muchos a uno realacion con tabla  categoria ignorando campo 
      * especificado y creacion de objeto con nombre de clase Categoria
    */
    
    @ManyToOne//indica relacion de muchos a uno
    @JoinColumn(name = "categoryId")//indica la relacion con la tabla categoria
    @JsonIgnoreProperties("motorbikes")//indica ignorar sobre campo especificado 
    private Categoria category;//creacion de objeto con nombre  clase Categoria
    
    /*
     * relacion de uno a muchos y la persistencia es sobre la tabla motorbike 
     * ignorando los campos selecccionados y creando una lista de nombre objeto de clase Mensaje
    */
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "motorbike")//indica relacionde uno a muchos 
    @JsonIgnoreProperties({"motorbike", "client"})//indica ignorar campos especificados no se serializaran
    private List<Mensaje> messages;//creacion de lista con nombre objeto de clase Mensaje 
    
    /*
      * relacion de uno a muchos persistencia en cascada sobre la tabla motorbike 
      * ignorando los campos seleccionados y creando una lista de nombre objeto de la 
      * clase Reservaciones
    */
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "motorbike")//indica relacion de uno a muchos
    @JsonIgnoreProperties({"motorbike", "messages"})//indica ignorar campos especificados no se serializaran
    private List<Reservaciones> reservations;//creacion de lista de nombre objeto de clase Reservaciones
    
    // metodos publicos GET and SETTER 
    
    /*
      * muestra el id de la moto
      * @return id de la moto
    */
    public Integer getId() {
        return id;
    }
    
    /*
      * modifica el id de la moto
      * @param id
    */

    public void setId(Integer id) {
        this.id = id;
    }
    
    /*
      * muestra el nombre de la moto
      * @return name
    */

    public String getName() {
        return name;
    }
    
    /*
      * modifica el nombre de la moto
      * @param name
    */

    public void setName(String name) {
        this.name = name;
    }
    
    /*
      * muestra la marca de la moto
      * @return brand
    */

    public String getBrand() {
        return brand;
    }
    
    /*
      * modifica la marca de la moto
      * @param brand 
    */

    public void setBrand(String brand) {
        this.brand = brand;
    }
    
    /*
      * muestra el año de la moto
      * @return year
    */

    public Integer getYear() {
        return year;
    }
    
    /*
      * modifica el año de la moto
      * @param year
    */

    public void setYear(Integer year) {
        this.year = year;
    }
    
    /*
      * muestra la descripcion de la moto
      * @return description
    */

    public String getDescription() {
        return description;
    }
    
    /*
      * modifica la descripcion de la moto
      * @param descripcion
    */

    public void setDescription(String description) {
        this.description = description;
    }
    
    /*
      * muestra la categoria de la moto
      * @return category
    */

    public Categoria getCategory() {
        return category;
    }
    
    /*
      * modifica la categoria de la moto
      * @param category
    */

    public void setCategory(Categoria category) {
        this.category = category;
    }
    
    /*
      * muesatra lista mensaje
      * @return messages
    */

    public List<Mensaje> getMessages() {
        return messages;
    }
    
    /*
      * modifica lista mensaje
      * @param List<Mensaje> messagges
    */

    public void setMessages(List<Mensaje> messages) {
        this.messages = messages;
    }
    
    /*
      * muestra lista reservaciones
      * @return reservations
    */

    public List<Reservaciones> getReservations() {
        return reservations;
    }
    
    /*
      * modifica list reservaciones
      * @param list<reservaciones> reservations
    */

    public void setReservations(List<Reservaciones> reservations) {
        this.reservations = reservations;
    }

    
    
    
}
