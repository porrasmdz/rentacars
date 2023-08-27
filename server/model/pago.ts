import {sql} from '~~/server/db';


export type PagoModel = {
    Id_Pago?:Number,
    id_Devolucion?: Number,
    Id_Cliente:Number,
    Monto:Number,
    Fecha?:Date,
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
    const result = await sql({
        query: `
        CALL insertPago(?,?,?,?,?,?)
        
        `,
        values:[data.Id_Cliente, data.id_Devolucion, data.Monto, data.conf_pago, data.Plazo, data.Forma_pago]
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
        CALL updatePago(?,?,?,?,?,?,?,?)
       `,
        values:[id, data.Id_Cliente, data.id_Devolucion, data.Monto, data.Fecha, data.conf_pago, data.Plazo, data.Forma_pago]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    await sql({
        query: `
        CALL deletePago(?)
        `,
        values: [id]
    });

    return true;
}