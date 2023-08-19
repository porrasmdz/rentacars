import { H3Event } from "h3";
import * as pagoModel from "~~/server/model/pago";

export const read = async () => {
  try {
    const result = await pagoModel.read();
    const total = await pagoModel.getTotal();
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
    const result = await pagoModel.create({
      id_Cliente: body.id_Cliente,
      Monto: body.Monto,
      Fecha: body.Fecha,
      
      conf_pago: body.conf_pago,
      Plazo: body.Plazo,
      Forma_pago: body.Forma_pago,
     
    });
    return {
      data: result,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating payment",
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error fetching users",
    });
  }
};

export const update = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await pagoModel.update(
      Number.parseInt(evt.context.params?.id_pago || "1") as Number,
      {
        id_Cliente: body.id_Cliente,
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
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating user",
    });
  }
};


export const remove = async (evt: H3Event) => {
    try {
      const result = await pagoModel.remove(
        Number.parseInt(evt.context.params?.id_pago || "1") as Number
      );
      return {
        data: result,
      };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Error removing payment",
      });
    }
  };