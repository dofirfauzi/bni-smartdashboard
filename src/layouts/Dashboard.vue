<script>
import { initFlowbite } from "flowbite";
export default {
  name: 'Dashboard',
  mounted() {
    
    const sideBarToggleBtn = document.getElementById("sidebar-toggle-button");
    const sidebar = document.getElementById("default-sidebar");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    if (window.screen.width >= 768) {
      sidebar.classList.remove("-translate-x-full");
    }

    sideBarToggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("-translate-x-full");
      content.classList.toggle("md:ml-64");
      footer.classList.toggle("md:ml-64");
    });

    initFlowbite();
  }
}
</script>
<template>
<!-- topbar -->
<nav class="bg-white px-4 py-2 fixed z-50 w-full">
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row">
        <!-- sidebar toggle btn -->
        <button
          id="sidebar-toggle-button"
          type="button"
          class="inline-flex items-center mr-2 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <!-- brand image -->
        <img class="w-24" src="/img/logo.svg" alt="" />
      </div>
      <div>
        <!-- user dropdown toggle btn -->
        <button
          id="dropdownUserAvatarButton"
          data-dropdown-toggle="dropdownAvatar"
          class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-primary-300"
          type="button"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-8 h-8 rounded-full"
            src="/img/profile.svg"
            alt="user photo"
          />
        </button>
        <!-- User Dropdown menu -->
        <div
          id="dropdownAvatar"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <p>Dofir Fauzi</p>
            <p class="font-medium truncate">hello@dofirfauzi.com</p>
          </div>
          <ul class="py-2 text-sm text-gray-700">
            <li>
              <router-link
                to="/my-profile"
                class="block px-4 py-2 hover:bg-gray-100"
                >My Profile</router-link>
            </li>
            <li>
              <router-link
                to="/reset-password"
                class="block px-4 py-2 hover:bg-gray-100"
                >Reset Password</router-link>
            </li>
          </ul>
          <div class="py-2">
            <router-link
              to="/"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >Sign out</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- end topbar -->
  <!-- sidebar -->
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full"
  >
    <div class="h-full px-3 pt-20 pb-4 overflow-y-auto bg-gray-50">
      <p class="text-base font-normal text-gray-900 my-2">SKK Migas</p>
      <ul class="space-y-2 mb-6">
        <li>
          <router-link
            to="/total-dana-asr"
            class="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100 hover:bg-primary-600 hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-primary-600 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Total Dana ASR</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/wilayah-kerja"
            class="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100 hover:bg-primary-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-primary-600 group-hover:text-white"
            >
              <path
                fill-rule="evenodd"
                d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="ml-3">Wilayah Kerja</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/rekening-dan-saldo"
            class="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100 hover:bg-primary-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-primary-600 group-hover:text-white"
            >
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path
                fill-rule="evenodd"
                d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3">Rekening & Saldo</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/daftar-transaksi"
            class="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100 hover:bg-primary-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-primary-600 group-hover:text-white"
            >
              <path
                d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z"
              />
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-3">Daftar Transaksi</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/info-suku-bunga"
            class="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100 hover:bg-primary-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-primary-600 group-hover:text-white"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="ml-3">Info Suku Bunga</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/mitra"
            class="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100 hover:bg-primary-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-primary-600 group-hover:text-white"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
              <path
                d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
              />
            </svg>

            <span class="ml-3">Mitra</span>
          </router-link>
        </li>
      </ul>
      <p class="text-base font-normal text-gray-900 my-2">User Management</p>
      <ul class="space-y-2 mb-6">
        <li>
          <router-link
            to="/users"
            class="group flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-gray-100 hover:bg-primary-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-primary-600 group-hover:text-white"
            >
              <path
                d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
              />
            </svg>

            <span class="ml-3">Users</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
  <!-- end sidebar -->
  <!-- content -->
  <div
    class="pt-20 px-5 min-h-[calc(100vh-67px)] bg-gray-100 transition-all md:ml-64"
    id="content"
  >
    <slot></slot>
  </div>
  <!-- end content -->
  <!-- footer -->
  <footer class="px-5 pb-6 bg-gray-100 md:ml-64" id="footer">
    <hr class="border-gray-200 sm:mx-auto" />
    <span class="block text-sm text-gray-500 sm:text-center mt-6"
      >© Bank BNI . All Rights Reserved.
    </span>
  </footer>
  <!-- end footer -->
</template>
<style></style>
