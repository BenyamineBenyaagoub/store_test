<template>
  <div class="container">
    <form class="my-5">
      <div class="form-row">
        <div class="form-group col-md-2">
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
          <label for="phone">Phone</label>
          <input
            v-model:telefono="data.telefono"
            type="number"
            class="form-control"
            id="phone"
            placeholder="Phone"
          />
        </div>
        <div class="form-group col-md-2">
          <label for="email">Email</label>
          <input
            v-model:correo="data.correo"
            type="mail"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="adress">Adress</label>
          <input
            v-model:direccion="data.direccion"
            type="text"
            class="form-control"
            maxlength="50"
            id="adress"
            placeholder="Adress"
          />
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
import FormComponent from "../components/Form.vue";
import axios, { AxiosPromise, AxiosResponse } from "axios";

export default Vue.extend({
  name: "SupplierForm",
  components: {
    FormComponent,
  },
  data() {
    return {
      data: {
        nombre: "",
        correo: "",
        direccion: "",
        telefono: "",
      },
    };
  },
  methods: {
    save() {
      this.createSuppliers(this.data);
    },
    createSuppliers(data: any): void {
      const url: string = "http://localhost/SCIP/index.php/supplier/create";
      const request: AxiosPromise = axios.post(url, JSON.stringify(data));
      request.then(({ data }: AxiosResponse) => {
        window.location.href = '/suppliers';
      });
      request.catch(({ data }: AxiosResponse) => {
        // Todo toast error 
        console.log(data)
      });
    }
  },
});
</script>