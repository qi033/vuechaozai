<template>
    <div>
        <h3>子组件</h3>
        <div v-for="(item, index) in items" :key="index.id" @click="addItem(item)">
            {{ item.name }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ]
        };
    },
    methods: {
        addItem(item) {
            this.$emit('add-data', item);
        }
    }
};
</script>
