<template>
    <div>
        <input type="text" v-model="searchText" @input="search" placeholder="Search">
        <child-component :data="data"></child-component>
    </div>
</template>

<script>
import ChildComponent from '../../components/husbandBwox/SearchVue.vue';

export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            data: [
                { name: 'John', age: 25 },
                { name: 'Jane', age: 30 },
                { name: 'Bob', age: 35 }
            ],
            searchText: ''
        };
    },
    methods: {
        search() {
            this.$refs.childComponent.filterData(this.searchText);
        }
    }
};
</script>
