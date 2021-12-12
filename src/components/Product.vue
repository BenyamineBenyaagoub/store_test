<template>
  <div class="col-6 col-sm-6 col-md-4 col-lg-4 my-4">
    <div class="card">
      <div class="d-flex my-2 px-2">
        <button
          class="btn btn-outline-danger col-4"
          @click.prevent="deleteProduct(obj.id)"
        >
          Delete
        </button>
        <div class="col-4"></div>
        <a
          class="btn btn-outline-warning col-4"
          :href="'/store_test/productForm?id=' + obj.id"
        >
          Edit
        </a>
      </div>
      <img
        class="card-img"
        src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
        alt="Vans"
      />
      <div class="card-img d-flex justify-content-end">
        <a href="#" class="card-link text-danger like">
          <i class="fas fa-heart"></i>
        </a>
      </div>
      <div class="card-body">
        <h4 class="card-title">{{ obj.nombre }}</h4>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text">
          {{ obj.descripcion }}
        </p>
        <p class="col-12">
          <span class="col-6">Stock: {{ obj.cantidad }}</span>
          <span class="col-6">Size: {{ obj.talla }}</span>
        </p>
        <div class="buy d-flex justify-content-between align-items-center">
          <div class="price text-success">
            <h5 class="mt-4">{{ obj.precio }}€</h5>
          </div>
          <button class="btn btn-primary mt-3" @click="addToCart(obj)">
            <i class="fas fa-shopping-cart" ></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosPromise, AxiosResponse } from "axios";

export default Vue.extend({
  name: "Product",
  props: {
    obj: {},
  },
  methods: {
    addToCart(obj): void{
      const cart: any[] = [...JSON.parse(localStorage.getItem("cart") || "[]"), obj]
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    deleteProduct(id): void {
      axios.get("http://localhost/SCIP/index.php/product/delete?id=" + id)
      .then(res => { 
        window.location.href = "/";
       })
      .catch(err => { console.error(err) })
      },
  },
});
</script>


