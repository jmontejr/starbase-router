<template>
  <div id="data" class="container">
      <div class="row">
        <item-component
            :passedItem="item" 
            :type="type"
            v-for="(item, index) in items" 
            :key="index" />
      </div>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
    data() {
        return {
            type: this.$route.params.type || '',
            items: [],
        }
    },
    components: { 'item-component': Item },
    watch: {
        '$route': 'fetchItems'
    },
    methods: {
        fetchItems() {
            this.items = [];
            this.type = this.$route.params.type;
            let initial_ids = [ 1, 13, 14 ];

            for(let anyId of initial_ids) {
                let id = anyId;
                fetch(`https://swapi.dev/api/${this.type}/${id}`)
                    .then(response => response.json())
                    .then(json => this.items.push(json))
                    .catch(error => console.error(error));
            }

        }
    },
    created() {
        this.fetchItems();
    }
}
</script>

<style>

</style>