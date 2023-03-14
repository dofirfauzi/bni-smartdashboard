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
    meta:{
      title : 'Login',
    }
  },
  {
    path: "/total-dana-asr",
    component: TotalDanaAsr,
    meta:{
      title : 'Total Dana Asr',
    }
  },
  {
    path: "/wilayah-kerja",
    component: WilayahKerja,
    meta:{
      title : 'Wilayah Kerja',
    }
  },
  {
    path: "/rekening-dan-saldo",
    component: RekeningDanSaldo,
    meta:{
      title : 'Rekening Dan Saldo',
    }
  },
  {
    path: "/daftar-transaksi",
    component: DaftarTransaksi,
    meta:{
      title : 'Daftar Transaksi',
    }
  },
  {
    path: "/info-suku-bunga",
    component: InfoSukuBunga,
    meta:{
      title : 'Info Suku Bunga',
    }
  },
  {
    path: "/mitra",
    component: Mitra,
    meta:{
      title : 'Mitra',
    }
  },
  {
    path: "/users",
    component: Users,
    meta:{
      title : 'Users',
    }
  },
  {
    path: "/my-profile",
    component: MyProfile,
    meta:{
      title : 'My Profile',
    }
  },
  {
    path: "/reset-password",
    component: ResetPassword,
    meta:{
      title : 'Reset Password',
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to ,from ,next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
