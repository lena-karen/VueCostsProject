<template>
    <div class="wrapper-form">
        <input type = "number" placeholder="Amount" v-model = "amount">
        <input type="text" placeholder="Type" v-model = "type">
        <input type="date" placeholder="Date" v-model = "date">
        <button @click="onAddCost">Add</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                amount: '',
                type: '',
                date: '',
                id: 4
            }
        },
        computed: {},
        methods: {
            onAddCost() {
                const cost = {
                    amount: +this.amount,
                    type: this.type,
                    date: this.date,
                    id: this.id++
                }
                this.$emit('addCost', cost);
                this.amount = '';
                this.type = '';
                this.date = ''
            }
        }
    }
</script>

<style>
    .wrapper-form {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 20px;
    }
    .wrapper-form input {
        width: 100%;
        height: 30px;
        outline: none;
        border: 1px solid grey;
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