import {sql} from '~~/server/db';


export type ReservaModel = {
    id_Reserva?:Number,
    
    id_Cliente: Number,

    id_Inspector: Number,      
    Fecha_Inicio: Date,
    Hora_Reserva: string,
    
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
        INSERT INTO reserva (
            
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
           
        ) 
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
        UPDATE reserva
        SET
            
        
        id_Cliente = ?,
        id_Inspector = ?,      
        Fecha_Inicio = ?,
        Hora_Reserva = ?,
        ubicacion_recogida = ?,
    
        WHERE id_Reserva = ?
        `,
        values:[  
            data.id_Cliente,
            data.id_Inspector,      
            data.Fecha_Inicio,
            data.Hora_Reserva,
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