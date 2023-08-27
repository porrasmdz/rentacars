import { useBase, createRouter, defineEventHandler } from 'h3';
import * as clienteCtrl from '~~/server/controller/cliente';
import * as inspectorCtrl from '~~/server/controller/inspector';
import * as pagoCtrl from '~~/server/controller/pago';
import * as reservaCtrl from '~~/server/controller/reserva';
import * as recargoCtrl from '~~/server/controller/recargo';
import * as devolucionCtrl from '~~/server/controller/devolucion';
import * as empresaCtrl from '~~/server/controller/empresa';
import * as vehiculoCtrl from '~~/server/controller/vehiculo';
import * as reporteCtrl from '~~/server/controller/reporte';

const router = createRouter();

router.get('/cliente', defineEventHandler(clienteCtrl.read));
router.post('/cliente', defineEventHandler(clienteCtrl.create));
router.get('/cliente/:id_cliente', defineEventHandler(clienteCtrl.detail));
router.put('/cliente/:id_cliente', defineEventHandler(clienteCtrl.update));
router.delete('/cliente/:id_cliente', defineEventHandler(clienteCtrl.remove));


router.get('/inspector', defineEventHandler(inspectorCtrl.read));
router.post('/inspector', defineEventHandler(inspectorCtrl.create));
router.get('/inspector/:id_inspector', defineEventHandler(inspectorCtrl.detail));
router.put('/inspector/:id_inspector', defineEventHandler(inspectorCtrl.update));
router.delete('/inspector/:id_inspector', defineEventHandler(inspectorCtrl.remove));


router.get('/pago', defineEventHandler(pagoCtrl.read));
router.post('/pago', defineEventHandler(pagoCtrl.create));
router.get('/pago/:id_pago', defineEventHandler(pagoCtrl.detail));
router.put('/pago/:id_pago', defineEventHandler(pagoCtrl.update));
router.delete('/pago/:id_pago', defineEventHandler(pagoCtrl.remove));

router.get('/reserva', defineEventHandler(reservaCtrl.read));
router.post('/reserva', defineEventHandler(reservaCtrl.create));
router.get('/reserva/:id_reserva', defineEventHandler(reservaCtrl.detail));
router.put('/reserva/:id_reserva', defineEventHandler(reservaCtrl.update));
router.delete('/reserva/:id_reserva', defineEventHandler(reservaCtrl.remove));

router.get('/recargo', defineEventHandler(recargoCtrl.read));
router.post('/recargo', defineEventHandler(recargoCtrl.create));
router.get('/recargo/:id_recargo', defineEventHandler(recargoCtrl.detail));
router.put('/recargo/:id_recargo', defineEventHandler(recargoCtrl.update));
router.delete('/recargo/:id_recargo', defineEventHandler(recargoCtrl.remove));

router.get('/devolucion', defineEventHandler(devolucionCtrl.read));
router.post('/devolucion', defineEventHandler(devolucionCtrl.create));
router.get('/devolucion/:id_devolucion', defineEventHandler(devolucionCtrl.detail));
router.put('/devolucion/:id_devolucion', defineEventHandler(devolucionCtrl.update));
router.delete('/devolucion/:id_devolucion', defineEventHandler(devolucionCtrl.remove));

router.get('/empresa', defineEventHandler(empresaCtrl.read));
router.post('/empresa', defineEventHandler(empresaCtrl.create));
router.get('/empresa/:id_empresa', defineEventHandler(empresaCtrl.detail));
router.put('/empresa/:id_empresa', defineEventHandler(empresaCtrl.update));
router.delete('/empresa/:id_empresa', defineEventHandler(empresaCtrl.remove));

router.get('/vehiculo', defineEventHandler(vehiculoCtrl.read));
router.post('/vehiculo', defineEventHandler(vehiculoCtrl.create));
router.get('/vehiculo/:id_vehiculo', defineEventHandler(vehiculoCtrl.detail));
router.put('/vehiculo/:id_vehiculo', defineEventHandler(vehiculoCtrl.update));
router.delete('/vehiculo/:id_vehiculo', defineEventHandler(vehiculoCtrl.remove));


router.get('/reporte/:id_reporte', defineEventHandler(reporteCtrl.detail));

export default useBase('/api',router.handler);