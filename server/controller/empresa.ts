import { H3Event } from "h3";
import * as empresaModel from "~~/server/model/empresa";

const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await empresaModel.read();
    const total = await empresaModel.getTotal();
    return {
      data: result,
      total
    };
  } catch (error:any) {
      
    throw createError({
      statusCode: 500,
      statusMessage: error.message ?? UNKNOWM_ERROR,
    });
  }
};

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await empresaModel.create({
     
      RUC: body.RUC,
      Nombre: body.Nombre,
      imageURLLogo: body.imageURLLogo,     
     
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
    const result = await empresaModel.detail(
      evt.context.params?.id_empresa ?? ''
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
    const result = await empresaModel.update(
      evt.context.params?.id_empresa ?? '',
      {
        Nombre : body.Nombre,
        imageURLLogo : body.imageURLLogo
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
      const result = await empresaModel.remove(
        evt.context.params?.id_empresa ?? ''
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