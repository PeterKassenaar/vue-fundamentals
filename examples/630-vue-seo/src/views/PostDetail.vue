<template>
    <div>
        <h2>{{ post.title}}</h2>
        <p>{{ post.body}}</p>
        <hr>
        <router-link to="/posts">All posts</router-link>
        <p>(again, see the rendered header in the Chrome DevTools to inspect the set title and description metatag.</p>
    </div>
</template>

<script>
	export default {
		name: "PostDetail",
		data() {
			return {
				post: {
					title: '',
					body: ''
				}
			}
		},
		created() {
			// fetch the post based on id in the querystring.
			fetch('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
				.then(result => result.json())
				.then(result => this.post = result);
		},
		// set the metaInfo: b/c we render async data, we have to use the function notation
        // on metaInfo(). Not just a static object.
		metaInfo() {
			return {
				title: `${this.post.title} - Vue SEO App`,
				meta: [
					{
						name: 'description',
						content: this.post.body.slice(0, 100) // first 100 characters. Just arbitrary
					}
				]
			}
		}
	}
</script>

<style scoped>

</style>
