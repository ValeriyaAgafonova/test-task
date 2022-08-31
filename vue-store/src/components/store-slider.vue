<template>
    <header class="store-slider">
<p>{{title}}</p>
    </header>
</template>

<script>
    export default{
        name: 'store-slider',
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
.store-slider{
    display: flex;

}
</style>