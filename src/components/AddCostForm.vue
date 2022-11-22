<template>
    <div class="wrapper-form">
        <input type = "number" placeholder="Amount" v-model = "costsData.amount">
        <select v-model = "costsData.type" class="selection">
            <option v-for="category of categories" v-bind:value = "category">{{category}}</option>
           
        </select>
        <input type="date" placeholder="Date" v-model = "costsData.date">
        <button @click="addCost">Add</button>
        <router-link to = '/'>Close</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                costsData: {
                
                   // type: 'food',
                    type: this.$route.params.type,
                    amount: this.$route.params.price
                }
                
            }
        },
      /*  mounted() {
            return {
                costsData: {
                    type: this.categories[0]
                }
            }
        }*/
        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
            
        },
        methods: {
            addCost() {
                this.costsData.date = new Date().toLocaleDateString('en-us', {timeZone: 'UTC'})
                this.$store.commit('addNewCost', Object.assign({}, this.costsData));
               // this.$store.dispatch('getList', Object.assign({}, this.costsData));
            }
          
        }
    }
</script>

<style>
    .wrapper-form {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 10px;
        position: absolute;
        top: -50px;
        left: 200px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: rgb(239, 239, 232);

    }
    .wrapper-form input {
        width: 300px;
        height: 30px;
        outline: none;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 5px 20px;
        margin-bottom: 10px;
    }
    .selection {
        width: 343px;
        height: 40px;
        border-radius: 5px;
        padding: 5px 20px;
        margin-bottom: 10px;
    }
    .wrapper-form button {
        width: 200px;
        padding: 10px 20px;
        background-color: rgb(5, 107, 107);
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
</style>