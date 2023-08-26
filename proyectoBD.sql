-- MySQL Script generated by MySQL Workbench
-- Sun Jul 30 21:32:58 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;


-- -----------------------------------------------------
-- Table `mydb`.`Inspector`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Inspector` (
  `id_Inspector` INT AUTO_INCREMENT NOT NULL,
  `Nombre` VARCHAR(20) NULL,
  `Email` VARCHAR(50) NULL,
  `Celular` VARCHAR(10) NULL,
  PRIMARY KEY (`id_Inspector`)
) 
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `mydb`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cliente` (
  `id_Cliente` INT AUTO_INCREMENT NOT NULL,
  `Nombre` VARCHAR(20) NULL,
  `Apellido` VARCHAR(20) NULL,
  `Fecha_Nacimiento` DATE NULL,
  `Email` VARCHAR(50) NULL,
  `Celular` VARCHAR(10) NULL,
  `Edad` INT NULL,
  `Licencia` TINYINT NULL,
  `id_Inspector` INT NULL,
  PRIMARY KEY (`id_Cliente`),
  FOREIGN KEY (`id_inspector`) REFERENCES `mydb`.`Inspector` (`id_Inspector`) ON DELETE SET NULL
  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pago` (
  `Id_Pago` INT AUTO_INCREMENT NOT NULL,
  `Id_Cliente` INT NULL,
  `id_Devolucion` INT NULL,
  `Monto` FLOAT NULL,
  `Fecha` DATE NULL,
  `conf_pago` TINYINT NULL,
  `Plazo` DATE NULL,
  `Forma_pago` VARCHAR(20) NULL,
  PRIMARY KEY (`Id_Pago`),
  FOREIGN KEY (`Id_Cliente`) REFERENCES `mydb`.`Cliente` (`id_Cliente`) ON DELETE SET NULL,
  FOREIGN KEY (`id_Devolucion`) REFERENCES `mydb`.`Devolucion` (`id_Devolucion`) ON DELETE SET NULL
) 
ENGINE = InnoDB;





-- -----------------------------------------------------
-- Table `mydb`.`EmpresaAlquiler`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`EmpresaAlquiler` (
  `RUC` VARCHAR(10) NOT NULL,
  `Nombre` VARCHAR(50) NULL,
  PRIMARY KEY (`RUC`)
) 
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `mydb`.`Vehiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Vehiculo` (
  `No_Matricula` VARCHAR(7) NOT NULL,
  `RUC` VARCHAR(10) NULL,
  `Marca` VARCHAR(20) NULL,
  `Disponibilidad` TINYINT NULL,
  `Precio_alquiler` FLOAT NULL,
  `Capacidad` INT NULL,
  PRIMARY KEY (`No_Matricula`)
) 
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Reserva` (
  `id_Reserva` INT AUTO_INCREMENT NOT NULL,
  `Id_Cliente` INT NULL,
  `Id_Inspector` INT NULL,
  `No_Matricula` VARCHAR(7) NULL,
  `Fecha_Inicio` DATE NULL,
  `Hora_reserva` TIME NULL,
  `ubicacion_recogida` VARCHAR(50) NULL,
  PRIMARY KEY (`id_Reserva`),
  FOREIGN KEY (`Id_Cliente`) REFERENCES `mydb`.`Cliente` (`id_Cliente`) ON DELETE SET NULL,
  FOREIGN KEY (`Id_Inspector`) REFERENCES `mydb`.`Inspector` (`id_Inspector`) ON DELETE SET NULL,
  FOREIGN KEY (`No_Matricula`) REFERENCES `mydb`.`Vehiculo` (`No_Matricula`) ON DELETE SET NULL
) 
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `mydb`.`Recargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Recargo` (
  `id_Recargo` INT AUTO_INCREMENT NOT NULL,
  `Id_pago` INT NULL,
  `Fecha` DATE NULL,
  `Cobertura_Seguro` VARCHAR(20) NULL,
  `Monto` FLOAT NULL,
  `Razon` VARCHAR(100) NULL,
  PRIMARY KEY (`id_Recargo`),
  FOREIGN KEY (`id_Pago`) REFERENCES `mydb`.`Pago` (`Id_Pago`) ON DELETE CASCADE
) 
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Devolucion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Devolucion` (
  `id_Devolucion` INT AUTO_INCREMENT NOT NULL,
  `Id_Cliente` INT NULL,
  `No_Matricula` VARCHAR(7) NULL,
  `Estado_devolucion` TINYINT NULL,
  `Hora_devolucion` TIME NULL,
  `Hora_devolucion_real` TIME NULL,
  `Fecha_devolucion` DATE NULL,
  `Fecha_devolucion_real` DATE NULL,
  `Lugar_devolucion` VARCHAR(100) NULL,
  PRIMARY KEY (`id_Devolucion`),
  
  FOREIGN KEY (`No_Matricula`) REFERENCES `mydb`.`Vehiculo` (`No_Matricula`) ON DELETE SET NULL,
  FOREIGN KEY (`Id_Cliente`) REFERENCES `mydb`.`Cliente` (`Id_Cliente`) ON DELETE SET NULL
) 
ENGINE = InnoDB;




-- -----------------------------------------------------
-- Table `mydb`.`Alquilar`
-- Inspector_EmpresaAlquiler
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Alquilar` (
  `RUC` VARCHAR(10) NOT NULL,
  `id_Inspector` INT NOT NULL,
  PRIMARY KEY (`RUC`,`id_Inspector`),
  FOREIGN KEY (`RUC`) REFERENCES `mydb`.`EmpresaAlquiler` (`RUC`),
  FOREIGN KEY (`id_Inspector`) REFERENCES `mydb`.`Inspector` (`id_Inspector`)
) 
ENGINE = InnoDB;




-- -------------------------------------------------
-- Triggers
-- Establece automáticamente la fecha del Recargo
DELIMITER //
CREATE TRIGGER setRecargoDate
BEFORE INSERT ON Recargo
FOR EACH ROW
BEGIN
	SET NEW.Fecha = NOW();
END;
//
DELIMITER ;

-- Establece automáticamente la fecha del Pago
DELIMITER //
CREATE TRIGGER setPagoDate
BEFORE INSERT ON Pago
FOR EACH ROW
BEGIN
	SET NEW.Fecha = NOW();
END;
//
DELIMITER ;
-- Agrega tabla vihiculo
alter table vehiculo add imageURLVe varchar(300) default null;

-- Agrega tabla empresaAlquiler
alter table empresaalquiler add imageURLLogo varchar(300) default null;

-- Agrega tabla cliente
alter table cliente add imageURLFoto varchar(300) default null;

-- Agrega tabla inspector
alter table inspector add imageURLFotoin varchar(300) default null ;

-- Registros Inspectores
INSERT INTO Inspector (Nombre, Email, Celular) VALUES
('Javier', 'javier.inspector@gmail.com', '0998765432'),
('Carolina', 'carolina.inspector@hotmail.com', '0987654321'),
('Andres', 'andres.inspector@yahoo.com', '0998765432'),
('Patricia', 'patricia.inspector@outlook.com', '0987654321'),
('Fernando', 'fernando.inspector@gmail.com', '0998765432'),
('Diana', 'diana.inspector@hotmail.com', '0987654321'),
('Oscar', 'oscar.inspector@yahoo.com', '0998765432'),
('Camila', 'camila.inspector@gmail.com', '0987654321'),
('Carlos', 'carlos.inspector@outlook.com', '0998765432'),
('Sara', 'sara.inspector@yahoo.com', '0987654321');
-- ---------------
-- Registros Clientes
INSERT INTO Cliente (Nombre, Apellido, Fecha_Nacimiento, Email, Celular, Edad, Licencia,Id_Inspector) VALUES
('Juan', 'Perez', '1985-05-15', 'juan.perez@gmail.com', '0991234567', 36, 1,2),
('Maria', 'Gonzalez', '1990-09-22', 'maria.gonzalez@hotmail.com', '0987654321', 31, 1,4),
('Pedro', 'Ramirez', '1988-11-10', 'pedro.ramirez@yahoo.com', '0998765432', 33, 1,3),
('Ana', 'Lopez', '1995-03-03', 'ana.lopez@outlook.com', '0987654321', 26, 1,1),
('Carlos', 'Martinez', '1982-07-07', 'carlos.martinez@gmail.com', '0998765432', 39, 1,1),
('Laura', 'Sanchez', '1992-12-18', 'laura.sanchez@hotmail.com', '0987654321', 29, 1,6),
('Luis', 'Hernandez', '1987-02-25', 'luis.hernandez@yahoo.com', '0998765432', 34, 1,2),
('Paula', 'Torres', '1998-06-14', 'paula.torres@gmail.com', '0987654321', 23, 1,7),
('Roberto', 'Gomez', '1980-09-30', 'roberto.gomez@outlook.com', '0998765432', 41, 1,7),
('Sofia', 'Diaz', '1993-04-28', 'sofia.diaz@yahoo.com', '0987654321', 28, 1,7);

-- Registros Pagos
INSERT INTO Pago (Id_Cliente, id_Devolucion, Monto, Fecha, conf_pago, Plazo, Forma_pago) VALUES
(1, 1, 100.00, '2023-07-01', 0, '2023-08-01', 'Tarjeta'),
(2, 2, 150.50, '2023-07-15', 1, '2023-08-15', 'Efectivo'),
(3, 3, 200.00, '2023-07-02', 0, '2023-12-02', 'Tarjeta'),
(4, 4, 120.75, '2023-07-20', 4, '2023-08-20', 'Transferencia'),
(5, 5, 80.25, '2023-07-03', 1, '2023-08-03', 'Tarjeta'),
(6, 6, 300.00, '2023-07-25', 1, '2023-08-25', 'Efectivo'),
(3, 7, 90.00, '2023-07-10', 0, '2023-12-10', 'Tarjeta'),
(8, 8, 220.75, '2023-07-05', 0, '2023-08-05', 'Transferencia'),
(9, 9, 150.25, '2023-07-12', 1, '2023-08-12', 'Tarjeta');


-- Registros Empresa Alquiler
INSERT INTO EmpresaAlquiler (RUC, Nombre) VALUES
('3000000001', 'Alquiler de Autos Ecuador'),
('4000000002', 'Autos Rentables Cía. Ltda.'),
('5000000003', 'Carros Express S.A.'),
('6000000004', 'Rentacar Andino C.A.'),
('7000000005', 'CarrosVeloz Rentacar'),
('8000000006', 'RentautoEC Alquiler de Autos'),
('9000000007', 'Ecuarent Car Rental'),
('1000000008', 'Alquilautos S.A.'),
('2000000009', 'Velocar Rentacar'),
('3500000010', 'RentacarPremium Cía. Ltda.');
-- Registros Vehiculos
INSERT INTO Vehiculo (No_Matricula, RUC, Marca, Disponibilidad, Precio_alquiler, Capacidad) VALUES
('ABC123', '3000000001', 'Toyota', 1, 50.00, 4),
('XYZ789', '4000000002', 'Nissan', 1, 45.00, 5),
('DEF456', '5000000003', 'Chevrolet', 1, 60.00, 7),
('GHI987', '6000000004', 'Ford', 1, 55.00, 4),
('JKL234', '7000000005', 'Honda', 1, 48.00, 5),
('MNO345', '8000000006', 'Hyundai', 1, 52.00, 6),
('PQR567', '9000000007', 'Volkswagen', 1, 50.00, 4),
('STU890', '1000000008', 'Kia', 1, 47.00, 5),
('VWX901', '2000000009', 'Mazda', 1, 55.00, 6),
('YZA012', '3500000010', 'Suzuki', 1, 49.00, 5);


-- Registros Reservas
INSERT INTO Reserva (Id_Cliente, Id_Inspector, No_Matricula, Fecha_Inicio, Hora_reserva, ubicacion_recogida) VALUES
(1, 4, 'ABC123', '2023-07-01', '08:00:00', 'Quito, Aeropuerto Internacional Mariscal Sucre'),
(2, 4, 'XYZ789','2023-07-15', '09:30:00', 'Guayaquil, Centro Ciudad'),
(3, 4, 'YZA012','2023-07-02', '10:45:00', 'Cuenca, Terminal de Autobuses'),
(4, 4, 'JKL234','2023-07-20', '12:30:00', 'Riobamba, Terminal de Autobuses'),
(5, 4, 'MNO345','2023-07-03', '14:00:00', 'Manta, Aeropuerto Internacional Eloy Alfaro'),
(6, 4, 'ABC123','2023-07-25', '16:30:00', 'Guayaquil, Hotel Sheraton'),
(2, 4, 'DEF456','2023-07-04', '08:15:00', 'Quito, Aeropuerto Internacional Mariscal Sucre'),
(3, 4, 'DEF456','2023-07-10', '11:30:00', 'Guayaquil, Centro Ciudad'),
(8, 4, 'VWX901','2023-07-05', '13:00:00', 'Cuenca, Terminal de Autobuses'),
(9, 4, 'XYZ789','2023-07-12', '17:45:00', 'Riobamba, Hotel Montecarlo');


-- Registros Recargo
INSERT INTO Recargo (Id_pago, Fecha, Cobertura_Seguro, Monto, Razon) VALUES
(1, '2023-07-01', 'Seguro básico', 10.00, 'Cobertura adicional'),
(3,  '2023-07-15', 'Seguro completo', 15.50, 'Daño en el vehículo'),
(2, '2023-07-02', 'Seguro básico', 20.00, 'Demora en la entrega'),
(4, '2023-07-20', 'Seguro completo', 12.75, 'Daño en el parabrisas'),
(5, '2023-07-03', 'Seguro básico', 8.25, 'Demora en la devolución'),
(8, '2023-07-25', 'Seguro completo', 30.00, 'Choque delantero'),
(8, '2023-07-04', 'Seguro básico', 18.50, 'Choque trasero'),
(8, '2023-07-10', 'Seguro completo', 9.00, 'Rayón en la puerta derecha'),
(9, '2023-07-05', 'Seguro básico', 22.75, 'Demora en la entrega'),
(10, '2023-07-12', 'Seguro completo', 15.25, 'Daño en el retrovisor');


-- Registros Devoluciones
INSERT INTO Devolucion (Id_Cliente, No_Matricula, Estado_devolucion, Hora_devolucion, Hora_devolucion_real, Fecha_devolucion, Fecha_devolucion_real, Lugar_devolucion) VALUES
(1,'ABC123', 1, '17:00:00', null, '2023-08-01', null, 'Quito, Aeropuerto Internacional Mariscal Sucre'),
(2,'XYZ789', 1, '18:30:00', '19:00:00', '2023-08-15', '2023-08-15', 'Guayaquil, Centro Ciudad'),
(3,'DEF456', 1, '15:45:00', '16:00:00', '2023-08-02', '2023-08-02', 'Cuenca, Terminal de Autobuses'),
(4,'GHI987', 1, '16:30:00', null, '2023-08-20', null, 'Riobamba, Terminal de Autobuses'),
(5,'JKL234', 1, '14:30:00', '15:00:00', '2023-08-03', '2023-08-03', 'Manta, Aeropuerto Internacional Eloy Alfaro'),
(6,'ABC123', 1, '16:00:00', '16:30:00', '2023-08-25', '2023-08-25', 'Guayaquil, Hotel Sheraton'),
(3,'STU890', 1, '12:45:00', '13:15:00', '2023-08-10', '2023-08-10', 'Guayaquil, Centro Ciudad'),
(8,'VWX901', 1, '19:30:00', null, '2023-08-05', null, 'Cuenca, Terminal de Autobuses'),
(9,'YZA012', 1, '17:15:00', '17:45:00', '2023-08-12', '2023-08-12', 'Riobamba, Hotel Montecarlo');

-- ##############################################################################
-- ##############################AVANCE 3########################################
-- ##############################################################################

-- SP
-- INSPECTOR
DELIMITER //
CREATE PROCEDURE insertInspector(IN nombre VARCHAR(20), IN email VARCHAR(50), IN celular VARCHAR(10))
BEGIN
    DECLARE inspectorCount INT;
    
    START TRANSACTION;
    
    IF nombre = '' OR email = '' OR celular = '' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
    END IF;
    
    -- Verificar si el inspector ya existe
    SELECT COUNT(*) INTO inspectorCount FROM Inspector WHERE nombre = nombre OR email = email;
    
    IF inspectorCount > 0 THEN
        SIGNAL SQLSTATE '02000' SET MESSAGE_TEXT = 'El inspector ya existe';
    ELSE
        INSERT INTO Inspector(nombre, email, celular) VALUES (nombre, email, celular);
    END IF;
    
    COMMIT;
END;
//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE updateInspector(IN id INT, IN nombre VARCHAR(20), IN email VARCHAR(50), IN celular VARCHAR(10))
BEGIN
    DECLARE inspectorCount INT;
    
    START TRANSACTION;
    
    -- Verificar si el inspector existe
    SELECT COUNT(*) INTO inspectorCount FROM Inspector WHERE id_Inspector = id;
    
    IF inspectorCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El inspector no existe';
    ELSE
        IF nombre = '' OR email = '' OR celular = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;
        
        UPDATE Inspector
        SET nombre = nombre, email = email, celular = celular
        WHERE id_Inspector = id;
    END IF;
    
    COMMIT;
END;
//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE deleteInspector(IN id INT)
BEGIN
    DECLARE inspectorCount INT;
    
    START TRANSACTION;
    
    -- Verificar si el inspector existe
    SELECT COUNT(*) INTO inspectorCount FROM Inspector WHERE id_Inspector = id;
    
    IF inspectorCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El inspector no existe';
    ELSE
        DELETE FROM Inspector WHERE id_Inspector = id;
    END IF;
    
    COMMIT;
END;
//
DELIMITER ;


-- Clientes
DELIMITER //
CREATE PROCEDURE insertCliente(IN nombre VARCHAR(20), IN apellido VARCHAR(20), IN fecha_nacimiento DATE, IN email VARCHAR(50), IN celular VARCHAR(10), IN edad INT, IN licencia TINYINT, IN id_Inspector INT)
BEGIN
    DECLARE clientCount INT;
    
    START TRANSACTION;
    
    -- Verificar si el cliente ya existe
    SELECT COUNT(*) INTO clientCount FROM Cliente WHERE email = email OR celular = celular;
    
    IF clientCount > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente ya existe';
    ELSE
        IF nombre = '' OR apellido = '' OR email = '' OR celular = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;
        
        INSERT INTO Cliente(nombre, apellido, fecha_nacimiento, email, celular, edad, licencia, id_Inspector)
        VALUES (nombre, apellido, fecha_nacimiento, email, celular, edad, licencia, id_Inspector);
    END IF;
    
    COMMIT;
END;
//
DELIMITER ;


DELIMITER //
CREATE PROCEDURE updateCliente(IN id INT, IN nombre VARCHAR(20), IN apellido VARCHAR(20), IN fecha_nacimiento DATE, IN email VARCHAR(50), IN celular VARCHAR(10), IN edad INT, IN licencia TINYINT, IN id_Inspector INT)
BEGIN
    DECLARE clientCount INT;
    
    START TRANSACTION;
    
    -- Verificar si el cliente existe
    SELECT COUNT(*) INTO clientCount FROM Cliente WHERE Id_Cliente = id;
    
    IF clientCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente no existe';
    ELSE
        IF nombre = '' OR apellido = '' OR email = '' OR celular = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;
        
        UPDATE Cliente
        SET nombre = nombre, apellido = apellido, fecha_nacimiento = fecha_nacimiento, email = email, celular = celular, edad = edad, licencia = licencia, id_Inspector = id_Inspector
        WHERE Id_Cliente = id;
    END IF;
    
    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE deleteCliente(IN id INT)
BEGIN
    DECLARE clientCount INT;
    
    START TRANSACTION;
    
    -- Verificar si el cliente existe
    SELECT COUNT(*) INTO clientCount FROM Cliente WHERE Id_Cliente = id;
    
    IF clientCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente no existe';
    ELSE
        DELETE FROM Cliente 
        WHERE Id_Cliente = id;
    END IF;
    
    COMMIT;
END;
//
DELIMITER ;


-- Pago
DELIMITER //
CREATE PROCEDURE insertPago(IN Id_Cliente INT, IN id_Devolucion INT, IN monto FLOAT, IN conf_pago TINYINT, IN plazo DATE, IN forma_pago VARCHAR(20))
BEGIN
    DECLARE clientCount INT;
    
    START TRANSACTION;

    -- Verificar si el cliente existe
    SELECT COUNT(*) INTO clientCount FROM Cliente WHERE Id_Cliente = Id_Cliente;

    IF clientCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente no existe';
    ELSE
        IF Id_Cliente IS NULL OR monto IS NULL OR conf_pago IS NULL OR plazo IS NULL OR forma_pago = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        INSERT INTO Pago(Id_Cliente, id_Devolucion, monto, conf_pago, plazo, forma_pago)
        VALUES (Id_Cliente, id_Devolucion, monto, conf_pago, plazo, forma_pago);
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE updatePago(IN id_Pago INT, IN Id_Cliente INT, IN id_Devolucion INT, IN monto FLOAT, IN conf_pago TINYINT, IN plazo DATE, IN forma_pago VARCHAR(20))
BEGIN
    DECLARE clientCount INT;
    DECLARE paymentCount INT;

    START TRANSACTION;

    -- Verificar si el cliente y el pago existen
    SELECT COUNT(*) INTO clientCount FROM Cliente WHERE Id_Cliente = Id_Cliente;
    SELECT COUNT(*) INTO paymentCount FROM Pago WHERE id_Pago = id_Pago;

    IF clientCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente no existe';
    ELSE
        IF paymentCount = 0 THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El pago no existe';
        ELSE
            IF Id_Cliente IS NULL OR monto IS NULL OR conf_pago IS NULL OR plazo IS NULL OR forma_pago = '' THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
            END IF;

            UPDATE Pago
            SET Id_Cliente = Id_Cliente, monto = monto, conf_pago = conf_pago, plazo = plazo, forma_pago = forma_pago
            WHERE id_Pago = id_Pago;
        END IF;
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE DeletePago(IN id_Pago INT)
BEGIN
    DECLARE paymentCount INT;

    START TRANSACTION;

    -- Verificar si el pago existe
    SELECT COUNT(*) INTO paymentCount FROM Pago WHERE id_Pago = id_Pago;

    IF paymentCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El pago no existe';
    ELSE
        IF id_Pago IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El ID del Pago no puede ser nulo';
        END IF;

        DELETE FROM pago WHERE id_Pago = id_Pago;
    END IF;

    COMMIT;
END;
//
DELIMITER ;


-- Empresa Alquiler
DELIMITER //
CREATE PROCEDURE insertEmpresaAlquiler(IN RUC VARCHAR(10), IN nombre VARCHAR(50))
BEGIN
    DECLARE rucCount INT;

    START TRANSACTION;

    -- Verificar si la empresa ya existe por su RUC
    SELECT COUNT(*) INTO rucCount FROM EmpresaAlquiler WHERE RUC = RUC;

    IF rucCount > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La empresa con este RUC ya existe';
    ELSE
        IF RUC = '' OR nombre = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        INSERT INTO EmpresaAlquiler(RUC, nombre)
        VALUES (RUC, nombre);
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE updateEmpresaAlquiler(IN RUC VARCHAR(10), IN nombre VARCHAR(50))
BEGIN
    DECLARE rucCount INT;

    START TRANSACTION;

    -- Verificar si la empresa existe por su RUC
    SELECT COUNT(*) INTO rucCount FROM EmpresaAlquiler WHERE RUC = RUC;

    IF rucCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La empresa con este RUC no existe';
    ELSE
        IF RUC = '' OR nombre = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        UPDATE EmpresaAlquiler
        SET nombre = nombre
        WHERE RUC = RUC;
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE deleteEmpresaAlquiler(IN RUC VARCHAR(10))
BEGIN
    DECLARE rucCount INT;

    START TRANSACTION;

    -- Verificar si la empresa existe por su RUC
    SELECT COUNT(*) INTO rucCount FROM EmpresaAlquiler WHERE RUC = RUC;

    IF rucCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La empresa con este RUC no existe';
    ELSE
        IF RUC IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El RUC de la empresa no puede ser NULL';
        END IF;

        DELETE FROM EmpresaAlquiler
        WHERE RUC = RUC;
    END IF;

    COMMIT;
END;
//
DELIMITER ;


-- Vehiculo
DELIMITER //
CREATE PROCEDURE insertVehiculo(IN No_Matricula VARCHAR(7), IN RUC VARCHAR(10), IN marca VARCHAR(20), IN disponibilidad TINYINT, IN precio_alquiler FLOAT, IN capacidad INT, IN imageURLVe VARCHAR(300))
BEGIN
    DECLARE matriculaCount INT;

    START TRANSACTION;

    -- Verificar si el vehículo ya existe por su matrícula
    SELECT COUNT(*) INTO matriculaCount FROM Vehiculo WHERE No_Matricula = No_Matricula;

    IF matriculaCount > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehículo con esta matrícula ya existe';
    ELSE
        IF No_Matricula = '' OR RUC = '' OR marca = '' OR precio_alquiler IS NULL OR capacidad IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        INSERT INTO Vehiculo(No_Matricula, RUC, marca, disponibilidad, precio_alquiler, capacidad, imageURLVe)
        VALUES (No_Matricula, RUC, marca, disponibilidad, precio_alquiler, capacidad, imageURLVe);
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE updateVehiculo(IN No_Matricula VARCHAR(7), IN RUC VARCHAR(10), IN marca VARCHAR(20), IN disponibilidad TINYINT, IN precio_alquiler FLOAT, IN capacidad INT, IN imageURLVe VARCHAR(300))
BEGIN
    DECLARE matriculaCount INT;

    START TRANSACTION;

    -- Verificar si el vehículo existe por su matrícula
    SELECT COUNT(*) INTO matriculaCount FROM Vehiculo WHERE No_Matricula = No_Matricula;

    IF matriculaCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehículo con esta matrícula no existe';
    ELSE
        IF No_Matricula = '' OR RUC = '' OR marca = '' OR precio_alquiler IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        UPDATE Vehiculo
        SET RUC = RUC, marca = marca, disponibilidad = disponibilidad, precio_alquiler = precio_alquiler, capacidad = capacidad, imageURLVe = imageURLVe
        WHERE No_Matricula = No_Matricula;
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE deleteVehiculo(IN No_Matricula VARCHAR(7))
BEGIN
    DECLARE matriculaCount INT;

    START TRANSACTION;

    -- Verificar si el vehículo existe por su matrícula
    SELECT COUNT(*) INTO matriculaCount FROM Vehiculo WHERE No_Matricula = No_Matricula;

    IF matriculaCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehículo con esta matrícula no existe';
    ELSE
        IF No_Matricula IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La matrícula del vehículo no puede ser NULL';
        END IF;

        DELETE FROM Vehiculo 
        WHERE No_Matricula = No_Matricula;
    END IF;

    COMMIT;
END;
//
DELIMITER ;


-- Reserva
DELIMITER //
CREATE PROCEDURE insertReserva(IN Id_Cliente INT, IN id_Inspector INT, IN No_Matricula VARCHAR(7), IN fecha_inicio DATE, IN hora_reserva TIME, IN ubicacion_recogida VARCHAR(50))
BEGIN
    DECLARE clienteCount INT;
    DECLARE inspectorCount INT;
    DECLARE matriculaCount INT;

    START TRANSACTION;

    -- Verificar si el cliente, el inspector y el vehículo existen
    SELECT COUNT(*) INTO clienteCount FROM Cliente WHERE Id_Cliente = Id_Cliente;
    SELECT COUNT(*) INTO inspectorCount FROM Inspector WHERE id_Inspector = id_Inspector;
    SELECT COUNT(*) INTO matriculaCount FROM Vehiculo WHERE No_Matricula = No_Matricula;

    IF clienteCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente especificado no existe';
    ELSEIF inspectorCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El inspector especificado no existe';
    ELSEIF matriculaCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehículo especificado no existe';
    ELSE
        IF Id_Cliente IS NULL OR id_Inspector IS NULL OR No_Matricula IS NULL OR hora_reserva IS NULL OR ubicacion_recogida = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        INSERT INTO Reserva(Id_Cliente, id_Inspector, No_Matricula, fecha_inicio, hora_reserva, ubicacion_recogida)
        VALUES (Id_Cliente, id_Inspector, No_Matricula, fecha_inicio, hora_reserva, ubicacion_recogida);
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE updateReserva(IN id_Reserva INT, IN Id_Cliente INT,IN id_Inspector INT, IN No_Matricula VARCHAR(7), IN fecha_inicio DATE, IN hora_reserva TIME, IN ubicacion_recogida VARCHAR(50))
BEGIN
    DECLARE reservaCount INT;
    DECLARE clienteCount INT;
    DECLARE inspectorCount INT;
    DECLARE matriculaCount INT;

    START TRANSACTION;

    -- Verificar si la reserva, el cliente, el inspector y el vehículo existen
    SELECT COUNT(*) INTO reservaCount FROM Reserva WHERE id_Reserva = id_Reserva;
    SELECT COUNT(*) INTO clienteCount FROM Cliente WHERE Id_Cliente = Id_Cliente;
    SELECT COUNT(*) INTO inspectorCount FROM Inspector WHERE id_Inspector = id_Inspector;
    SELECT COUNT(*) INTO matriculaCount FROM Vehiculo WHERE No_Matricula = No_Matricula;

    IF reservaCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La reserva especificada no existe';
    ELSEIF clienteCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El cliente especificado no existe';
    ELSEIF inspectorCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El inspector especificado no existe';
    ELSEIF matriculaCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehículo especificado no existe';
    ELSE
        IF id_Reserva IS NULL OR Id_Cliente IS NULL OR id_Inspector IS NULL OR No_Matricula = '' OR fecha_inicio IS NULL OR hora_reserva IS NULL OR ubicacion_recogida = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        UPDATE Reserva
        SET Id_Cliente = Id_Cliente, id_Inspector = id_Inspector, No_Matricula = No_Matricula, fecha_inicio = fecha_inicio, hora_reserva = hora_reserva, ubicacion_recogida = ubicacion_recogida
        WHERE id_Reserva = id_Reserva;
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE deleteReserva(IN id_Reserva INT)
BEGIN
    DECLARE reservaCount INT;

    START TRANSACTION;

    -- Verificar si la reserva existe
    SELECT COUNT(*) INTO reservaCount FROM Reserva WHERE id_Reserva = id_Reserva;

    IF reservaCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La reserva especificada no existe';
    ELSE
        IF id_Reserva IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El ID de la Reserva no puede ser NULL';
        END IF;

        DELETE FROM Reserva 
        WHERE id_Reserva = id_Reserva;
    END IF;

    COMMIT;
END;
//
DELIMITER ;

-- Recargo
DELIMITER //
CREATE PROCEDURE insertRecargo(IN id_Pago INT, IN cobertura_seguro VARCHAR(20), IN monto FLOAT, IN razon VARCHAR(100))
BEGIN
    DECLARE pagoCount INT;

    START TRANSACTION;

    -- Verificar si el pago existe
    SELECT COUNT(*) INTO pagoCount FROM Pago WHERE id_Pago = id_Pago;

    IF pagoCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El pago especificado no existe';
    ELSE
        IF id_Pago IS NULL OR cobertura_seguro = '' OR monto IS NULL OR razon = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        INSERT INTO Recargo(id_Pago, cobertura_seguro, monto, razon)
        VALUES(id_Pago, cobertura_seguro, monto, razon);
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE updateRecargo(IN id_Recargo INT, IN id_Pago INT, IN cobertura_seguro VARCHAR(20), IN monto FLOAT, IN razon VARCHAR(100))
BEGIN
    DECLARE recargoCount INT;
    DECLARE pagoCount INT;

    START TRANSACTION;

    -- Verificar si el recargo y el pago existen
    SELECT COUNT(*) INTO recargoCount FROM Recargo WHERE id_Recargo = id_Recargo;
    SELECT COUNT(*) INTO pagoCount FROM Pago WHERE id_Pago = id_Pago;

    IF recargoCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El recargo especificado no existe';
    ELSEIF pagoCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El pago especificado no existe';
    ELSE
        IF id_Recargo IS NULL OR id_Pago IS NULL OR cobertura_seguro = '' OR monto IS NULL OR razon = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        UPDATE Recargo
        SET id_Pago = id_Pago, cobertura_seguro = cobertura_seguro, monto = monto, razon = razon
        WHERE id_Recargo = id_Recargo;
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE deleteRecargo(IN id_Recargo INT)
BEGIN
    DECLARE recargoCount INT;

    START TRANSACTION;

    -- Verificar si el recargo existe
    SELECT COUNT(*) INTO recargoCount FROM Recargo WHERE id_Recargo = id_Recargo;

    IF recargoCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El recargo especificado no existe';
    ELSE
        IF id_Recargo IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El ID del Recargo no puede ser NULL';
        END IF;

        DELETE FROM Recargo
        WHERE id_Recargo = id_Recargo;
    END IF;

    COMMIT;
END;
//
DELIMITER ;


-- Devoluciones
DELIMITER //
CREATE PROCEDURE insertDevolucion(IN No_Matricula VARCHAR(7), IN Id_Cliente INT,IN estado_devolucion TINYINT, IN hora_devolucion TIME, IN hora_devolucion_real TIME, IN fecha_devolucion DATE, IN fecha_devolucion_real DATE, IN lugar_devolucion VARCHAR(100))
BEGIN
    DECLARE clienteCount INT;
    DECLARE vehiculoCount INT;

    START TRANSACTION;

    -- Verificar si el vehículo asociado a la devolución existe
    SELECT COUNT(*) INTO clienteCount FROM Cliente WHERE Id_Cliente = Id_Cliente;
    SELECT COUNT(*) INTO vehiculoCount FROM Vehiculo WHERE No_Matricula = No_Matricula;

    IF vehiculoCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehículo especificado no existe';
    ELSE
        IF No_Matricula IS NULL OR estado_devolucion IS NULL OR hora_devolucion IS NULL OR hora_devolucion_real IS NULL OR fecha_devolucion IS NULL OR fecha_devolucion_real IS NULL OR lugar_devolucion = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        INSERT INTO Devolucion(No_Matricula, Id_Cliente, estado_devolucion, hora_devolucion, hora_devolucion_real, fecha_devolucion, fecha_devolucion_real, lugar_devolucion)
        VALUES(No_Matricula, Id_Cliente, estado_devolucion, hora_devolucion, hora_devolucion_real, fecha_devolucion, fecha_devolucion_real, lugar_devolucion);
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE updateDevolucion(IN id_Devolucion INT, IN No_Matricula VARCHAR(7), IN Id_Cliente INT,IN estado_devolucion TINYINT, IN hora_devolucion TIME, IN hora_devolucion_real TIME, IN fecha_devolucion_real DATE, IN lugar_devolucion VARCHAR(100))
BEGIN
    DECLARE devolucionCount INT;
    DECLARE vehiculoCount INT;
    DECLARE clienteCount INT;

    START TRANSACTION;

    -- Verificar si la devolución y el vehículo existen
    
    SELECT COUNT(*) INTO clienteCount FROM Cliente WHERE Id_Cliente = Id_Cliente;
    SELECT COUNT(*) INTO devolucionCount FROM Devolucion WHERE id_Devolucion = id_Devolucion;
    SELECT COUNT(*) INTO vehiculoCount FROM Vehiculo WHERE No_Matricula = No_Matricula;

    IF devolucionCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La devolución especificada no existe';
    ELSEIF vehiculoCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El vehículo especificado no existe';
    ELSE
        IF id_Devolucion IS NULL OR No_Matricula IS NULL OR Id_Cliente IS NULL OR estado_devolucion IS NULL OR hora_devolucion IS NULL OR hora_devolucion_real IS NULL OR fecha_devolucion_real IS NULL OR lugar_devolucion = '' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Todos los campos deben estar completos';
        END IF;

        UPDATE Devolucion
        SET No_Matricula = No_Matricula, Id_Cliente, estado_devolucion = estado_devolucion, hora_devolucion = hora_devolucion, hora_devolucion_real = hora_devolucion_real, fecha_devolucion_real = fecha_devolucion_real, lugar_devolucion = lugar_devolucion
        WHERE id_Devolucion = id_Devolucion;
    END IF;

    COMMIT;
END;
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE deleteDevolucion(IN id_Devolucion INT)
BEGIN
    DECLARE devolucionCount INT;

    START TRANSACTION;

    -- Verificar si la devolución existe
    SELECT COUNT(*) INTO devolucionCount FROM Devolucion WHERE id_Devolucion = id_Devolucion;

    IF devolucionCount = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La devolución especificada no existe';
    ELSE
        IF id_Devolucion IS NULL THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El ID de la devolución no puede ser NULL';
        END IF;

        DELETE FROM Devolucion
        WHERE id_Devolucion = id_Devolucion;
    END IF;

    COMMIT;
END;
//
DELIMITER ;



-- indices

create index idx_indexpago on pago(Fecha);

create index idx_indexclie on cliente(Nombre);

create index idx_indexEmp on empresaalquiler(Nombre);

create index idx_indexVehi on vehiculo(Marca);

create index idx_indexReserva on reserva(Fecha_Inicio);


-- usuarios
CREATE USER 'Cliente'@'localhost' IDENTIFIED BY '1';
CREATE USER 'Inspector'@'localhost' IDENTIFIED BY '2';
CREATE USER 'Empresa'@'localhost' IDENTIFIED BY '3';
CREATE USER 'Administrador'@'localhost' IDENTIFIED BY '4';
CREATE USER 'Gerente'@'localhost' IDENTIFIED BY '5';


GRANT select, insert ON itso_mydb.* TO 'Operador'@'localhost';
GRANT select, update, insert, delete ON itso_mydb.* TO 'Inspector'@'localhost';
GRANT select, update , insert, delete ON itso_mydb.* TO 'Empresa'@'localhost';
GRANT ALL PRIVILEGES ON itso_mydb.* TO 'Administrador'@'localhost';
GRANT select, update, insert ON itso_mydb.* TO 'Gerente'@'localhost';

-- procedure permisos
GRANT EXECUTE ON PROCEDURE itso_mydb.deleteReserva TO 'Operador'@'localhost';
GRANT EXECUTE ON PROCEDURE itso_mydb.insertDevolucion TO 'Inspector'@'localhost';
GRANT EXECUTE ON PROCEDURE itso_mydb.insertVehiculo TO 'Empresa'@'localhost';
GRANT EXECUTE ON PROCEDURE itso_mydb.deleteEmpresaAlquiler TO 'Administrado'@'localhost';
GRANT EXECUTE ON PROCEDURE itso_mydb.deleteDevolucion TO 'Gerente'@'localhost';

-- vistas premisos
GRANT SELECT, insert  ON itso_mydb.GananciasPorMarca TO 'Administrador'@'localhost';
GRANT SELECT, insert ON itso_mydb.PromedioTiempoAlquiler TO 'Operador'@'localhost';
GRANT SELECT, update ON itso_mydb.ReservaVehiculosNoReclamados TO 'Gerente'@'localhost';
GRANT SELECT,  update on itso_mydb.VehiculosReservadosNoDevueltos TO 'Inspector'@'localhost';
GRANT SELECT, insert ON itso_mydb.GananciasPorMarca TO 'Empresa'@'localhost';


FLUSH PRIVILEGES;
