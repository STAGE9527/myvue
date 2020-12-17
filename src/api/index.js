// 引入请求的配置文件
import reqMethod from './config';

/*
 * * 用户管理
 */
// 登陆
export const login = (params, loading) => reqMethod('post', '/admin/mcn/login', params, loading);
export const logout = (params, loading) => reqMethod('post', '/admin/mcn/logout', params, loading);
// 修改密码
export const savePassword = (params, loading = false) => reqMethod('post', '/admin/mcn/updatePassword', params, loading);
// 获取用户详情
export const getUserInfo = (params, loading = true) => reqMethod('get', '/admin/mcn/info', params, loading);

/*
 * * kol用户
 */
// 用户平台列表
export const dspCondition = (params, loading = false) => reqMethod('get', '/admin/kol_dsp/condition', params, loading);


/*
 * * 资源管理---商品
 */
// 商品列表
export const getGoodsList = (params, loading = false) => reqMethod('get', '/admin/goods/index', params, loading);
// 保存商品
export const saveGoods = (params, loading = false) => reqMethod('post', '/admin/goods/save', params, loading);
// 更新商品
export const updateGoods = (params, loading = false) => reqMethod('post', '/admin/goods/update', params, loading);
// 获取商品详情
export const getGoodsInfo = (params, loading = false) => reqMethod('get', '/admin/goods/info', params, loading);
// 下架商品
export const soldOutGoods = (params, loading = false) => reqMethod('post', '/admin/goods/out', params, loading);
// 发布商品
export const publishGoods = (params, loading = false) => reqMethod('post', '/admin/goods/publish', params, loading);
// 删除商品
export const delGoods = (params, loading = false) => reqMethod('post', '/admin/goods/del', params, loading);
// 报名的KOL的列表
export const getApplyUserList = (params, loading = false) => reqMethod('get', '/admin/goods/applyUserList', params, loading);
 /*
 * * 资源管理---活动
 */
// 活动列表
export const getActivityList = (params, loading = false) => reqMethod('get', '/admin/activity/index', params, loading);
// 保存活动
export const saveActivity = (params, loading = false) => reqMethod('post', '/admin/activity/save', params, loading);
// 更新活动
export const updateActivity = (params, loading = false) => reqMethod('post', '/admin/activity/update', params, loading);
// 获取活动详情
export const getActivityInfo = (params, loading = false) => reqMethod('get', '/admin/activity/info', params, loading);
// 下架活动
export const soldOutActivity = (params, loading = false) => reqMethod('post', '/admin/activity/out', params, loading);
// 发布活动
export const publishActivity = (params, loading = false) => reqMethod('post', '/admin/activity/publish', params, loading);
// 删除活动
export const delActivity = (params, loading = false) => reqMethod('post', '/admin/activity/del', params, loading);
// 报名的KOL的列表
export const getActivityApplyUserList = (params, loading = false) => reqMethod('get', '/admin/activity/applyUserList', params, loading);

// 地区列表
export const regionList = (params, loading = false) => reqMethod('get', '/admin/region/index', params, loading);
export const regionMenu = (params, loading = false) => reqMethod('get', '/admin/region/menu', params, loading);

// 订单管理
export const getOrders = (params, loading = true) => reqMethod('get', '/admin/order/successList', params, loading);

