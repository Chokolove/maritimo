<template>
  <div>
    <div v-for="item in items" :key="item.id" class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ item.name }}
          </div>
          <ul class="text-gray-700 text-base">
            <li>{{ item.dni }}</li>
            <li>{{ item.cell }}</li>
            <li>{{ item.email }}</li>
            <li>{{ item.direction }}</li>
            <li>{{ item.department }}</li>
            <li>{{ item.province }}</li>
            <li>{{ item.district }}</li>
          </ul>
        </div>
    </div>
    <h1>Element UI Table</h1>
    <el-table :contactData="items" stripe height="500" style="width: 100%">
      <el-table-column prop="name" label="Nombre" width="180"></el-table-column>
      <el-table-column prop="email" label="E-mail" width="180"></el-table-column>
      <el-table-column prop="cell" label="Cellphone" width="180"></el-table-column>
      <el-table-column prop="comment" label="Comentario" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const { contactData } = await $axios.$get('http://localhost:4000/get-all')
    return {
      fields: ['name', 'email', 'cell', 'comment'],
      items: contactData
    }
  }
}
</script>
