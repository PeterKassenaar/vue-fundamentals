<template>
    <div>
        <h2>Basic form validation</h2>
        <p>TODO: - update classes to Bootstrap</p>
        <p>- Documentation</p>
        <p>Credits: <a href="https://vuelidate.netlify.com/#sub-basic-form">https://vuelidate.netlify.com/#sub-basic-form</a>.</p>
        <div>
            <div class="form-group alert" :class="{ 'alert-warning': $v.name.$error, 'alert-success': !$v.name.$invalid }">
                <label for="name">Name</label>
                <input id="name" class="form-control" v-model.trim="$v.name.$model"/>
            </div>
            <span>Invalid?: {{ $v.name.$invalid}}</span>
            <div class="alert alert-warning" v-if="!$v.name.required && $v.name.$dirty">Field is required</div>
            <div class="alert alert-warning" v-if="!$v.name.minLength && $v.name.$dirty">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            <hr>
            <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
                <label class="form__label">Age</label>
                <input class="form__input" v-model.trim.lazy="$v.age.$model"/>
            </div>
            <div class="error" v-if="!$v.age.between">
                Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div>
            <span tabindex="0">Blur to see changes</span>
            <hr>
            <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                <label class="form__label">Email</label>
                <input class="form__input" v-model.trim.lazy="$v.email.$model"/>
            </div>
            <div class="error" v-if="!$v.email.required && $v.email.$dirty">Email is required</div>
            <div class="error" v-if="!$v.email.email">Sorry, this is not a valid email address.</div>

        </div>
    </div>
</template>

<script>
	import { required, minLength, between, email } from 'vuelidate/lib/validators'

	export default {
		name: "BasicValidation",
		data() {
			return {
				name: '',
				age: null,
                email:''
			}
		},
		validations: {
			name: {
				required,
				minLength: minLength(4)
			},
			age: {
				between: between(20, 30)
			},
            email:{
				required,
                email
            }

		}
	}
</script>

<style scoped>

</style>
