<template>
    <header class="store-header">
<p>{{title}}</p>
    </header>
</template>

<script>
    export default{
        name: 'store-header',
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
.store-header{
    display: flex;
  justify-content: space-between;
  align-items: center;
  height: 104px;
  padding: 0 64px;
  background-color: black;
}
</style>