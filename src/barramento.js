import Vue from 'vue'

export default new Vue({
    methods: {
        setDrawer(drawer) {
            this.$emit('drawerClick', drawer)
        },
        onDrawerClick(callback) {
            this.$on('drawerClick', callback)
        }
    }
})