<template>
    <div>
        <span class="count">{{count}}</span>
        <button @click="increment"></button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data () {
            return {
                count: 0
            }
        },
        methods: {
            increment: function () {
                this.count++
            }
        }
    }
</script>

<style scoped>
    .count {
        font-family: sans-serif;
        font-size: 10px;
    }

</style>