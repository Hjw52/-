import{http} from '~/plugins/axios'
const state=()=>({
    _id:'',
    token:'',
    tel:'',
    nickname:'',
    avatar:''
})
 
const mutations={
    SET_USER(state,user={}){
        state._id=user._id
        state.tel=user.tel
        state.nickname = user.nickname
        state.avatar = user.avatar
    },
    SET_TOKEN(state,token){
        state.token = token
      }
}

const actions={
    login:async({state,commit},data)=>{
        let ret = await http.post('/user/login',data)
        localStorage.setItem('token', ret.data.token)
        commit('SET_TOKEN', ret.data.token)
        return ret
    },
    info:async({state,commit},data)=>{
        let ret = await http.get('/user/info')
        if(ret.code==0){
          commit('SET_USER', ret.data)
          return ret
        }
      }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
  }