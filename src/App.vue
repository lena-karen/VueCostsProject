<template>
  <div class="wrapper">
    <header>
      <p class="header-title">My personal costs</p>
    </header>
    <main class="main">
      
        <button class="add-btn" v-on:click="showModal">ADD NEW COST  +</button>
    
        <ModalWindow v-bind:id = "'addForm'">
            <AddCostForm v-bind:id = "'addForm'"/>
        </ModalWindow>

        <PaymentsTable />
    
    </main>
  </div>
</template>

<script>
import PaymentsTable from './components/PaymentsTable.vue'
import AddCostForm from './components/AddCostForm.vue'
import ModalWindow from './components/ModalWindow.vue'


export default {

  name: 'App',
  components: {
    PaymentsTable,
    AddCostForm,
    ModalWindow
  },

  computed: {
    categories() {
      return this.$store.getters.getCategories
    },
  },

  data() {
    return {
      pageNumber: 1,
    }
  },

  mounted() {
    this.$store.dispatch('getList')
  },

 methods: {
  showModal() {
    this.$modal.show('addForm')
  }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
}
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.wrapper {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.header-title {
  font-size: 30px;
  color: red;
  width: 100%;
  text-align: center;
}
.add-btn {
  width: 200px;
  padding: 10px 20px;
  background-color: rgb(5, 107, 107);
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.wrapper-form {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 50%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}
</style>
