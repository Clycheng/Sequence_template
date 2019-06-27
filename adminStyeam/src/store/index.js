import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        Install:{
            mysqlFrom:{
                host: "localhost",
                admin: "",
                password: "",
                dataBase: ""
            },
            adminFrom:{
                admin: "admin",
                password: "",
                phone: ""
            },
            isInstalladmin:false
        }
       
    }
})
export default store