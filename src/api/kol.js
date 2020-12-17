// 引入请求的配置文件
import reqMethod from './config';

export const getKolList = (params, loading = false) => reqMethod('get', '/admin/kol_user/index', params, loading);
export const exportKolList = (params, loading = false) => reqMethod('get', '/admin/kol_user/index/export', params, loading);
export const getKolListTotal = (params, loading = false) => reqMethod('get', '/admin/kol_user/total', params, loading);

// kol详情
export const getKolDetail = (params, loading = false) => reqMethod('get', '/admin/kol_user/info', params, loading);
// kol所属资源列表
export const getKolResource = (params, loading = false) => reqMethod('get', '/admin/kol_user/orderApplyList', params, loading);
// 添加备注  
export const setAdminNotes = (params, loading = false) => reqMethod('post', '/admin/kol_user/addNote', params, loading);
//  踢出
export const kickoutKol = (params, loading = false) => reqMethod('post', '/admin/kol_user/out', params, loading);
export const collectKol = (params, loading = false) => reqMethod('post', '/admin/kol_user/collect', params, loading);
export const blackKol = (params, loading = false) => reqMethod('post', '/admin/kol_user/black', params, loading);


