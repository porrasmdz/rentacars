import {sql} from '~~/server/db';


export type PagoModel = {
    Id_Pago?:Number,
    
    Id_Cliente:Number,
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
        INSERT INTO Pago (
            
            Id_Cliente,
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
        UPDATE Pago
        SET
            
        Id_Cliente = ?,
        Monto =  ?,
        Fecha = ?,
        conf_pago = ?,
        Plazo = ?,
        Forma_pago = ?

    
        WHERE id_Pago = ?
        `,
        values:[data.Id_Cliente,data.Monto,data.Fecha,data.conf_pago,data.Plazo,data.Forma_pago, id]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    console.log("Received ", id)
    await sql({
        query: 'DELETE FROM Pago WHERE id_Pago =?',
        values: [id]
    });

    return true;
}