import {sql} from '~~/server/db';


export type PagoModel = {
    id_Pago?:Number,
    
    id_Cliente:Number,
    Monto:Number,
    Fecha:Date,
    conf_pago: Number,
    Plazo:Date,
    Forma_pago: string
};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Pago'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM Pago'
    }) as any;

    return result as PagoModel;
};


export const create = async (data: PagoModel) => {
    console.log(Object.values(data));
    const result = await sql({
        query: `
        INSERT INTO pago (
            
            id_Cliente,
            Monto,
            Fecha,
            conf_pago,
            Plazo,
            Forma_pago

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
    return result.length === 1 ? (result[0] as PagoModel) : null;
}

export const detail = async (id: Number) => {
    const result  = await sql({
        query: 'SELECT * FROM Pago WHERE id_Pago = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as PagoModel) : null;
};

export const update = async (id: Number, data: PagoModel) => {
    await sql({
        query: `
        UPDATE pago
        SET
            
        id_Cliente = ?,
        Monto =  ?,
        Fecha = ?,
        conf_pago = ?,
        Plazo = ?,
        Forma_pago = ?

    
        WHERE id_Pago = ?
        `,
        values:[data.id_Cliente,data.Monto,data.Fecha,data.conf_pago,data.Plazo,data.Forma_pago, id]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    await sql({
        query: 'DELETE FROM Pago WHERE id_Pago =?',
        values: [id]
    });

    return true;
}