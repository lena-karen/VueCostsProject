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
            
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" 
                v-on:click="toggleModal(item.id)" class="icon-menu"/>

                <ModalWindow v-bind:id = 'item.id'>
                    <ContextMenu v-bind:id = 'item.id'/>
                </ModalWindow>
                
            </div>
            <ModalWindow v-bind:id = "'editForm'">
                <EditCostForm v-bind:id = "currentItem"/>
            </ModalWindow>
           
          <!--  <ModalWindow class = 'wrapper-form' type = 'editForm' closeVisible = 'true' :id = 'currentItem' />-->
        <Pagination @changePage = "changePage" />
    </div>
</template>

<script>
import Pagination from './Pagination.vue'
import ModalWindow from './ModalWindow.vue'
import EditCostForm from './EditCostForm.vue'
import ContextMenu from './ContextMenu.vue'

    export default {
        name: 'PaymentsTable',
        components: {
            Pagination,
            ModalWindow,
            EditCostForm,
            ContextMenu
        },
        data() {
            return {
                page: 1,
                currentItem: '',
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

        methods: {
            changePage(num) {
                this.page = num;
            },
            cons() {
                this.p = true;
            },
            toggleModal(id) {
                this.currentItem = id
                this.$modal.toggle(id)
            },
        }
    }
</script>
    
<style>
    .wrapper-table {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-top: 100px;
        position: relative;
    }
    .table-row {
        display: flex;
        border-bottom: 1px solid rgb(199, 195, 195);
        text-align: center;
        position: relative;
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
    .context-menu {
        cursor: pointer;
    }
    
    .icon-menu {
        align-self: center;
        margin-left: 20px;
        cursor: pointer;
    }
    .wrapper-form {
        background-color: white;
    }
</style>