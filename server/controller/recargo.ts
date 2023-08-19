import { H3Event } from "h3";
import * as recargoModel from "~~/server/model/recargo";

export const read = async () => {
  try {
    const result = await recargoModel.read();
    const total = await recargoModel.getTotal();
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating recharges",
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error fetching recharges",
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating recharges",
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
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Error removing recharges",
      });
    }
  };