import {sql} from '~~/server/db';


export type ReporteModel = {
    
    IngresosTotales?: string
    RecargosTotales?: string,
    No_Matricula?: string,
    Marca?: string,

    id_Cliente?: Number,
    Cliente_Nombre?: string,
    Cliente_Apellido?: string,
    Dias_Promedio_Alquiler?: Number,
    
    id_Reserva?: Number,
    Fecha_Reserva?: Date,
    Hora_Reserva?: string,
    Ubicacion_Recogida?: string,
    Dias_Sin_Retirar?: Number

    id_Devolucion?: Number,
    Vehiculo_No_Matricula?: string,
    Vehiculo_Marca?: string,
    Fecha_Entrega_Esperada?: Date,
    Dias_de_Atraso?: Number,
    Cliente_Email?: string,
    Cliente_Celular?: string

};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Reporte'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM Reporte'
    }) as any;

    return result as ReporteModel;
};




export const detail = async (Reporte: string) => {
    switch (Reporte) {
        case 'GananciasPorMarca':
            const result  = await sql({
                query: `SELECT * FROM GananciasPorMarca`,
               
            }) as any;
        
            return result as ReporteModel ;
        break;
        case 'TiempoPromedio':
            const result2  = await sql({
                query: `SELECT * FROM PromedioTiempoAlquilerVehiculosPorCliente`,
               
            }) as any;
           
        
            return result2 as ReporteModel;
        break;
        case 'ReservasNoReclamadas':
        const result3  = await sql({
            query: `SELECT * FROM ReservasVehiculosNoReclamados`,
           
        }) as any;
       
        return result3 as ReporteModel;
        case 'NoDevueltos':
        const result4  = await sql({
            query: `SELECT * FROM VehiculosReservadosNoDevueltos`,
           
        }) as any;
        console.log("queryres", result4)
    
        return result4 as ReporteModel;
    break;
    }
    };



