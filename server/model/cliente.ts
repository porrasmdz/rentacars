import {sql} from '~~/server/db';


export type ClienteModel = {
    id_Cliente:Number,
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
        query: 'SELECT COUNT(*) AS "total" FROM cliente'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM cliente'
    }) as any;

    return result as ClienteModel;
};


export const create = async (data: ClienteModel) => {
    const result = await sql({
        query: `
        INSERT INTO cliente (
            id_Cliente,
            nombre,
            apellido,
            fecha_nacimiento,
            email,
            celular,
            edad,
            licencia

        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        ) RETURNING *
        `,
        values:[data.id_Cliente,data.Nombre,data.Apellido,data.Fecha_Nacimiento,data.Email,data.Celular,data.Edad,data.Licencia]
    }) as any;
    return result.length === 1 ? (result[0] as ClienteModel) : null;
}

export const detail = async (id: string) => {
    const result  = await sql({
        query: 'SELECT * FROM cliente WHERE id_Cliente = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as ClienteModel) : null;
};

export const update = async (id:string, data: ClienteModel) => {
    await sql({
        query: `
        UPDATE cliente
        SET
            nombre = ?,
            apellido = ?,
            fecha_nacimiento = ?,
            email = ? ,
            celular = ?,
            edad = ?,
            licencia = ?
        WHERE id_Cliente = ?
        `,
        values:[data.Nombre,data.Apellido,data.Fecha_Nacimiento,data.Email,data.Celular,data.Edad,data.Licencia, id]
    });
    return await detail(id);
}

export const remove = async (id: string) => {
    await sql({
        query: 'DELETE FROM cliente WHERE id_Cliente =?',
        values: [id]
    });

    return true;
}