import { useBase, createRouter, defineEventHandler } from 'h3';
import * as clienteCtrl from '~~/server/controller/cliente';

const router = createRouter();

router.get('/cliente', defineEventHandler(clienteCtrl.read));
router.post('/cliente', defineEventHandler(clienteCtrl.create));
router.get('/cliente/:id_cliente', defineEventHandler(clienteCtrl.detail));
router.put('/cliente/:id_cliente', defineEventHandler(clienteCtrl.update));
router.delete('/cliente/:id_cliente', defineEventHandler(clienteCtrl.remove));

export default useBase('/api',router.handler);