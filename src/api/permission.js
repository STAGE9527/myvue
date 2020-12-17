// 引入请求的配置文件
import reqMethod from './config';

/*
 * * 后台权限列表接口
 */
export const permission = (params, loading) => reqMethod('get', '/admin/permission/index', params, loading);
export const permissionSave = (params, loading) => reqMethod('post', '/admin/permission/save', params, loading);
export const permissionUpdate = (params, loading) => reqMethod('post', '/admin/permission/update', params, loading);

export const getRoleList = (params, loading) => reqMethod('get', '/admin/role/index', params, loading);
export const exportRoleList = (params, loading) => reqMethod('get', '/admin/role/export', params, loading);
export const getRoleTotal = (params, loading) => reqMethod('get', '/admin/role/total', params, loading);
export const getRoleInfo = (params, loading) => reqMethod('get', '/admin/role/info', params, loading);
export const addRole = (params, loading) => reqMethod('post', '/admin/role/save', params, loading);
export const delRole = (params, loading) => reqMethod('post', '/admin/role/del', params, loading);
export const updateRole = (params, loading) => reqMethod('post', '/admin/role/update', params, loading);
export const roleStatusUpdate = (params, loading) => reqMethod('post', '/admin/role/updateStatus', params, loading);

export const getUserList = (params, loading) => reqMethod('get', '/admin/user/index', params, loading);
export const exportUserList = (params, loading) => reqMethod('get', '/admin/user/export', params, loading);
export const getUserTotal = (params, loading) => reqMethod('get', '/admin/user/total', params, loading);
export const getUserInfo = (params, loading) => reqMethod('get', '/admin/user/info', params, loading);
export const addUser = (params, loading) => reqMethod('post', '/admin/user/save', params, loading);
export const delUser = (params, loading) => reqMethod('post', '/admin/user/del', params, loading);
export const updateUser = (params, loading) => reqMethod('post', '/admin/user/update', params, loading);
export const userStatusUpdate = (params, loading) => reqMethod('post', '/admin/user/updateStatus', params, loading);
export const userResetPassword = (params, loading) => reqMethod('post', '/admin/user/resetPassword', params, loading);
