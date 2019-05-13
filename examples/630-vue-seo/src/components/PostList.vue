<template>
    <div>
        <h2>All Posts</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="'/post/' + post.id">
                    {{ post.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "PostList",
		data() {
			return {
				posts: []
			}
		},
		created() {
			// fetch some dummy posts. No additional lib required.
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(result => result.json())
				.then(result => this.posts = result.slice(0, 10))
		}
	}
</script>

<style scoped>

</style>
