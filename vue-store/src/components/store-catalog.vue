<template>
    <header class="store-catalog">
<p>{{title}}</p>
    </header>
</template>

<script>
    export default{
        name: 'store-catalog',
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
.store-catalog{
    display: flex;

}
</style>