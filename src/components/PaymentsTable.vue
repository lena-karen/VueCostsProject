<template>
    <div class="wrapper-table">
        <div class="table-row">
            <p class="cost-date">Date</p>
            <p class="cost-category">Category</p>
            <p class="cost-amount">Amount</p>
        </div>
        <div v-for = "item, idx of costsOnPage" v-bind:key="idx" class="table-row">
            <p class="cost-date">{{item.date}}</p>
            <p class="cost-category">{{item.type}}</p>
            <p class="cost-amount">{{item.amount}}</p>
        </div>
        <Pagination @changePage = "changePage" />
    </div>
</template>

<script>
import Pagination from './Pagination'

    export default {
        
        data() {
            return {
                page: 1,
            }
        },
        computed: {
            items() {
                return this.$store.getters.getCostsList
            },
            quantityOnPage() {
                return this.$store.getters.getQuantityOnPage
            },
            costsOnPage: function() {
                let subArray = [];
                for (let i = this.quantityOnPage * (this.page - 1); i < Math.min(this.page * this.quantityOnPage, this.items.length); i++) {
                    subArray.push(this.items[i])
                }
                return subArray
            },
        },
        components: {
            Pagination
        },
        methods: {
            changePage(num) {
                this.page = num;
            }
        }
    }
</script>
    
<style>
    .wrapper-table {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-top: 100px;
    }
    .table-row {
        display: flex;
        border-bottom: 1px solid rgb(199, 195, 195);
        text-align: center;
    }
    .table-row:first-child {
        font-weight: bold;
    }
    .cost-num {
        width: 35px;
    }
    .cost-date {
        width: 150px;
        display: block;
    }
    .cost-category {
        width: 300px;
    }
    .cost-amount {
        width: 60px;
    }
</style>