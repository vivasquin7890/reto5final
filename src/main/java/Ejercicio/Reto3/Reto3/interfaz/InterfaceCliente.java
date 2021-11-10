/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Ejercicio.Reto3.Reto3.interfaz;

import Ejercicio.Reto3.Reto3.modelo.Cliente;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author USUARIO
 */
public interface InterfaceCliente extends CrudRepository<Cliente,Integer> {
    
}
