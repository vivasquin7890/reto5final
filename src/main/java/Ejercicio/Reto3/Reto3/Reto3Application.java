// 1.Modelo o Entidad
// 2.Interface
// 3.Repositorio
// 4.Servicios
// 5.Controlador o Web


package Ejercicio.Reto3.Reto3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties
@EntityScan(basePackages = {"Ejercicio.Reto3.Reto3.modelo"}) 
@SpringBootApplication
public class Reto3Application {

	public static void main(String[] args) {
		SpringApplication.run(Reto3Application.class, args);
	}

}
