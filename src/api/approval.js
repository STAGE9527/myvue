// 引入请求的配置文件
import reqMethod from './config';

/*
 * * 审核接口
 */
export const getKolTotal = (params, loading) => reqMethod('get', '/admin/audit/kol_user/total', params, loading);
export const getKolList = (params, loading) => reqMethod('get', '/admin/audit/kol_user/index', params, loading);
export const exportKolList = (params, loading) => reqMethod('get', '/admin/audit/kol_user/index/export', params, loading)
export const kolAgree = (params, loading) => reqMethod('post', '/admin/audit/kol_user/agree', params, loading);
export const kolReject = (params, loading) => reqMethod('post', '/admin/audit/kol_user/reject', params, loading);

export const goods = (params, loading) => reqMethod('get', '/admin/audit/goods/index', params, loading);
export const goodsAgree = (params, loading) => reqMethod('post', '/admin/audit/goods/agree', params, loading);
export const goodsReject = (params, loading) => reqMethod('post', '/admin/audit/goods/reject', params, loading);

export const activity = (params, loading) => reqMethod('get', '/admin/audit/activity/index', params, loading);
export const activityAgree = (params, loading) => reqMethod('post', '/admin/audit/activity/agree', params, loading);
export const activityReject = (params, loading) => reqMethod('post', '/admin/audit/activity/reject', params, loading);
