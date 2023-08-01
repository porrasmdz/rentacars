import {sql} from '~~/server/db';


export type ClienteModel = {
    id_Cliente:string,
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
        query: 'SELECT id_Cliente, Nombre, Apellido, Fecha_Nacimiento, Email, Celular, Edad, Licencia FROM Cliente'
    }) as any;

    return result as ClienteModel;
};


export const create = async (data: ClienteModel) => {
    const result = await sql({
        query: `
        INSERT INTO cliente (
            id_cliente,
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
        values:[data.id_cliente,data.nombre,data.apellido,data.fecha_nacim,data.email,data.celular,data.edad,data.licencia]
    }) as any;
    return result.length === 1 ? (result[0] as ClienteModel) : null;
}

export const detail = async (id: string) => {
    const result  = await sql({
        query: 'SELECT id_Cliente, Nombre, Apellido, Fecha_Nacimiento, Email, Celular, Edad, Licencia FROM Cliente WHERE id_Cliente = ?',
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
        WHERE id_cliente = ?
        `,
        values:[data.nombre,data.apellido,data.fecha_nacim,data.email,data.celular,data.edad,data.licencia, id]
    });
    return await detail(id);
}

export const remove = async (id: string) => {
    await sql({
        query: 'DELETE FROM Cliente WHERE id_cliente =?',
        values: [id]
    });

    return true;
}