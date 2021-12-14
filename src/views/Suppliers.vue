<template>
  <div class="Suppliers container my-5">
    <div class="text-right my-4 mx-4">
      <router-link class="btn btn-outline-success" to="/supplierForm">
        Create Supplier
      </router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Adress</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in suppliers">
          <tr>
            <th scope="row">{{ item.nombre }}</th>
            <td>{{ item.telefono }}</td>
            <td>{{ item.direccion }}</td>
            <td>{{ item.correo }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosPromise, AxiosResponse } from "axios";

export default Vue.extend({
  name: "Suppliers",
  components: {},
  data: () => {
    return {
      suppliers: [],
    };
  },
  methods: {
    getSupliers(): void {
      const url: string = "http://http://benyaagoub.dondominio.top/supplier/get";
      const request: AxiosPromise = axios.get(url);
      request.then(({ data }: AxiosResponse) => {
        console.log(data);
        this.suppliers = data;
      });
      request.catch(({ data }: AxiosResponse) => {});
    },
  },

  created() {
    this.getSupliers();
  },
});
</script>
