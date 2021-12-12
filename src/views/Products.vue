<template>
  <div class="Products">
    <div class="text-right my-4 mx-4">
      <router-link class="btn btn-outline-success" to="/productForm">
        Create Product
      </router-link>
    </div>
    <div class="container">
      <div id="Filter">
        <form class="form-row">
          <div class="form-group col-sm">
            <label for="name" class="control-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="data.name"
            />
          </div>

          <div class="form-group col-sm">
            <label for="category" class="control-label">Category</label>
            <select class="form-control" id="category" v-model="data.category">
              <option v-for="item in category" :value="item.id">
                {{ item.nombre }}
              </option>
            </select>
          </div>

          <div class="form-group col-sm">
            <label for="size" class="control-label">Size</label>
            <select
              class="form-control"
              name="size"
              id="size"
              v-model="data.size"
            >
              <option v-for="item in size" :value="item">
                {{ item }}
              </option>
            </select>
          </div>

          <div class="form-group col-sm">
            <label for="customRange1" class="ontrol-label">Price</label>
            <p
              v-if="data.price"
              class="col-2 py-2"
              style="position: absolute; right: 12%"
            >
              {{ data.price }}€
            </p>
            <input
              type="range"
              class="form-range form-control col-9"
              min="10"
              max="500"
              step="10"
              id="customRange1"
              v-model="data.price"
            />
          </div>
        </form>
      </div>
      <div class="row">
        <template v-for="item in filteredProducts">
          <Product :obj="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Product from "../components/Product.vue";
import axios, { AxiosPromise, AxiosResponse } from "axios";

export default Vue.extend({
  name: "Products",
  components: {
    Product,
  },
  data: () => {
    return {
      filteredProducts: [],
      products: [],
      supplier: [],
      category: [],
      size: "",
      data: {
        category: "",
        price: "",
        size: "",
        name: "",
      },
    };
  },
  methods: {
    getSupliers(): AxiosPromise {
      const url: string = "http://localhost/SCIP/index.php/supplier/get";
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: AxiosResponse) => {
        this.supplier = data;
      });
      request.catch(({ data }: AxiosResponse) => {});
      return request;
    },
    getCategory(): AxiosPromise {
      const url: string = "http://localhost/SCIP/index.php/category/get";
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: AxiosResponse) => {
        this.category = data;
      });
      request.catch(({ data }: AxiosResponse) => {});
      return request;
    },
    getProducts(): AxiosPromise {
      const url: string = "http://localhost/SCIP/index.php/product/get";
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: AxiosResponse) => {
        this.products = data;
        this.filteredProducts = data;
      });
      request.catch(({ data }: AxiosResponse) => {});
      return request;
    },
    setFilterData(): void {
      this.size = this.products
        .map((item) => item.talla)
        .filter((value, index, self) => self.indexOf(value) === index);
    },
    setFilteredProducts(): void {
      this.filteredProducts = this.products
        .filter((p) => (this.data.size ? p.talla == this.data.size : true))
        .filter((p) => (this.data.price ? p.precio < this.data.price : true))
        .filter((p) =>
          this.data.name ? p.nombre.includes(this.data.name) : true
        )
        .filter((p) =>
          this.data.category ? p.categoria_id == this.data.category : true
        );
    },
  },
  watch: {
    "data.size": function (a) {
      this.setFilteredProducts();
    },
    "data.price": function (a) {
      this.setFilteredProducts();
    },
    "data.name": function (a) {
      this.setFilteredProducts();
    },
    "data.category": function (a) {
      this.setFilteredProducts();
    },
  },

  created(): void {
    Promise.all([
      this.getProducts(),
      this.getCategory(),
      this.getSupliers(),
    ]).then(() => {
      this.setFilterData();
    });
  },
});
</script>
