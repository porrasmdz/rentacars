import { H3Event } from "h3";
import * as clienteModel from "~~/server/model/cliente";

export const read = async () => {
  try {
    const result = await clienteModel.read();
    const total = await clienteModel.getTotal();
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
    console.log("Before parsing", body)
    const result = await clienteModel.create({
      
      Nombre: body.Nombre,
      Apellido: body.Apellido,
      
      Fecha_Nacimiento: body.Fecha_Nacimiento,
      Email: body.Email,
      Celular: body.Celular,
      Edad: body.Edad,
      Licencia: body.Licencia,
      id_Inspector : body.id_Inspector
    });
    return {
      data: result,
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error creating user",
    });
  }
};

export const detail = async (evt: H3Event) => {
  try {
    const result = await clienteModel.detail(
      evt.context.params?.id_cliente as string
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
    const result = await clienteModel.update(
      evt.context.params?.id_cliente as string,
      {
        id_Cliente: body.id_cliente,
        Nombre: body.nombre,
        Apellido: body.apellido,
        
        Fecha_Nacimiento: body.fecha_nacim,
        Email: body.email,
        Celular: body.celular,
        Edad: body.edad,
        Licencia: body.licencia,
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
      const result = await clienteModel.remove(
        evt.context.params?.id_cliente as string
      );
      return {
        data: result,
      };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Error removing users",
      });
    }
  };