import { useBase, createRouter, defineEventHandler } from 'h3';
import * as clienteCtrl from '~~/server/controller/cliente';
import * as inspectorCtrl from '~~/server/controller/inspector';

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

export default useBase('/api',router.handler);