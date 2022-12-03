<template>
    <div class="context-main">
        <div v-on:click="showEditForm" class="edit">
            
            <font-awesome-icon icon="fa-solid fa-pen" />
            <span>Редактировать</span>
        </div>
        <div v-on:click="deleteItem" class="delete">
            <font-awesome-icon icon="fa-solid fa-trash-can" />
            <span>Удалить</span>
        </div>
        
    </div>
</template>

<script>
    import ModalWindow from './ModalWindow.vue'
    export default {
        name: 'ContextMenu',
        components: {ModalWindow},
        props: ['id'],
     
        methods: {
            showEditForm() {
                this.$modal.show('editForm')
                this.$modal.toggle(this.id)
            },
            deleteItem() {
              
                this.$store.commit('deleteCost', this.items.filter(el => el.id != this.id));
                this.$modal.toggle(this.id)
            }

        },
       
        computed: {
            items() {
                return this.$store.getters.getCostsList
            },
        }
    }
</script>

<style>
   .context-main {
        background-color: white;
        border: 1px solid lightgray;
        
        position: absolute;
        top: 30px;
        right: 0;
        
        z-index: 100;
        display: flex;
        flex-direction: column;
        

   }
    .context-main span {
        padding: 2px;
        margin: 0;
        font-size: 12px;
        margin-left: 10px;

    }
    .context-main .edit, .delete {
        padding: 5px;
        display: flex;
    }
    .context-main .edit:hover, .delete:hover {
        background-color: lightgray;
        cursor: pointer;
    }
  
</style>