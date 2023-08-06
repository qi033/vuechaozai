<template>
    <div>
        <h2>父组件</h2>
        <child-component @add-data="addData"></child-component>
        <div>
            <h3>父组件数据：</h3>
            <ul v-for="(item, index) in dataList" :key="index.id">
                <li>
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ChildComponent from '../../components/husbandBwox/HusbandBwox.vue';

export default {
    components: {
        ChildComponent
    },
    data() {
        return {
            dataList: []
        };
    },
    methods: {
        addData(data) {
            this.dataList.push(data);
        }
    }
};
</script>
