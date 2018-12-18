<template>
    <div>
        <h2 class="heading">Component 1</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illum molestiae quae tempore ut. Expedita
            nostrum omnis perspiciatis porro praesentium repellat similique voluptate voluptatum. Dolorum eaque ex
            praesentium quibusdam voluptates?
        </p>
    </div>
</template>

<script>
	export default {
		name: "ComponentOne",
	}
</script>

<!-- This component uses a scoped style. This means that the style is only visible-->
<!-- inside this component. Other components can have the same style name, without naming-->
<!-- collisions. -->
<!-- It is considered best practice to only use scoped styles inside components. -->
<style scoped>
    .heading {
        font-size: 36px;
        color: cornflowerblue;
    }
</style>
