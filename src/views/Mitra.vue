<script>
import Dashboard from "../layouts/Dashboard.vue";

export default {
  components: { Dashboard },
};
</script>
<template>
  <Dashboard>
    <div class="bg-white rounded-lg shadow-lg p-4">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-semibold">Mitra</h1>
        <button
          data-modal-target="add-mitra-modal"
          data-modal-toggle="add-mitra-modal"
          type="button"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
          Add
        </button>
      </div>
      <!-- Add Mitra Modal -->
      <div
        id="add-mitra-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div class="relative w-full h-full max-w-md md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="add-mitra-modal"
            >
              <svg
                aria-hidden="true"
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
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900">Add Mitra</h3>
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Nama Mitra</label
                  >
                  <input
                    type="text"
                    name="email"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-800 focus:border-secondary-700 block w-full p-2.5"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="alamat"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your message</label
                  >
                  <textarea
                    id="alamat"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-secondary-800 focus:border-secondary-700"
                    placeholder="Alamat"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add Mitra
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- table mitra-->

      <div class="relative overflow-x-auto mt-6">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-md text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" class="px-6 py-4">Nama Mitra</th>
              <th scope="col" colspan="2" class="px-6 py-4">Alamat</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">PT. ABC Indo</td>
              <td class="px-6 py-4">Jl. Jendral Sudirman No.89 Jakarta</td>
              <td class="px-6 py-4 text-right">
                <button
                  data-modal-target="edit-mitra-modal"
                  data-modal-toggle="edit-mitra-modal"
                  class="font-medium text-primary-600 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">PT. DEF Indo</td>
              <td class="px-6 py-4">Jl. Jendral Sudirman No.90 Jakarta</td>
              <td class="px-6 py-4 text-right">
                <button
                  data-modal-target="edit-mitra-modal"
                  data-modal-toggle="edit-mitra-modal"
                  class="font-medium text-primary-600 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end table -->
      <!-- Edit Mitra modal -->
      <div
        id="edit-mitra-modal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div class="relative w-full h-full max-w-md md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="edit-mitra-modal"
            >
              <svg
                aria-hidden="true"
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
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900">Edit Mitra</h3>
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Nama Mitra</label
                  >
                  <input
                    type="text"
                    name="email"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-800 focus:border-secondary-700 block w-full p-2.5"
                    placeholder="Company Name"
                    value="PT. ABC Indo"
                    required
                  />
                </div>
                <div>
                  <label
                    for="alamat"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your message</label
                  >
                  <textarea
                    id="alamat"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-secondary-800 focus:border-secondary-700"
                    placeholder="Alamat"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Update Mitra
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dashboard>
</template>
