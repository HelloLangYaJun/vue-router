<template>
    <h1>首页{{this.$route.params }}</h1>
</template>

<script>
    export default {
        name: "index"
    }
    console.log(this.$route)
</script>

<style scoped>

</style>
