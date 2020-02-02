<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Çıkışı</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <select class="form-control" v-model="selectedProduct" @change="productSelected">
              <option
                v-for="product in getProducts"
                :key="product.key"
                :value="product.key"
                :disabled="product.count == 0"
              >{{product.title}}</option>
            </select>
          </div>
          <transition name="fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product!=null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge badge-info">Stok : {{ product.count }}</span>
                      <span class="badge badge-primary">Fiyat : {{ product.price | currency }}</span>
                    </div>
                    <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Adet</label>
            <input
              type="text"
              v-model="productCount"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
              :style="countStyle"
            />
            <br />
            <div class="alert alert-danger" v-if="warning">Adet stoktan fazla olamaz!!!</div>
          </div>
          <hr />
          <button @click="save" class="btn btn-primary" :disabled="saveEnabled">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ProductMixin } from "../shared/ProductMixin";
export default {
  mixins: [ProductMixin],
  data() {
    return {
      selectedProduct: null,
      product: null,
      productCount: null,
      saveButtonClicked: false,
      warning: false
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    saveEnabled() {
      if (this.selectedProduct !== null && this.productCount > 0) {
        return false;
      } else {
        return true;
      }
    },
    countStyle() {
      console.log("1", this.productCount);
      console.log("2", this.product);

      if (
        this.productCount != null &&
        this.productCount > parseInt(this.product.count)
      ) {
        this.warning = true;
        console.log("3", this.productCount, this.product.count);
        return { border: "2px solid red" };
      } else this.warning = false;
    }
  },
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      this.saveButtonClicked = true;
      let product = {
        key: this.selectedProduct,
        count: this.productCount
      };
      this.$store.dispatch("sellProduct", product);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.selectedProduct != null || this.productCount > 0) &&
      !this.saveButtonClicked
    ) {
      if (
        confirm(
          "Kaydedilmemiş değişiklikleriniz var. Yine de çıkmak istiyor musunuz?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>>
</style>