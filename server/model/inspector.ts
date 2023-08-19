import {sql} from '~~/server/db';


export type InspectorModel = {
    id_Inspector:string,
    Nombre: string,
    Email: string,
    Celular: string
    
};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM Inspector'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT id_Inspector, Nombre, Email, Celular FROM Inspector'
    }) as any;

    return result as InspectorModel;
};


export const create = async (data: InspectorModel) => {
    const result = await sql({
        query: `
        INSERT INTO inspector (
            id_Inspector,
            Nombre,
            Email,
            Celular,
            
        ) VALUES (
            ?,
            ?,
            ?,
            ?
        ) RETURNING *
        `,
        values:[data.id_Inspector,data.Nombre,data.Email,data.Celular]
    }) as any;
    return result.length === 1 ? (result[0] as InspectorModel) : null;
}

export const detail = async (id: string) => {
    const result  = await sql({
        query: 'SELECT id_Inspector, Nombre, Email, Celular FROM Inspector WHERE id_Inspector = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as InspectorModel) : null;
};

export const update = async (id:string, data: InspectorModel) => {
    await sql({
        query: `
        UPDATE inspector
        SET
            Nombre = ?,
            Email = ? ,
            Celular = ?,
            
        WHERE id_inspector = ?
        `,
        values:[data.Nombre,data.Email,data.Celular, id]
    });
    return await detail(id);
}

export const remove = async (id: string) => {
    await sql({
        query: 'DELETE FROM Inspector WHERE id_Inspector =?',
        values: [id]
    });

    return true;
}