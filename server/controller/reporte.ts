import { H3Event } from "h3";
import * as reporteModel from "~~/server/model/reporte";

const UNKNOWM_ERROR = "Ha ocurrido un error desconocido";
export const read = async () => {
  try {
    const result = await reporteModel.read();
    const total = await reporteModel.getTotal();
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



export const detail = async (evt: H3Event) => {
  try {
    console.log(evt.context.params?.id_reporte ?? "");
    const result = await reporteModel.detail(
      evt.context.params?.id_reporte ?? ""
    );
    console.log("Reporte: ", result);
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
