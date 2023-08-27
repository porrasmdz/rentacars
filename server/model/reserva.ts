import {sql} from '~~/server/db';


export type ReservaModel = {
    id_Reserva?:Number,
    
    Id_Cliente: Number,
    No_Matricula: string,
    Id_Inspector: Number,      
    Fecha_Inicio: Date,
    Hora_reserva: string,
    
    ubicacion_recogida: string,
};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Reserva'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM Reserva'
    }) as any;

    return result as ReservaModel;
};


export const create = async (data: ReservaModel) => {
    console.log("values",Object.values(data));
    const result = await sql({
        query: `
        CALL insertReserva(?,?,?,?,?,?)`,
        values:[data.Id_Cliente,data.Id_Inspector,data.No_Matricula, data.Fecha_Inicio, data.Hora_reserva, data.ubicacion_recogida]
    }) as any;
    return result.length === 1 ? (result[0] as ReservaModel) : null;
}

export const detail = async (id: Number) => {
    const result  = await sql({
        query: 'SELECT * FROM Reserva WHERE id_Reserva = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as ReservaModel) : null;
};

export const update = async (id: Number, data: ReservaModel) => {
    await sql({
        query: `
        CALL updateReserva(?,?,?,?,?,?,?)`,
        values:[  
            id,
            data.Id_Cliente,
            data.Id_Inspector,
            data.No_Matricula,      
            data.Fecha_Inicio,
            data.Hora_reserva,
            data.ubicacion_recogida]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    await sql({
        query: 'CALL deleteReserva(?)',
        values: [id]
    });

    return true;
}