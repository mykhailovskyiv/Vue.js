<template>
  <div class="catalog">
    <router-link :to="{ name: 'Cart', params: { cart_data: CART } }">
      <div class="catalog__link_to_cart">Cart:{{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <p>For gamers only</p>
    <div class="catalog-row">
      <catalogItem
        v-for="product in products"
        this.PRODUCTS
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
// для запроса по аксиос раскоментировать db.json и запустить его черезе Json серве json-server --watch db.json
<script>
import catalogItem from "./Catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Catalog",
  components: {
    catalogItem,
  },
  props: {},
  data() {
    return {
      products: [
        {
          image: "6800.jpg",
          name: "RX 6800",
          price: "30000",
          article: "V1",
          available: true,
        },
        {
          image: "5700.jpg",
          name: "RX 5700",
          price: "20000",
          article: "V2",
          available: true,
        },
        {
          image: "3070.jpg",
          name: "RTX 3070",
          price: "30000",
          article: "V3",
          available: true,
        },
        {
          image: "2080.jpg",
          name: "RTX 2080",
          price: "25000",
          article: "V4",
          available: true,
        },
        {
          image: "6800.jpg",
          name: "RX 6800",
          price: "30000",
          article: "V5",
          available: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss" >
.catalog {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 50px;
  &-row {
    display: flex;
    flex-wrap: wrap;
  }
  &__link_to_cart {
    position: fixed;
    background-color: white;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: 1px solid black;
    transition-duration: 0.3s;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
      transition-duration: 0.3s;
    }
  }
}
</style>
