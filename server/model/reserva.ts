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
        INSERT INTO Reserva (
            
            Id_Cliente,
            Id_Inspector,    
            No_Matricula,  
            Fecha_Inicio,
            Hora_reserva,
            ubicacion_recogida

        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
           
        ) RETURNING *
        `,
        values:Object.values(data)
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
        UPDATE Reserva
        SET
            
        
        id_Cliente = ?,
        id_Inspector = ?,   
        No_Matricula = ?,      
        Fecha_Inicio = ?,
        Hora_reserva = ?,
        ubicacion_recogida = ?
    
        WHERE id_Reserva = ?
        `,
        values:[  
            data.Id_Cliente,
            data.Id_Inspector,
            data.No_Matricula,      
            data.Fecha_Inicio,
            data.Hora_reserva,
            data.ubicacion_recogida, id]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    await sql({
        query: 'DELETE FROM Reserva WHERE id_Reserva =?',
        values: [id]
    });

    return true;
}