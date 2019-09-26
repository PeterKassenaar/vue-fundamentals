<template>
    <div class="row">
        <div class="col-6">
            <h2>Basic form validation using Vuelidate</h2>
            <p>Credits and online examples: <a href="https://vuelidate.netlify.com/#sub-basic-form">https://vuelidate.netlify.com/#sub-basic-form</a>.
            </p>
            <p>* denotes a required field.</p>
            <form @submit.prevent>
                <!--                Name field-->
                <div class="form-group alert"
                     :class="{ 'alert-danger': $v.name.$error, 'alert-success': !$v.name.$invalid }">
                    <label for="name">Name *</label>
                    <input id="name" class="form-control" placeholder="name"
                           v-model.trim="$v.name.$model"/>
                    <span v-if="$v.name.$invalid">Currently Invalid</span>

                    <div v-if="!$v.name.required && $v.name.$dirty">Field is required</div>
                    <div v-if="!$v.name.minLength && $v.name.$dirty">Name must have at least
                        {{$v.name.$params.minLength.min}} letters.
                    </div>
                </div>
                <!--                Age field-->
                <div class="form-group alert"
                     :class="{ 'alert-danger': $v.age.$error, 'alert-success': !$v.age.$invalid  }">
                    <label for="age">Age *</label>
                    <input id="age" class="form-control" type="number"
                           v-model.trim.number.lazy="$v.age.$model"/>
                    <div v-if="!$v.age.between">
                        Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}
                    </div>
                </div>
                <!--                Email-->
                <div class="form-group alert"
                     :class="{ 'alert-danger': $v.email.$error, 'alert-success': !$v.email.$invalid  }">
                    <label for="email">Email *</label>
                    <input id="email" class="form-control"
                           v-model.trim.lazy="$v.email.$model"/>
                    <div class="error" v-if="!$v.email.required && $v.email.$dirty">Email is required</div>
                    <div class="error" v-if="!$v.email.email">Sorry, this is not a valid email address.</div>
                </div>
<!--                Submit-->
                <button type="submit" class="btn btn-primary"
                        @click="onSubmit()"
                        :disabled="$v.$invalid"
                >Submit</button>
            </form>
        </div>
        <div class="col-6">
            <!--            Status of the form as a whole. I created the CSS-classes for this-->
            <!--            below, as scoped classes for this component.-->
            <h2>Form status</h2>
            <div class="form-valid" v-if="!$v.$invalid">Valid</div>
            <div class="form-invalid" v-if="$v.$invalid">Invalid</div>
        </div>
    </div>
</template>

<script>
	import {required, minLength, between, email} from 'vuelidate/lib/validators'

	export default {
		name: "BasicValidation",
		data() {
			return {
				name: '',
				age: null,
				email: ''
			}
		},
        methods:{
			onSubmit(){
				alert( `Form submitted: ${this.name}, ${this.age}, ${this.email}` )
            }
        },
		// The validations for our form. The rules are picked up by Vuelidate
		// and applied to the HTML template above.
		validations: {
			name: {
				required,
				minLength: minLength(4)
			},
			age: {
				required,
				between: between(18, 65)
			},
			email: {
				required,
				email
			}
		}
	}
</script>

<style scoped>

</style>
