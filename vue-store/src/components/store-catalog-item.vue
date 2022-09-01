<template>
    <div class="store-catalog-item">
<img :src="require(item_data.image)" alt="photo"/>
<p class="store-catalog-item-name">{{item_data.name}}</p>
    <div class="last-line flex-container">
        <p>{{item_data.price}} ₽</p>
        <button class="add-item toggled-button">{{item.buttonState}}</button>
    </div>
    </div>
</template>

<script>
import { objectExpression } from '@babel/types';

    export default{
        name: 'store-catalog-item',
        components: {},
        props: {
            item_data: {
                type: Object,
                default(){
                    return {}
                }

            }
        },
        data(){
            return{
                buttonState: "+"
            }
        },
        computed: {},
        methods: {

        }

    }
</script>

<style>
.store-catalog-item{

}
</style>