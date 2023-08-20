import { H3Event } from "h3";
import * as inspectorModel from "~~/server/model/inspector";

const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await inspectorModel.read();
    const total = await inspectorModel.getTotal();
    return {
      data: result,
      total
    };
  } catch (error:any) {
    throw createError({
      statusCode: 500,
      statusMessage:  error.message ?? UNKNOWM_ERROR,
    });
  }
};

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await inspectorModel.create({
      
      Nombre: body.Nombre,
      Email: body.Email,
      Celular: body.Celular,
      imageURLFotoin: body.imageURLFotoin,
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
    const result = await inspectorModel.detail(
      evt.context.params?.id_inspector as string
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
    const result = await inspectorModel.update(
      evt.context.params?.id_inspector as string,
      {
       
        Nombre: body.Nombre,
        
        Email: body.Email,
        Celular: body.Celular,
        imageURLFotoin: body.imageURLFotoin
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
      const result = await inspectorModel.remove(
        evt.context.params?.id_inspector as string
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