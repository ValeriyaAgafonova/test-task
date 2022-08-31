<template>
    <header class="store-filters">
<p>{{title}}</p>
    </header>
</template>

<script>
    export default{
        name: 'store-filters',
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
.store-filters{
    display: flex;

}
</style>