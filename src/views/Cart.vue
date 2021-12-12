<template>
  <div id="app">
    <div class="container">
      <div class="divTable div-hover my-5 p-2">
        <div class="rowTable bg-primary text-white pb-2">
          <div class="divTableCol">Product</div>
          <div class="divTableCol">Authorized</div>
          <div class="divTableCol">Price</div>
          <div class="divTableCol">Actions</div>
        </div>

        <div class="rowTable" v-for="item in cart">
          <div class="divTableCol">
            <div class="media">
              <a class="thumbnail pull-left mr-2" href="#">
                <img
                  class="media-object"
                  src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"
                  style="width: 72px; height: 72px"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading">
                  <a href="#">{{ item.nombre }}</a>
                </h4>
                <h5 class="media-heading">by <a href="#">Brand name</a></h5>
                <span>Status: </span>
                <span v-if="item.cantidad > 0" class="text-seccess"
                  ><strong>In Stock</strong></span
                >
                <span v-else class="text-warning"
                  ><strong>Out Of Stock</strong></span
                >
              </div>
            </div>
          </div>
          <div class="divTableCol">
            <strong class="label label-danger">None</strong>
          </div>
          <div class="divTableCol">
            <strong>{{ item.precio }}€</strong>
          </div>
          <div class="divTableCol">
            <button type="button" class="btn btn-danger" @click="remove(item.id)">
              <span class="fa fa-remove"></span> Remove
            </button>
          </div>
        </div>
        <div class="rowTable">
          <div class="divTableCol"></div>
          <div class="divTableCol"></div>
          <div class="divTableCol"><h5>total</h5></div>
          <div class="divTableCol">
            <h5>
              <strong>{{ total }}€</strong>
            </h5>
          </div>
        </div>
        <div class="rowTable">
          <div class="divTableCol"></div>
          <div class="divTableCol"></div>
          <div class="divTableCol">
            <router-link class="btn btn-outline-success" to="/">
              Back</router-link
            >
          </div>
          <div class="divTableCol">
            <router-link class="btn btn-primary" to="/"> Checkout</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Cart",
  components: {},
  data() {
    return {
      cart: [],
      total: "",
    };
  },
  methods: {
    remove(id) {
      const item: any[] = this.cart.filter(c => !(c.id == id))
      localStorage.setItem("cart", JSON.stringify(item));
      this.$router.go(this.$router.currentRoute)

    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalMap: number[] = this.cart.map((c) => c.precio);
    this.total = totalMap.reduce((a, b) => a + b, 0);
  },
});
</script>

<style>
.mr-2 {
  margin-right: 20px;
}

.divTable {
  display: table;
  width: 100%;
}
.rowTable {
  display: table-row;
}
.divTableHeading {
  display: table-header-group;
}
.divTableCol,
.divTableHead {
  border-bottom: 1px solid #eee;
  display: table-cell;
  padding: 3px 10px;
}
.divTableHeading {
  background-color: #eee;
  display: table-header-group;
  font-weight: bold;
}
.divTableFoot {
  background-color: #eee;
  display: table-footer-group;
  font-weight: bold;
}
.divTableBody {
  display: table-row-group;
}
</style>