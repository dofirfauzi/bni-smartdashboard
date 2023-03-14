import { createWebHistory, createRouter } from "vue-router";

import Login from "../page/Login.vue";
import TotalDanaAsr from "../page/TotalDanaAsr.vue";
import WilayahKerja from "../page/WilayahKerja.vue";
import RekeningDanSaldo from "../page/RekeningDanSaldo.vue";
import DaftarTransaksi from "../page/DaftarTransaksi.vue";
import InfoSukuBunga from "../page/InfoSukuBunga.vue";
import Mitra from "../page/Mitra.vue";
import Users from "../page/Users.vue";
import MyProfile from "../page/MyProfile.vue";
import ResetPassword from "../page/ResetPassword.vue"

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/total-dana-asr",
    component: TotalDanaAsr,
  },
  {
    path: "/wilayah-kerja",
    component: WilayahKerja,
  },
  {
    path: "/rekening-dan-saldo",
    component: RekeningDanSaldo,
  },
  {
    path: "/daftar-transaksi",
    component: DaftarTransaksi,
  },
  {
    path: "/info-suku-bunga",
    component: InfoSukuBunga,
  },
  {
    path: "/mitra",
    component: Mitra,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/my-profile",
    component: MyProfile,
  },
  {
    path: "/reset-password",
    component: ResetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
