<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr />
          <table class="table table-hover table-striped table-bordered" v-if="productList.length>0">
            <thead>
              <th>id</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Açıklama</th>
            </thead>
            <tbody>
              <tr v-for="product in productList" :key="product.productName">
                <td class="align-middle text-center">
                  <span class="badge badge-info">{{product.productId}}</span>
                </td>
                <td class="align-middle text-center">{{product.productName}}</td>
                <td class="align-middle text-center">{{product.productCount}}</td>
                <td style="width: 120px;">{{product.productPrice}}</td>
                <td class="align-middle">{{product.productDescription}}</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br />
            <small>Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: []
    };
  },
  created() {
    this.$http
      .get("https://urun-islemleri-1a6a3.firebaseio.com/product_list.json")
      .then(response => response.data)
      .then(resp => {
        for (let key in resp) {
          console.log(key);
          this.productList.push(resp[key]);
          this.productList = this.productList.map(x => {
            return { ...x, productId: key };
          });
        }
        console.log(this.productList);
      });
  }
};
</script>

<style>
</style>