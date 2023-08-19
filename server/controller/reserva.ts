import { H3Event } from "h3";
import * as reservaModel from "~~/server/model/reserva";

export const read = async () => {
  try {
    const result = await reservaModel.read();
    const total = await reservaModel.getTotal();
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
    const result = await reservaModel.create({
      id_Cliente: body.id_Cliente,

      id_Inspector: body.id_Inspector,      
      Fecha_Inicio: body.Fecha_Inicio,
      Hora_Reserva: body.Hora_Reserva,
      
      ubicacion_recogida: body.ubicacion_recogida,
     
     
    });
    return {
      data: result,
    };
  } catch (error) {
    
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating reservation",
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error fetching reservations",
    });
  }
};

export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await reservaModel.update(
      Number.parseInt(evt.context.params?.id_reserva || "1") as Number,
      {
        id_Cliente: body.id_Cliente,

        id_Inspector: body.id_Inspector,      
        Fecha_Inicio: body.Fecha_Inicio,
        Hora_Reserva: body.Hora_Reserva,
        
        ubicacion_recogida: body.ubicacion_recogida,
       
      }
    );
    return {
      data: result,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating reservation",
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
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Error removing reservation",
      });
    }
  };