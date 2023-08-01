import { H3Event } from "h3";
import * as inspectorModel from "~~/server/model/inspector";

export const read = async () => {
  try {
    const result = await inspectorModel.read();
    const total = await inspectorModel.getTotal();
    return {
      data: result,
      total
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:  error as string,
    });
  }
};

export const create = async (evt: H3Event) => {
  try {
    const body = await readBody(evt);
    const result = await inspectorModel.create({
      id_Inspector: body.id_inspector,
      Nombre: body.nombre,
      Email: body.email,
      Celular: body.celular,
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
    const result = await inspectorModel.detail(
      evt.context.params?.id_inspector as string
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
    const result = await inspectorModel.update(
      evt.context.params?.id_inspector as string,
      {
        id_Inspector: body.id_inspector,
        Nombre: body.nombre,
        
        Email: body.email,
        Celular: body.celular,
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
      const result = await inspectorModel.remove(
        evt.context.params?.id_inspector as string
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