import {sql} from '~~/server/db';


export type DevolucionModel = {
    
    id_Devolucion?: Number,
    No_Matricula: string
    Estado_Devolucion: Number,
    Hora_devolucion: string,
    Hora_devolucion_real: string,
    Fecha_devolucion: string,
    Fecha_devolucion_real: string,
    Lugar_devolucion: string

};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Devolucion'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM Devolucion'
    }) as any;

    return result as DevolucionModel;
};


export const create = async (data: DevolucionModel) => {
    console.log(Object.values(data));
    const result = await sql({
        query: `
        INSERT INTO devolucion (
            
        No_Matricula,
        Estado_Devolucion,
        Hora_devolucion,
        Hora_devolucion_real,
        Fecha_devolucion,
        Fecha_devolucion_real,
        Lugar_devolucion
    
        ) VALUES (
            ?,
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
    return result.length === 1 ? (result[0] as DevolucionModel) : null;
}

export const detail = async (id: Number) => {
    const result  = await sql({
        query: 'SELECT * FROM Devolucion WHERE id_Devolucion = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as DevolucionModel) : null;
};

export const update = async (id: Number, data: DevolucionModel) => {
    await sql({
        query: `
        UPDATE devolucion
        SET
            
        
        No_Matricula = ?,
        Estado_Devolucion = ?,
        Hora_devolucion = ?,
        Hora_devolucion_real = ?,
        Fecha_devolucion = ?,
        Fecha_devolucion_real = ?,
        Lugar_devolucion = ?
    
        WHERE id_Devolucion = ?
        `,
        values:[  
            data.No_Matricula,
            data.Estado_Devolucion,
            data.Hora_devolucion,
            data.Hora_devolucion_real,
            data.Fecha_devolucion,
            data.Fecha_devolucion_real,
            data.Lugar_devolucion, id]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    await sql({
        query: 'DELETE FROM Devolucion WHERE id_Devolucion =?',
        values: [id]
    });

    return true;
}