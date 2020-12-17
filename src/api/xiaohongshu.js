// 引入请求的配置文件
import reqMethod from './config';

/*
 * * mnc
 */
export const getMcnList = (params, loading) => reqMethod('get', '/admin/xiaohongshu/mcn/index', params, loading);
export const getBusinessNote = (params, loading) => reqMethod('get', '/admin/xiaohongshu/business_note/index', params, loading);
export const getKolsList = (params, loading) => reqMethod('get', '/admin/xiaohongshu/kols/index', params, loading);
export const getBrandKeywordList = (params, loading) => reqMethod('get', '/admin/xiaohongshu/brand_keyword/index', params, loading);
