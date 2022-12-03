<template>
    <div class="edit-form">
        <input type = "number" placeholder="Amount" v-model ='item.amount' >
        <select v-model = "item.type" class="selection">
            <option v-for="category of categories" v-bind:value = "category">{{category}}</option>
           
        </select>
        <button class="wrapper-form-btn" v-on:click = 'saveChange'>Save</button>

    </div>
</template>

<script>
    export default {
        name: 'EditCostForm',
        props: ['id'],
     
        computed: {
            categories() {
                return this.$store.getters.getCategories
            },
            items() {
                return this.$store.getters.getCostsList
            },
            item() {
                return this.items.find(el => el.id == this.id)
            }
        },
     
        methods: {
            saveChange() {
                const changedItems = this.items.map(el => {
                    if (el.id == this.id) {
                        el.type = this.item.type;
                        el.amount = this.item.amount;
                    }
                    return el;
                })
            
                this.$store.commit('changeCost', changedItems);  
                this.$modal.hide('editForm')  
            }
        }
    }
</script>
<style>
    .edit-form {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 0;
        top: -150px;
        padding: 20px;
        border-radius: 10px;
        background-color: white;
        position: absolute;
        border: 1px solid gray;
    }
    .edit-form input {
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
  
</style>