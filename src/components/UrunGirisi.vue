<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün İşlemleri</h3>
          <hr />
          <div class="form-group">
            <label>Ürün Adı</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ürün adını giriniz.."
              v-model="products.productName"
            />
          </div>
          <div class="form-group">
            <label>Adet</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ürün adetini giriniz.."
              v-model="products.productCount"
            />
          </div>
          <div class="form-group">
            <label>Fiyat</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ürün fiyatı giriniz.."
              v-model="products.productPrice"
            />
          </div>
          <div class="form-group">
            <label>Açıklama</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Ürüne ait bir açıklama giriniz..."
              class="form-control"
              v-model="products.productDescription"
            ></textarea>
          </div>
          <hr />
          <button class="btn btn-primary" @click="saveProduct">Kaydet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: {
        productName: null,
        productCount: null,
        productPrice: null,
        productDescription: null
      }
    };
  },
  methods: {
    saveProduct() {
      this.$http
        .post(
          "https://urun-islemleri-1a6a3.firebaseio.com/product_list.json",
          this.products
        )
        .then(
          response => {
            console.log("Ürün başarıyla kaydedildi.");
            console.log(response);
          },
          reason => {
            console.log("Ürün kaydetme işlemi başarısız.");
          }
        );
    }
  },
  beforeRouteLeave(to, from, next) {
    //engelleme
    next();
  }
};
</script>

<style>
</style>