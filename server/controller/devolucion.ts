import { H3Event } from "h3";
import * as devolucionModel from "~~/server/model/devolucion";

export const read = async () => {
  try {
    const result = await devolucionModel.read();
    const total = await devolucionModel.getTotal();
    return {
      data: result,
      total
    };
  } catch (error) {
    console.log(error);
      
    throw createError({
      statusCode: 500,
      statusMessage: error as string ,
    });
  }
};

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await devolucionModel.create({
     
      No_Matricula: body.No_Matricula,
      Estado_Devolucion: body.Estado_Devolucion,
      Hora_devolucion: body.Hora_devolucion,
      Hora_devolucion_real: body.Hora_devolucion_real,
      Fecha_devolucion: body.Fecha_devolucion,
      Fecha_devolucion_real: body.Fecha_devolucion_real,
      Lugar_devolucion: body.Lugar_devolucion
     
     
    });
    return {
      data: result,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating devolutions",
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error fetching devolutions",
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
        Estado_Devolucion: body.Estado_Devolucion,
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating devolutions",
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
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Error removing devolutions",
      });
    }
  };