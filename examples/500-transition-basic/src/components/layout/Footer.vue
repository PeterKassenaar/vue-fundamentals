<template>
    <div class="footer">
        <hr>
        <p class="text-center text-muted">
            Copyright (C) {{ year }} - Peter Kassenaar
        </p>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>
