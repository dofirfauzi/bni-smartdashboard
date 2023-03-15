import { createWebHashHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";
import TotalDanaAsr from "../views/TotalDanaAsr.vue";
import WilayahKerja from "../views/WilayahKerja.vue";
import RekeningDanSaldo from "../views/RekeningDanSaldo.vue";
import DaftarTransaksi from "../views/DaftarTransaksi.vue";
import InfoSukuBunga from "../views/InfoSukuBunga.vue";
import Mitra from "../views/Mitra.vue";
import Users from "../views/Users.vue";
import MyProfile from "../views/MyProfile.vue";
import ResetPassword from "../views/ResetPassword.vue"

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
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to ,from ,next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
