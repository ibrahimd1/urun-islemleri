import UrunListesi from "./components/UrunListesi.vue";
import UrunGirisi from "./components/UrunGirisi.vue";
import UrunCikisi from "./components/UrunCikisi.vue";

export const router = [
  { path: "/", component: UrunListesi },
  { path: "/urun-islemleri", component: UrunGirisi },
  { path: "/urun-cikisi", component: UrunCikisi }
];
