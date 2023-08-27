import { H3Event } from "h3";
import * as clienteModel from "~~/server/model/cliente";
const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await clienteModel.read();
    const total = await clienteModel.getTotal();
    return {
      data: result,
      total
    };
  } catch (error) {
   
      
    throw createError({
      statusCode: 500,
      statusMessage: error as string ,
    });
  }
};

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await clienteModel.create({
      
      Nombre: body.Nombre,
      Apellido: body.Apellido,
      
      Fecha_Nacimiento: body.Fecha_Nacimiento,
      Email: body.Email,
      Celular: body.Celular,
      Edad: body.Edad,
      Licencia: body.Licencia,
      id_Inspector : body.id_Inspector
    });
    return {
      data: result,
    };
  } catch (error:any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message ?? UNKNOWM_ERROR,
    });
  }
};

export const detail = async (evt: H3Event) => {
  try {
    const result = await clienteModel.detail(
      evt.context.params?.id_cliente as string
    );
    return {
      data: result,
    };
  } catch (error:any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message ?? UNKNOWM_ERROR,
    });
  }
};

export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await clienteModel.update(
      evt.context.params?.id_cliente as string,

      {
        Nombre: body.Nombre,
        Apellido: body.Apellido,
         
        Fecha_Nacimiento: body.Fecha_Nacimiento,
        Email: body.Email,
        Celular: body.Celular,
        Edad: body.Edad,
        Licencia: body.Licencia,
        id_Inspector: body.id_Inspector
      }
    );
    return {
      data: result,
    };
  } catch (error:any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message ?? UNKNOWM_ERROR,
    });
  }
};


export const remove = async (evt: H3Event) => {
    try {
      const result = await clienteModel.remove(
        evt.context.params?.id_cliente as string
      );
      return {
        data: result,
      };
    } catch (error:any) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message ?? UNKNOWM_ERROR
      });
    }
  };