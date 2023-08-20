import { H3Event } from "h3";
import * as vehiculoModel from "~~/server/model/vehiculo";

const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await vehiculoModel.read();
    const total = await vehiculoModel.getTotal();
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
    const result = await vehiculoModel.create({
     
      No_Matricula: body.No_Matricula,
      RUC: body.RUC,
      Marca: body.Marca,
      Disponibilidad: body.Disponibilidad,
      Precio_alquiler: body.Precio_alquiler,
      Capacidad: body.Capacidad,
      imageURLVe: body.imageURLVe
     
     
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
    const result = await vehiculoModel.detail(
      evt.context.params?.id_vehiculo ?? ""
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
    const result = await vehiculoModel.update(
      evt.context.params?.id_vehiculo ?? "",
      {
        RUC: body.RUC,
        Marca: body.Marca,
        Disponibilidad: body.Disponibilidad,
        Precio_alquiler: body.Precio_alquiler,
        Capacidad: body.Capacidad,
        imageURLVe: body.imageURLVe
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
      const result = await vehiculoModel.remove(
        evt.context.params?.id_vehiculo ?? ""
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