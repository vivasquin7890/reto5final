/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ejercicio.Reto3.Reto3.repositorio;

import Ejercicio.Reto3.Reto3.modelo.Motorbike;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import Ejercicio.Reto3.Reto3.interfaz.InterfaceMotorbike;

/**
 *
 * @author USUARIO
 */
@Repository
public class RepositorioMotorbike {
    
    @Autowired
    private InterfaceMotorbike crud;

    public List<Motorbike> getAll(){
        return (List<Motorbike>) crud.findAll();
    }

    public Optional<Motorbike> getBike(int id){
        return crud.findById(id);
    }

    public Motorbike save(Motorbike bike){
        return crud.save(bike);
    }
    public void delete(Motorbike bike){
        crud.delete(bike);
    }
    
}
