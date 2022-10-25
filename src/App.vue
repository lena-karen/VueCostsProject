<template>
  <div class="wrapper">
    <header>
      <p class="header-title">My personal costs</p>
    </header>
    <main>
      <button class="add-btn" @click="showForm = !showForm">ADD NEW COST  +</button>
      <AddCostForm @addCost = "addCost" v-if = "showForm"></AddCostForm>
      <PaymentsTable :items="costsList" />
      
    </main>
  </div>
</template>

<script>
import PaymentsTable from './components/PaymentsTable'
import AddCostForm from './components/AddCostForm'
//import Pagination from './components/Pagination'
export default {
  name: 'App',
  components: {
    PaymentsTable,
    AddCostForm,
  //  Pagination
  },
  data() {
    return {
      costsList: [],
      showForm: false,
     // pages: [1],
     // itemsPerPage: 3,
      pageNumber: 1
    }
  },
  created() {
    this.costsList = this.fetchData();
   // this.pages = this.getPageQuantity();
  },
  methods: {
    fetchData(){
      return [
        {
          amount: 100,
          type: 'Entertainment',
          date: '22.10.2022',
          id: 1
        },
        {
          amount: 200,
          type: 'Food',
          date: '23.10.2022',
          id: 2
        },
        {
          amount: 1000,
          type: 'Travel',
          date: '24.10.2022', 
          id: 3
        }
      ]
    },

    addCost(data) {
      this.costsList = [...this.costsList, data];
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
</style>
