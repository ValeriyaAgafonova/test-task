<template>
    <header class="store-sorting">
<p>{{title}}</p>
    </header>
</template>

<script>
    export default{
        name: 'store-sorting',
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
.store-sorting{
    display: flex;

}
</style>