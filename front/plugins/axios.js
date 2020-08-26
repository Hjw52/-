import Vue from 'vue'
import axios from 'axios'
import {MessageBox} from 'element-ui'

let service=axios.create({
    timeout:5000,
    baseURL:'/api'
})
export default ({store,redirect})=>{
service.interceptors.request.use(
    config=>{
        const token=window.localStorage.getItem('token');
        if(token){
            config.headers.common['Authorization'] = 'Bearer '+token  
        }
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    async response=>{
        let {data}=response;
        if(data.code==0){
            return data;
        }else if(data.code==-2){
            MessageBox.confirm('登录已过期', '过期',{
                confirmButtonText:"登录",
                showCancelButton:false,
                type:"warning"
              }).then(()=>{
                localStorage.removeItem('token')
                // 跳转到登录页 或者使用vuex提交数据
                redirect({path:'/login'})
              })
        }
        return data;
      
    }
)
}
Vue.prototype.$http=service
export const http=service