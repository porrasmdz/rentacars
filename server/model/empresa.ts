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
        CALL insertEmpresaAlquiler(?,?,?)
        
        `,
        values:[data.RUC, data.Nombre, data.imageURLLogo]
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
        CALL updateEmpresaAlquiler(?,?,?)
        `,
        values:[ 
            id, 
            data.Nombre,
            data.imageURLLogo,
        ]
    });
    return await detail(id);
}

export const remove = async (id: string) => {
    await sql({
        query: 'CALL deleteEmpresaAlquiler(?)',
        values: [id]
    });

    return true;
}