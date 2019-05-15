<template>
    <div>
        <PostList/>
    </div>
</template>

<script>
	import PostList from "../components/PostList";

	export default {
		name: "Posts",
		components: {PostList},
        metaInfo:{
			// Title for the PostList Page.
            // This gets overruled by the
            // title of an individual Post page.
			title:'List of Posts - Vue SEO App',
            //... more meta tags....
        }
	}
</script>

<style scoped>

</style>
