
//import axios from '@/axios'


 
     const state = {
       shoppingCart: []
    }
    const getters = {
      shoppingCart: state => {
          return  state.shoppingCart
      }
    }
    const mutations ={
    ADD_TO_CART: (state, item) => {
        state.shoppingCart.push(item)
    },
    INCREMNET_QUANTITY: (state, {product, quantity}) => {
        let item = state.shoppingCart.find(i => i.product._id === product._id)
         item.quantity += Number(quantity)
     },
     DELETE_PRODUCT_FRPM_CART: (state, id) => {
         state.shoppingCart = state.shoppingCart.filtter(item => item.product._id !== id)
     }

    }
    const actions = {
        addProductToCart: ({commit}, {product, quantity}) => {
            let exists = state.shoppingCart.filtter(item => item.product._id === product._id)
            if(exists) {

                commit('INCREMENT_QUANTITY', { exists, quantity})
                return
            }
            commit('ADD_TO_Cart', {product, quantity})
        },
        deleteProductFromCart:  ({commit}, id) => {
            commit('DELETE_PRODUCT_FROM_CART', id)
        }
    }
 
export default {
    state,
    getters,
    mutations,
    actions
}