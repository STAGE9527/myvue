import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    
  	isSidebarActive: false,
  	themeColor: "#2962ff",
      // 'admin-api-token': localStorage.getItem('admin-api-token'),
      // menu_list: JSON.parse(localStorage.getItem('menu_list')) ,
      // is_admin: JSON.parse(localStorage.getItem('is_admin')),
      // unread_count: 0,

  },
  mutations: {
  	//This is for Sidbar trigger in mobile
  	IS_SIDEBAR_ACTIVE(state, value) {
        state.isSidebarActive = value;
    },
    login(state, data) {
      state['admin-api-token'] = data['admin-api-token']
      state.menu_list = data.menu_list
      state.is_admin = data.is_admin
      localStorage.setItem('admin-api-token', data['admin-api-token'])
      localStorage.setItem('user_name', data.name)
      localStorage.setItem('is_admin', data.is_admin)
      localStorage.setItem('menu_list', JSON.stringify(data.menu_list))
    },
    logout(state) {
      state['admin-api-token'] = ''
      state.menu_list = []
      state.is_admin = ''
      localStorage.removeItem('admin-api-token')
      localStorage.removeItem('menu_list')
      localStorage.removeItem('is_admin')
      localStorage.removeItem('user_name')
    },
    setUnreadCount(state, num) {
      state.unread_count = num
    }


  },  
  actions: {
  	
  },
  getters:{
  	
  }
})
