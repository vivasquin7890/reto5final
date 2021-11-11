/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ejercicio.Reto3.Reto3.servicio;

import Ejercicio.Reto3.Reto3.modelo.ContadorClientes;
import Ejercicio.Reto3.Reto3.repositorio.RepositorioReservaciones;
import Ejercicio.Reto3.Reto3.modelo.Reservaciones;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Las clases @Service que se tratan son las encargadas de utilizar
 * este repositorio como parte de su lógica sobre la clase reservacion y su funcionalidad 
 * deacuerdo a sus parametros.
 * También se implementarán métodos para las operaciones que no estén
 * determinadas por la implementación por defecto de CRUD.
 * @author Victor Vasquez
 */
@Service
public class ServiciosReservaciones {
     @Autowired
    private RepositorioReservaciones metodosCrud;
    // realizando uso metodo get all en reservaciones 
    public List<Reservaciones> getAll(){
        return metodosCrud.getAll();
    }
    // uso metodo get reservation por intermedio del id de reservaciones
    public Optional<Reservaciones> getReservation(int reservationId) {
        return metodosCrud.getReservation(reservationId);
    }
    //metodo save para guardar las reservaciones por id 
    public Reservaciones save(Reservaciones reservation){
        if(reservation.getIdReservation()==null){
            return metodosCrud.save(reservation);
        }else{
            Optional<Reservaciones> e= metodosCrud.getReservation(reservation.getIdReservation());
            if(e.isEmpty()){
                return metodosCrud.save(reservation);
            }else{
                return reservation;
            }
        }
    }
    // metodo update para actualizar las reservaciones por id verificando las fechas de inicio
    // fecha de devoclucion y status de la reservacion
    public Reservaciones update(Reservaciones reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservaciones> e= metodosCrud.getReservation(reservation.getIdReservation());
            if(!e.isEmpty()){

                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    e.get().setStatus(reservation.getStatus());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }
    // metodo boleano para borrar la reservacion por id 
    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservation(reservationId).map(reservation -> {
            metodosCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
    public StatusReservas getRepStatusRes(){

    List<Reservaciones>completed = metodosCrud.ReservationStatus("completed");
    List<Reservaciones>cancelled = metodosCrud.ReservationStatus("cancelled");
    return new StatusReservas(completed.size(),cancelled.size());

    }

    public List<Reservaciones> reporteTiempoServicio (String datoA, String datoB){
        SimpleDateFormat parser = new SimpleDateFormat ("yyyy-MM-dd");
        
        Date datoUno = new Date();
        Date datoDos = new Date();
        
        try{
            datoUno = parser.parse(datoA);
            datoDos = parser.parse(datoB);
        }catch(ParseException evt){
            evt.printStackTrace();
        }if(datoUno.before(datoDos)){
            return metodosCrud.ReservationTiempoRepositorio(datoUno, datoDos);
        }else{
            return new ArrayList<>();
        }


    }

    
    public List<ContadorClientes> reporteClientesServicio(){
    return metodosCrud.getClientesRepositorio();

    }
}
