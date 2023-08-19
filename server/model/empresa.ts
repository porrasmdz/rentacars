import {sql} from '~~/server/db';


export type EmpresaModel = {
    RUC?: string,
    Nombre: string
    imageURLLogo: string,
    
};

export const getTotal = async() => {
    const result  = await sql({
        query: 'SELECT COUNT(*) AS "total" FROM EmpresaAlquiler'
    }) ;
    
    return result[0].total as Number;
};

export const read = async() => {
    const result  = await sql({
        query: 'SELECT * FROM EmpresaAlquiler'
    }) as any;

    return result as EmpresaModel;
};


export const create = async (data: EmpresaModel) => {
    console.log(Object.values(data));
    const result = await sql({
        query: `
        INSERT INTO empresaalquiler (
            
        RUC,
        Nombre,
        imageURLLogo
    
        ) VALUES (
            ?,
            ?,
            ?
            
           
        ) RETURNING *
        `,
        values:Object.values(data)
    }) as any;
    return result.length === 1 ? (result[0] as EmpresaModel) : null;
}

export const detail = async (id: string) => {
    const result  = await sql({
        query: 'SELECT * FROM EmpresaAlquiler WHERE RUC = ?',
        values : [id]
    }) as any;

    return result.length === 1 ? (result[0] as EmpresaModel) : null;
};

export const update = async (id: string, data: EmpresaModel) => {
    await sql({
        query: `
        UPDATE empresaalquiler
        SET
        
        Nombre = ?,
        imageURLLogo = ?
    
    
        WHERE RUC = ?
        `,
        values:[  
            data.Nombre,
            data.imageURLLogo,
            , id]
    });
    return await detail(id);
}

export const remove = async (id: string) => {
    await sql({
        query: 'DELETE FROM EmpresaAlquiler WHERE RUC = ?',
        values: [id]
    });

    return true;
}