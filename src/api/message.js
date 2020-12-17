// 引入请求的配置文件
import reqMethod from './config';

/*
 * * 后台权限列表接口
 */
// 消息列表
export const getMsgList = (params, loading) => reqMethod('get', '/admin/message/index', params, loading);
// 批量已读
export const readMsg = (params, loading, tips=true) => reqMethod('post', '/admin/message/haveRead', params, loading, tips);
// 批量删除
export const delMsg = (params, loading) => reqMethod('post', '/admin/message/del', params, loading);
// 批量清空
export const clearMsg = (params, loading) => reqMethod('post', '/admin/message/clear', params, loading);
// 未读消息
export const getUnreadCount = (params, loading) => reqMethod('get', '/admin/message/readCount', params, loading);
// 批量还原
export const restoreMsg = (params, loading) => reqMethod('post', '/admin/message/restore', params, loading);

