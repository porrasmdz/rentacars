import { H3Event } from "h3";
import * as reservaModel from "~~/server/model/reserva";

const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await reservaModel.read();
    const total = await reservaModel.getTotal();
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
    const result = await reservaModel.create({
      Id_Cliente: body.Id_Cliente,

      Id_Inspector: body.Id_Inspector,   
      No_Matricula: body.No_Matricula,   
      Fecha_Inicio: body.Fecha_Inicio,
      Hora_reserva: body.Hora_reserva,
      
      ubicacion_recogida: body.ubicacion_recogida,
     
     
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
    const result = await reservaModel.detail(
      Number.parseInt(evt.context.params?.id_reserva || "1") as Number
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
    const result = await reservaModel.update(
      Number.parseInt(evt.context.params?.id_reserva || "1") as Number,
      {
        Id_Cliente: body.Id_Cliente,
        No_Matricula: body.No_Matricula,
        Id_Inspector: body.Id_Inspector,      
        Fecha_Inicio: body.Fecha_Inicio,
        Hora_reserva: body.Hora_reserva,
        
        ubicacion_recogida: body.ubicacion_recogida,
       
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
      const result = await reservaModel.remove(
        Number.parseInt(evt.context.params?.id_reserva || "1") as Number
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