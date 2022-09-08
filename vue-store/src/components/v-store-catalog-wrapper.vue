<template>
    <header class="v-store-catalog-wrapper">
<p>{{title}}</p>
    </header>
</template>

<script>
    export default{
        name: 'v-store-catalog-wrapper',
        components: {},
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
.v-store-catalog-wrapper{
    display: flex;

}
</style>