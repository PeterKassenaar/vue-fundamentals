<template>
    <div class="card-div">
        <div class="card-photo">
            <slot name="card-photo"></slot>
        </div>
        <div class="card-title">
            <slot name="card-title"></slot>
        </div>
        <div class="card-text">
            <slot name="card-text"></slot>
        </div>
        <div class="card-btn">
            <slot name="card-btn"></slot>
        </div>
    </div>
</template>

<script>
	export default {
		name: "VueCard"
	}
</script>

<style scoped>
    .card-div {
        border: 3px solid crimson;
        padding: 10px;
        border-radius: 40px;
    }

    .card-photo img {
        border-radius: 40px;
        width: 100%;
    }

    .card-title {
        font-size: 26px;
        font-weight: bold;
    }

    .card-text {
        font-size: 12px;
    }

    .card-btn {
        text-align: center;
    }
</style>
