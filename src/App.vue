<template>
  <div class="wrapper">
    <header>
      <p class="header-title">My personal costs</p>
    </header>
    <main class="main">
      <div>
        <router-link to = '/form' class="add-btn" @click="showForm = !showForm">ADD NEW COST  +</router-link>
        <router-link class="add-btn router-btn" to = '/form/food/200'>ADD NEW FOOD COST</router-link>
        <router-link class="add-btn router-btn" to = '/form/transport/50'>ADD NEW TRANSPORT COST</router-link>
        <router-link class="add-btn router-btn" to = '/form/entertainment/1000'>ADD NEW ENTERTAINMENT COST</router-link>
      </div>
      
    <router-view ></router-view>
    <AddCostForm v-if = "showForm"></AddCostForm>
    <PaymentsTable />
    
    </main>
  </div>
</template>

<script>
import PaymentsTable from './components/PaymentsTable'
import AddCostForm from './components/AddCostForm'
import PageNotFound from './components/PageNotFound'
//import Pagination from './components/Pagination'
export default {
  name: 'App',
  components: {
    PaymentsTable,
    AddCostForm,
    PageNotFound
  //  Pagination
  },
  data() {
    return {
     // costsList: [],
      showForm: false,
     // pages: [1],
     // itemsPerPage: 3,
      pageNumber: 1
    }
  },
  /*created() {
    this.costsList = this.fetchData();
   // this.pages = this.getPageQuantity();
  },*/
 /* methods: {
    fetchData(){
      return [
        {
          amount: this.amount,
          type: this.categories[0],
          date: '22.10.2022',
        },
        
      ]
    },*/

   /* addCost(data) {
      this.costsList = [...this.costsList, data];
    }
  }*/
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
.main div {
  display: flex;
  gap: 20px;
}
.router-btn {
  text-decoration: none;
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
