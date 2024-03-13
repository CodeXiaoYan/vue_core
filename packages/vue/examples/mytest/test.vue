<template>
    <div class="about">
        <div class="scrollView">
            <div class="list">
                <div class="item" v-for="item in list" :key="item">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    mounted() {
        const total = 100000;
        const list = [];
        for (let i = 0; i < total; i++) {
            list.push(i);
        }
        this.list = list;
    }
};
</script>
<style>
.scrollView {
    width: 200px;
    height: 300px;
    background-color: red;
    overflow-y: scroll;
    position: relative;
}

.item {
    height: 50px;
}
</style>