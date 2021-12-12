<template>
  <div class="container">
    <form class="my-5">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input
            type="text"
            v-model:nombre="data.nombre"
            class="form-control"
            id="nombre"
            placeholder="Name"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="Cuantity">Cuantity</label>
          <input
            v-model:cantidad="data.cantidad"
            type="number"
            class="form-control"
            id="cuantity"
            placeholder="cuantity"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="Price">Price</label>
          <input
            v-model:precio="data.precio"
            type="number"
            class="form-control"
            id="Price"
            placeholder="Price"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="size">Size</label>
          <input
            v-model:talla="data.talla"
            type="text"
            class="form-control"
            maxlength="2"
            id="size"
            placeholder="Size"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model:descripcion="data.descripcion"
        ></textarea>
      </div>

      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputState">Category</label>
          <select
            id="inputState"
            class="form-control"
            v-model:categoria_id="data.categoria_id"
          >
            <template v-for="item in category">
              <option :value="item.id">{{ item.nombre }}</option>
            </template>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Descount</label>
          <select
            id="inputState"
            class="form-control"
            v-model:descuento_id="data.descuento_id"
          >
            <template v-for="item in discount">
              <option :value="item.id">{{ item.nombre }}</option>
            </template>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Supplier</label>
          <select
            id="inputState"
            class="form-control"
            v-model:proveedor_id="data.proveedor_id"
          >
            <template v-for="item in supplier">
              <option :value="item.id">{{ item.nombre }}</option>
            </template>
          </select>
        </div>
      </div>

      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="is_draft"
            v-model:es_borrador="data.es_borrador"
          />
          <label class="form-check-label" for="is_draft"> Draft </label>
        </div>
      </div>
      <button type="submit" @click.prevent="save()" class="btn btn-primary">
        Save
      </button>
    </form>
  </div>
</template> 
<script lang="ts">
import Vue from "vue";
import FormComponent from "./../components/Form.vue";
import axios, { AxiosPromise, AxiosResponse } from "axios";

export default Vue.extend({
  name: "app",
  components: {
    FormComponent,
  },
  data() {
    return {
      supplier: [],
      category: [],
      discount: [],
      productId: "",
      data: {
        nombre: "",
        cantidad: "",
        talla: "",
        descripcion: "",
        categoria_id: "",
        descuento_id: "",
        proveedor_id: "",
        es_borrador: "",
        imagen: "",
        precio: "",
      },
    };
  },
  methods: {
    save() {
      const json = {
        nombre: this.data.nombre,
        cantidad: this.data.cantidad,
        talla: this.data.talla,
        descripcion: this.data.descripcion,
        categoria_id: this.data.categoria_id,
        descuento_id: this.data.descuento_id,
        proveedor_id: this.data.proveedor_id,
        es_borrador: this.data.es_borrador,
        precio: this.data.precio,
      };
      if (this.productId) {
        this.updateProduct(this.data);
      } else {
        this.createProducts(this.data);
      }
    },
    createProducts(data): void {
      const url: string = "http://localhost/SCIP/index.php/product/create";
      const request: AxiosPromise = axios.post(url, JSON.stringify(data));
      request.then(({ data }: AxiosResponse) => {
        window.location.href = "/";
      });
      request.catch(({ data }: AxiosResponse) => {});
    },
    updateProduct(data): void {
      const url: string = `http://localhost/SCIP/index.php/product/update?id=${this.productId}`;
      const request: AxiosPromise = axios.post(url, JSON.stringify(data));
      request.then(({ data }: AxiosResponse) => {
        window.location.href = "/";
      });
      request.catch(({ data }: AxiosResponse) => {});
    },
    getSupliers(): void {
      const url: string = "http://localhost/SCIP/index.php/supplier/get";
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: AxiosResponse) => {
        this.supplier = data;
      });
      request.catch(({ data }: AxiosResponse) => {});
    },
    getCategory(): void {
      const url: string = "http://localhost/SCIP/index.php/category/get";
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: AxiosResponse) => {
        this.category = data;
      });
      request.catch(({ data }: AxiosResponse) => {});
    },
    getDiscount(): void {
      const url: string = "http://localhost/SCIP/index.php/discount/get";
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: AxiosResponse) => {
        this.discount = data;
      });
      request.catch(({ data }: AxiosResponse) => {});
    },
    getProduct(id): void {
      const url: string = `http://localhost/SCIP/index.php/product/get?id=${id}`;
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: any) => {
        data.map((data) => {
          this.data.nombre = data.nombre;
          this.data.cantidad = data.cantidad;
          this.data.talla = data.talla;
          this.data.descripcion = data.descripcion;
          this.data.categoria_id = data.categoria_id;
          this.data.descuento_id = data.descuento_id;
          this.data.proveedor_id = data.proveedor_id;
          this.data.es_borrador = data.es_borrador;
          this.data.precio = data.precio;
        });
      });
      request.catch(({ data }: AxiosResponse) => {});
    },
  },
  mounted(): void {
    const urlParams = new URLSearchParams(window.location.search);
    this.productId = urlParams.get("id");
    this.getProduct(this.productId);
  },
  created(): void {
    this.getCategory();
    this.getSupliers();
    this.getDiscount();
    this.$forceUpdate();
  },
});
</script>