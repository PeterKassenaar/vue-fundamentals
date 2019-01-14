<template>
    <div>
        <div class="alert alert-info" style="cursor: pointer">
            <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
            <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
        </div>
        <!--Injected content here-->
        <slot v-if="open"></slot>
    </div>
</template>

<script>
	export default {
		name: "CollapsibleSection",
		data() {
			return {
				open: false
			}
		}
	}
</script>

<style scoped>

</style>
