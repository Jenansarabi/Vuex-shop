<template>
  <div class="container m-5">
      <product-list/>

  </div>
</template>

<script>

import { mapActions } from 'vuex'
import  ProductList from '../components/products/ProductList'

export default {
  components: { 
     ProductList
  },
   methods: { 
     ...mapActions(['getProducts']),
   },
   created() {
     this.getProducts()
   }
 }
 
 </script>
<style>

</style>