import {sql} from '~~/server/db';


export type RecargoModel = {
    id_Recargo?: Number,
    Id_pago: Number,
    Fecha?: Date,
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
        CALL insertRecargo(?,?,?,?)
        
        `,
        values:[data.Id_pago, data.Cobertura_Seguro, data.Monto, data.Razon]
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
    //CONTINUE
    await sql({
        query: `
        CALL updateRecargo(?,?,?,?,?)
      
        `,
        values:[  
            id,
            data.Id_pago,
            data.Cobertura_Seguro,
            data.Monto ,
            data.Razon]
    });
    return await detail(id);
}

export const remove = async (id: Number) => {
    await sql({
        query: 'CALL deleteRecargo(?)',
        values: [id]
    });

    return true;
}