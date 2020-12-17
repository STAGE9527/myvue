import reqMethod from './config';

export const getCooperateList = (params, loading = false) => reqMethod('get', '/admin/order/index', params, loading);
export const exportCooperateList = (params, loading = false) => reqMethod('get', '/admin/order/index/export', params, loading);
export const getCooperateTotal = (params, loading = false) => reqMethod('get', '/admin/order/total', params, loading);
export const updateCooperateStatus = (params, loading = false) => reqMethod('post', '/admin/order/updateStatus', params, loading);
export const argeeCooperate = (params, loading = false) => reqMethod('post', '/admin/order/agree', params, loading);
export const rejectCooperate = (params, loading = false) => reqMethod('post', '/admin/order/reject', params, loading);
export const evaluateCooperate = (params, loading = false) => reqMethod('post', '/admin/order/evaluate', params, loading);