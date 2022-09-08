<template v-if="CATALOG_ITEMS.length">
  <div class="v-store-catalog">
    <store-catalog-item
      v-for="item in CATALOG_ITEMS"
      :key="item.id"
      v-bind:item_data="item"
    />
  </div>
</template>

<script>
import StoreCatalogItem from "./v-store-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-store-catalog",
  components: {
    StoreCatalogItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CATALOG_ITEMS"]),
  },
  methods: {
    ...mapActions(["GET_CATALOG_ITEMS"]),
  },
  async beforeMount() {
await this.GET_CATALOG_ITEMS();
  },
};
</script>

<style>
.v-store-catalog {
  display: flex;
}
</style>
