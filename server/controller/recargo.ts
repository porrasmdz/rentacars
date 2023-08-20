import { H3Event } from "h3";
import * as recargoModel from "~~/server/model/recargo";

const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await recargoModel.read();
    const total = await recargoModel.getTotal();
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
    const result = await recargoModel.create({
     
      Id_pago: body.Id_pago,
      Fecha: body.Fecha,
      Cobertura_Seguro: body.Cobertura_Seguro,
      Monto : body.Monto,
      Razon: body.Razon
     
     
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
    const result = await recargoModel.detail(
      Number.parseInt(evt.context.params?.id_recargo || "1") as Number
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
    const result = await recargoModel.update(
      Number.parseInt(evt.context.params?.id_recargo || "1") as Number,
      {
        Id_pago: body.Id_pago,
        Fecha: body.Fecha,
        Cobertura_Seguro: body.Cobertura_Seguro,
        Monto : body.Monto,
        Razon: body.Razon
       
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
      const result = await recargoModel.remove(
        Number.parseInt(evt.context.params?.id_recargo || "1") as Number
      );
      return {
        data: result,
      };
    } catch (error: any) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message ?? UNKNOWM_ERROR,
      });
    }
  };