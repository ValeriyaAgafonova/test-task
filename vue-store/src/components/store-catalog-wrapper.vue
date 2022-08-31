<template>
    <header class="store-catalog-wrapper">
<p>{{title}}</p>
    </header>
</template>

<script>
    export default{
        name: 'store-catalog-wrapper',
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
.store-catalog-wrapper{
    display: flex;

}
</style>