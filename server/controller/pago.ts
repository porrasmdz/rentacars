import { H3Event } from "h3";
import * as pagoModel from "~~/server/model/pago";
const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await pagoModel.read();
    const total = await pagoModel.getTotal();
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
    const result = await pagoModel.create({
      Id_Cliente: body.Id_Cliente,
      Monto: body.Monto,
      Fecha: body.Fecha,
      
      conf_pago: body.conf_pago,
      Plazo: body.Plazo,
      Forma_pago: body.Forma_pago,
     
    });
    return {
      data: result,
    };
  } catch (error :any) {
    
    throw createError({
      statusCode: 500,
      statusMessage: error.message ?? UNKNOWM_ERROR,
    });
  }
};

export const detail = async (evt: H3Event) => {
  try {
    const result = await pagoModel.detail(
      Number.parseInt(evt.context.params?.id_pago || "1") as Number
    );
    return {
      data: result,
    };
  } catch (error:any) {
    throw createError({
      statusCode: 500,
      statusMessage: error?.message ?? UNKNOWM_ERROR,
    });
  }
};

export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await pagoModel.update(
      Number.parseInt(evt.context.params?.id_pago || "1") as Number,
      {
        Id_Cliente: body.Id_Cliente,
        Monto: body.Monto,
        Fecha: body.Fecha,
        
        conf_pago: body.conf_pago,
        Plazo: body.Plazo,
        Forma_pago: body.Forma_pago,
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
      console.log("Received params ", evt.context.params)
      const result = await pagoModel.remove(
        Number.parseInt(evt.context.params?.id_pago || "1") as Number
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