<template>
    <div class="wrapper-table">
        <div class="table-row">
            <p class="cost-num">#</p>
            <p class="cost-date">Date</p>
            <p class="cost-category">Category</p>
            <p class="cost-amount">Amount</p>
        </div>
        <div v-for = "item, idx of costsOnPage" v-bind:key="idx" class="table-row">
            <p class="cost-num">{{item.id}}</p>
            <p class="cost-date">{{item.date}}</p>
            <p class="cost-category">{{item.type}}</p>
            <p class="cost-amount">{{item.amount}}</p>
        </div>
        <Pagination @changePage = "changePage" :costsQuantity="items.length"/>
    </div>
</template>

<script>
import Pagination from './Pagination'
    export default {
        props: {
            items: {
                type: Array,
                default: [],
            }
        },
        data() {
            return {
                page: 1,
                quantityOnPage: 5
            }
        },
        computed: {
            costsOnPage: function() {
                let subArray = [];
                for (let i = this.quantityOnPage * (this.page - 1); i < Math.min(this.page * this.quantityOnPage, this.items.length); i++) {
                    subArray.push(this.items[i])
                }
                return subArray
            }
        },
        components: {
            Pagination
        },
        methods: {
            changePage(num) {
                this.page = num;
                console.log(num)
             //   console.log(this.items[0].amount, this.page, this.quantityOnPage)
               // this.quantityOnPage = quantity;
            /*    for (let i = num * quantity - quantity; i < num * quantity; i++) {
                    this.costsOnPage.push(this.items[i])
                console.log(this.items[i], num, quantity)
                }
                for (let i = 0; i < this.costsOnPage.length; i++ ) {
                    console.log(this.costsOnPage[i])
                }*/
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
    }
    .table-row:first-child {
        font-weight: bold;
    }
    .cost-num {
        width: 35px;
    }
    .cost-date {
        width: 200px;
        display: block;
    }
    .cost-category {
        width: 300px;
    }
    .cost-amount {
        width: 30px;
    }
</style>