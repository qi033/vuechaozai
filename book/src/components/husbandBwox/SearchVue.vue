<template>
    <div>
        <ul>
            <li v-for="item in filteredData" :key="item.name">{{ item.name }} - {{ item.age }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            filteredData: []
        };
    },
    mounted() {
        this.filteredData = this.data;
    },
    methods: {
        filterData(searchText) {
            this.filteredData = this.data.filter(item => {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            });
        }
    }
};
</script>
