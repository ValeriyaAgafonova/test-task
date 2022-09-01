<template>
    <div class="store-catalog">
<store-catalog-item
v-for="item in data"
:key="item.id"
:item_data="item" />
    </div>
</template>

<script>

import StoreCatalogItem from './store-catalog-item.vue';
    export default{
        name: 'store-catalog',
        components: {
    StoreCatalogItem
},
        props: {},
        data(){
            return{
                title: "logo"
            }
        },
        computed: {},
        methods: {

        }

    }
</script>

<style>
.store-catalog{
    display: flex;

}
</style>