<template>
    <div class="wrapper-form">
        <input type = "number" placeholder="Amount" v-model = "costsData.amount">
        <select v-model = "costsData.type" class="selection">
            <option v-for="category of categories" v-bind:value = "category">{{category}}</option>
           
        </select>
        <input type="date" placeholder="Date" v-model = "costsData.date" >
        <button class="wrapper-form-btn" @click="addCost">Add</button>
        <button v-on:click = "$modal.hide(id)" class="close-btn">x</button>
    </div>
</template>

<script>
    export default {
        name: 'AddCostForm',
        data() {
            return {
                costsData: {        
                    type: 'food',
                    amount: 0,
                    date: new Date().toLocaleDateString('en-us', {timeZone: 'UTC'})
                }
                
            }
        },
        props: ['id'],
        mounted() {
            return {
                costsData: {
                    type: this.categories[0]
                }
            }
        },
        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
            
        },
        methods: {
            addCost() {
                this.costsData.id = Date.now();
                this.costsData.date = new Date().toLocaleDateString('en-us', {timeZone: 'UTC'})
                this.$store.commit('addNewCost', Object.assign({}, this.costsData));
               // this.$store.dispatch('getList', Object.assign({}, this.costsData));
            }
          
        }
    }
</script>

<style>
   .wrapper-form {
        position: absolute;
        right: 50%;
        background-color: white;
        z-index: 100;
        border: 1px solid gray;
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
    .wrapper-form-btn {
        width: 200px;
        padding: 10px 20px;
        background-color: rgb(5, 107, 107);
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
    .close-btn {
        position: absolute;
        top: 5px;
        right: 5px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        background-color: white;
    }
</style>