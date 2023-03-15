<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="container mx-auto max-w-screen-xl p-4">
    <div
      class="min-h-[calc(100vh-120px)] flex flex-row flex-wrap justify-center items-center"
    >
      <div class="basis-full md:basis-7/12 p-4">
        <img class="w-full max-w-md my-4" src="/img/logo.svg" alt="" />
        <h1 class="text-3xl font-semibold">
          Selamat Datang di <br />BNI Smart Dashboard
        </h1>
        <p class="mt-4 text-lg">Aplikasi Dashboard SKK Migas Bank BNI</p>
      </div>
      <div class="basis-full md:basis-5/12 p-4">
        <div class="bg-white shadow-lg rounded-xl w-full p-6">
          <form class="flex flex-col">
            <div>
              <p class="text-2xl font-bold">Login</p>
              <p class="text-base text-gray-700">
                Login with your username & Password
              </p>
              <hr class="my-6 border-gray-200" />
            </div>
            <!-- alert jika login fail -->
            <div
              id="alert-danger"
              class="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Info</span>
              <div class="ml-3 text-sm font-medium">
                Username or Password wrong !
              </div>
              <button
                type="button"
                class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8"
                data-dismiss-target="#alert-danger"
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="mb-6">
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Username</label
              >
              <input
                type="text"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-800 focus:border-secondary-800 block w-full p-2.5"
                placeholder="username"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-800 focus:border-secondary-800 block w-full p-2.5"
                required
              />
            </div>
            <RouterLink to="/total-dana-asr">
            <button
              type="submit"
              class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Login
            </button>
            </RouterLink>
          </form>
        </div>
      </div>
    </div>
    <footer>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center"
        >© Bank BNI . All Rights Reserved.
      </span>
    </footer>
  </div>
</template>

<style scoped></style>
