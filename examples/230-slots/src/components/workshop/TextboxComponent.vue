<template>
<div>
    <h2>Type text and click the button. </h2>
    <p>The text is send to the child component</p>
    <input class="form-control-lg" type="text" placeholder="some text..." v-model="keyword">
    <button class="btn btn-primary" @click="setText()">Set text</button>
    <button class="btn btn-danger" @click="message ='' ">Clear</button>
    <!-- only show child if a message is set -->
    <TextboxChild :message="message" v-if="message" />
</div>
</template>

<script>
	import TextboxChild from "./TextboxChild";
	export default {
		name: "TextboxComponent",
		components: {TextboxChild},
		data(){
			return{
				keyword:'',
                message:''

            }
        },
        methods:{
			setText(){
				this.message = this.keyword;
            }
        }
	}
</script>

<style scoped>

</style>
