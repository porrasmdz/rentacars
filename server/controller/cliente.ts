import { H3Event } from "h3";
import * as clienteModel from "~~/server/model/cliente";

export const read = async () => {
  try {
    const result = await clienteModel.read();
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

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await clienteModel.create({
      id_cliente: body.id_cliente,
      nombre: body.nombre,
      apellido: body.apellido,
      fecha_nacim: body.fecha_nacim,
      email: body.email,
      celular: body.celular,
      edad: body.edad,
      licencia: body.licencia,
    });
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
        id_cliente: body.id_cliente,
        nombre: body.nombre,
        apellido: body.apellido,
        fecha_nacim: body.fecha_nacim,
        email: body.email,
        celular: body.celular,
        edad: body.edad,
        licencia: body.licencia,
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