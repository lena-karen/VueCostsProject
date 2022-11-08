<template>
    <div class="pagination">
       <span @click="onDecreasePage">&lt;</span> 
       <span :class="{active: clickedPage == page}" @click="onChangePage(page)" v-for="page of pagesArray" v-bind:key="page">{{page}}</span>
       <span @click="onIncreasePage">&gt;</span> 
    </div>
</template>

<script>
    export default {
        props: ['costsQuantity'],
        created() {
           
        },
        data() {
            return {
              //  pagesArray: [1],
                itemsPerPage: 5,
                clickedPage: 1
            }
        },
        computed: {
            pagesArray: function() {
                if (this.costsQuantity == 0) {
                    return 1;
                } else {
                    const pagesQuantity =  Math.ceil(this.costsQuantity / this.itemsPerPage);
                    return pagesQuantity
                }
                    
                
            }
        },
        methods: {
            onDecreasePage() {
                if (this.clickedPage == 1) {
                    return;
                } else {
                    this.clickedPage--;
                    this.onChangePage(this.clickedPage)
                }
                
            },
            onIncreasePage() {
                console.log(this.pagesArray.length)
                console.log(this.clickedPage)
                

                if (this.clickedPage == Math.ceil(this.costsQuantity/this.itemsPerPage)) {
                    return;
                } else {
                    this.clickedPage++;
                    this.onChangePage(this.clickedPage)
                }
            },
            onChangePage(pageNum) {
                this.$emit('changePage', pageNum);
                this.clickedPage = pageNum;
                
            }
        }
    }
</script>

<style>
    .pagination {
        border-bottom: 1px solid rgb(199, 195, 195);
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .pagination span {
        cursor: pointer;
        margin: 0 5px;
        padding: 5px;
    }
    .pagination span:hover {
        color: grey;
    }
    .active {
         color: red;
    }
</style>