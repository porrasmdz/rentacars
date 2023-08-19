import {sql} from '~~/server/db';


export type RecargoModel = {
    id_Recargo?: Number,
    Id_pago: Number,
    Fecha: Date,
    Cobertura_Seguro: string,
    Monto : Number,
    Razon: string

};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Recargo'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM Recargo'
    }) as any;

    return result as RecargoModel;
};


export const create = async (data: RecargoModel) => {
    console.log(Object.values(data));
    const result = await sql({
        query: `
        INSERT INTO recargo (
            
            Id_pago,
            Fecha,
            Cobertura_Seguro,
            Monto ,
            Razon
        

        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?
            
           
        ) RETURNING *
        `,
        values:Object.values(data)
    }) as any;
    return result.length === 1 ? (result[0] as RecargoModel) : null;
}

export const detail = async (id: Number) => {
    const result  = await sql({
        query: 'SELECT * FROM Recargo WHERE id_Recargo = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as RecargoModel) : null;
};

export const update = async (id: Number, data: RecargoModel) => {
    await sql({
        query: `
        UPDATE recargo
        SET
            
        
        Id_pago = ?,
        Fecha = ?,
        Cobertura_Seguro = ?,
        Monto  = ?,
        Razon = ?
    
        WHERE id_Recargo = ?
        `,
        values:[  
            data.Id_pago,
            data.Fecha,
            data.Cobertura_Seguro,
            data.Monto ,
            data.Razon, id]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    await sql({
        query: 'DELETE FROM Recargo WHERE id_Recargo =?',
        values: [id]
    });

    return true;
}