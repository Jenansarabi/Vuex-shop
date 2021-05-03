<template>
  <div class="col mb-4">
      
      <div class="card h-100 p-3">
           <img
          :scr="product.image"
           class="card-img-top"
          alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"> {{ product.name }}</h5>
            <p class="card-text">{{ product.short }}</p>
                      

            <router-link :to=" '/product/details/' +product._id"  type="button" class="btn btn-warning"> Details</router-link>

            <router-link :to="{name: 'ProductDetails', params: {id: product._id}}" type="button" class="btn btn-warning"> Details</router-link>
          </div>
            <button class="btn btn-secondary" @click="addProductToCart({ product, quantity })" >Add to Cart</button>
            <span class="text-center mb-2 mt-2"> 
              <input type="number" v-model="quantity">
            </span>
      
       
         </div>
   </div>
  
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['product'],
  data() {
    return{
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['addProductToCart'])
  }
}
 </script>

<style>

</style>