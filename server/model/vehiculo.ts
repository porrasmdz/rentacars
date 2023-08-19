import {sql} from '~~/server/db';


export type VehiculoModel = {
    
    No_Matricula?: string
    RUC: string,
    Marca: string,
    Disponibilidad: Number,
    Precio_alquiler: Number,
    Capacidad: Number,
    imageURLVe: string

};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Vehiculo'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM Vehiculo'
    }) as any;

    return result as VehiculoModel;
};


export const create = async (data: VehiculoModel) => {
    
    const result = await sql({
        query: `
        INSERT INTO vehiculo (     
        No_Matricula,
        RUC,
        Marca,
        Disponibilidad,
        Precio_alquiler,
        Capacidad,
        imageURLVe
    
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
    return result.length === 1 ? (result[0] as VehiculoModel) : null;
}

export const detail = async (No_Matricula: string) => {
    const result  = await sql({
        query: 'SELECT * FROM Vehiculo WHERE No_Matricula = ?',
        values : [No_Matricula]
    }) as any;

    return result.length === 1 ? (result[0] as VehiculoModel) : null;
};

export const update = async (No_Matricula: string, data: VehiculoModel) => {
    await sql({
        query: `
        UPDATE vehiculo
        SET
            
       
        RUC = ?,
        Marca = ?,
        Disponibilidad = ?,
        Precio_alquiler = ?,
        Capacidad = ?,
        imageURLVe = ?
    
        WHERE No_Matricula = ?
        `,
        values:[  
        data.RUC,
        data.Marca,
        data.Disponibilidad,
        data.Precio_alquiler,
        data.Capacidad,
        data.imageURLVe, No_Matricula]
    });
    return await detail(No_Matricula);
}

export const remove = async (No_Matricula: string) => {
    await sql({
        query: 'DELETE FROM Vehiculo WHERE No_Matricula =?',
        values: [No_Matricula]
    });

    return true;
}