import { useBase, createRouter, defineEventHandler } from 'h3';
import * as clienteCtrl from '~~/server/controller/cliente';
import * as inspectorCtrl from '~~/server/controller/inspector';
import * as pagoCtrl from '~~/server/controller/pago';
import * as reservaCtrl from '~~/server/controller/reserva';

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

export default useBase('/api',router.handler);