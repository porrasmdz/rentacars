import {sql} from '~~/server/db';


export type ClienteModel = {
    id_Cliente?:Number,
    id_Inspector: Number,
    Nombre: string,
    Apellido: string,
    Fecha_Nacimiento: Date,
    Email: string,
    Celular: string,
    Edad: number,
    Licencia: number
    
};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Cliente'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM Cliente'
    }) as any;

    return result as ClienteModel;
};


export const create = async (data: ClienteModel) => {
   
    const result = await sql({
        query: `
        CALL insertCliente(?,?,?,?,?,?,?,?)
        `,
        values:[data.Nombre,data.Apellido,data.Fecha_Nacimiento,data.Email,data.Celular,data.Edad,data.Licencia,data.id_Inspector]
    }) as any;
    return result.length === 1 ? (result[0] as ClienteModel) : null;
}

export const detail = async (id: string) => {
    const result  = await sql({
        query: 'SELECT * FROM Cliente WHERE id_Cliente = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as ClienteModel) : null;
};

export const update = async (id:string, data: ClienteModel) => {
    await sql({
        query: `
        CALL updateCliente(?,?,?,?,?,?,?,?,?)
        
        `,
        values:[id, data.Nombre,data.Apellido,data.Fecha_Nacimiento,data.Email,data.Celular,data.Edad,data.Licencia, data.id_Inspector]
    });
    return await detail(id);
}

export const remove = async (id: string) => {
    await sql({
        query: 'CALL deleteCliente(?)',
        values: [id]
    });

    return true;
}