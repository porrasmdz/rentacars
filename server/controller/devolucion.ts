import { H3Event } from "h3";
import * as devolucionModel from "~~/server/model/devolucion";

const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await devolucionModel.read();
    const total = await devolucionModel.getTotal();
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
    const result = await devolucionModel.create({
     
      No_Matricula: body.No_Matricula,
      Id_Cliente: body.Id_Cliente,
      Estado_devolucion: body.Estado_devolucion,
      Hora_devolucion: body.Hora_devolucion,
      
      Fecha_devolucion: body.Fecha_devolucion,
      Lugar_devolucion: body.Lugar_devolucion
     
     
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
    const result = await devolucionModel.detail(
      Number.parseInt(evt.context.params?.id_devolucion || "1") as Number
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
    const result = await devolucionModel.update(
      Number.parseInt(evt.context.params?.id_devolucion || "1") as Number,
      {
        No_Matricula: body.No_Matricula,
        Id_Cliente: body.Id_Cliente,
        Estado_devolucion: body.Estado_devolucion,
        Hora_devolucion: body.Hora_devolucion,
        Hora_devolucion_real: body.Hora_devolucion_real,
        Fecha_devolucion: body.Fecha_devolucion,
        Fecha_devolucion_real: body.Fecha_devolucion_real,
        Lugar_devolucion: body.Lugar_devolucion
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
      const result = await devolucionModel.remove(
        Number.parseInt(evt.context.params?.id_devolucion || "1") as Number
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