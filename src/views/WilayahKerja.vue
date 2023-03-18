<script setup>
import Dashboard from "../layouts/Dashboard.vue";
</script>
<template>
  <Dashboard>
    <div class="bg-white rounded-lg shadow-lg p-4">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-semibold">Wilayah Kerja</h1>
      </div>
      <!-- table wilayah kerja-->

      <div class="relative overflow-x-auto mt-6 pt-2">
        <div class="flex items-center justify-between pb-4">
          <div class="flex items-center">
            <label
              for="show"
              class="block mr-2 text-sm font-medium text-gray-900"
              >Show</label
            >
            <select
              id="show"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-800 focus:border-secondary-700 block w-full p-2 mr-2"
            >
              <option selected>10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-secondary-800 focus:border-secondary-700 mr-1"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-md text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" class="px-6 py-4">Wilayah Kerja</th>
              <th scope="col" class="px-6 py-4">KKS</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">WP ASR BANKANAI</td>
              <td class="px-6 py-4">
                <ol class="space-y-4 text-gray-500 list-decimal list-inside">
                  <li class="text-secondary-800 hover:text-primary-500">
                    <router-link to="/wilayah-kerja/kks/detail"
                      >OPHIR INDONESIA BANKANAI</router-link
                    >
                  </li>
                  <li class="text-secondary-800 hover:text-primary-500">
                    <router-link to="/wilayah-kerja/kks/detail"
                      >OPHIR INDONESIA BANKANAI</router-link
                    >
                  </li>
                </ol>
              </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">WP ASR BANKANAI</td>
              <td class="px-6 py-4">
                <ol class="space-y-4 text-gray-500 list-decimal list-inside">
                  <li class="text-secondary-800 hover:text-primary-500">
                    <router-link to="/wilayah-kerja/kks/detail"
                      >OPHIR INDONESIA BANKANAI</router-link
                    >
                  </li>
                  <li class="text-secondary-800 hover:text-primary-500">
                    <router-link to="/wilayah-kerja/kks/detail"
                      >OPHIR INDONESIA BANKANAI</router-link
                    >
                  </li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end table -->
      <div
        class="flex flex-row flex-wrap justify-between items-center mt-6 mb-1"
      >
        <p class="my-2">Show 10 from 125</p>

        <nav aria-label="Page Pagination">
          <ul class="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >Previous</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="px-3 py-2 text-primary-600 border border-gray-300 bg-primary-50 hover:bg-primary-100 hover:text-primary-700"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >4</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >5</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </Dashboard>
</template>
