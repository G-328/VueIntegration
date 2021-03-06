export default {
  SET_USER(state, data) {  // 用户
    state.user = data
  },
  
  SET_SIDEBAR(state, data) {  // 侧边栏状态
    state.sidebar.opened = !state.sidebar.opened
  },

  SET_FIXEDHEADER(state, data) {  // 头部是否固定
    state.fixedHeader = data
  },

  SET_NAVBAR(state, data) {  // 导航条
    state.navBar = data
  },

  SET_NAVLIST(state, data) {  // 导航条信息
    let {key, status} = data
    if (status === "delete") {
      state.navList.splice(key, 1)
    }else if (status === "add") {
      let whether = state.navList.some(item => item.path === key.path)
      if (!whether) {
        state.navList.push(key)
      }
    }
  },
}