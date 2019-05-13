<template>
    <div>
        <h2>Our Clients</h2>
        <ul>
            <li>Microsoft</li>
            <li>Apple</li>
            <li>Google</li>
            <li>Twitter</li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "ClientList",
		metaInfo: {
			// if no subcomponents specify a metaInfo.title, this title will be used
			title: 'List of clients',
			// all titles will be injected into this template
			titleTemplate: '%s | Vue SEO-app',
            // See the rendered Client-page and Inspect it in Chrome DevTools.
            // The meta-tags are there. NOTE! They are NOT rendered on the server by default.
            // You need to use a SSR-technique for that. See for example https://vue-meta.nuxtjs.org/guide/ssr.html#server-side-rendering
			meta: [
				{charset: 'utf-8'},
                {lang: 'en'},
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				{name: 'description', content: 'This page contains a list of awesome clients for ACME company '},
				{name: 'author', content: 'Peter Kassenaar'}
			],
            // changed - a callback function that is called every time the route changes, and
            // the meta tags are updated. This is here only for demonstration purposes. You'll
            // likely want this on some higher level component
			changed (newInfo, addedTags, removedTags) {
				console.log('Metadata was updated!');
				console.log({newInfo});
				console.log({addedTags});
				console.log({removedTags});
			}
		}
	}
</script>

<style scoped>

</style>
