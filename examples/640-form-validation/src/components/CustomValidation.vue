<template>
    <div class="row">
        <div class="col-6">
            <h2>Different types of custom validation, using Vuelidate</h2>
            <p>For password matching, using the 'sameAs' property. See: <a href="https://vuelidate.netlify.com/#sub-contextified-validators">
                https://vuelidate.netlify.com/#sub-contextified-validators</a>.
            </p>
            <form @submit.prevent>
                <!-- Password field-->
                <div class="form-group alert"
                     :class="{ 'alert-danger': $v.password.$error,
                            'alert-success': !$v.password.$invalid }">
                    <label for="password">Password *</label>
                    <input type="password" id="password" class="form-control"
                           placeholder="password"
                           v-model.trim="$v.password.$model"/>

                    <div v-if="!$v.password.required && $v.password.$dirty">Field is required</div>
                    <div v-if="!$v.password.minLength && $v.password.$dirty">Password must have at least
                        {{$v.password.$params.minLength.min}} characters.
                    </div>
                </div>
                <!-- Password Match field-->
                <div class="form-group alert"
                     :class="{ 'alert-danger': $v.passwordMatch.$error,
                            'alert-success': !$v.passwordMatch.$invalid }">
                    <label for="passwordMatch">Password Match</label>
                    <input type="password" id="passwordMatch" class="form-control"
                           placeholder="password again"
                           v-model.trim="$v.passwordMatch.$model"/>

                    <div v-if="!$v.passwordMatch.required && $v.passwordMatch.$dirty">Field is required</div>
                    <div v-if="!$v.passwordMatch.minLength && $v.passwordMatch.$dirty">Password must have at least
                        {{$v.passwordMatch.$params.minLength.min}} characters.
                    </div>
                    <div v-if="!$v.passwordMatch.sameAsPassword">Sorry, passwords do not match!</div>
                </div>
                <hr>

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
	import {required, minLength, sameAs} from 'vuelidate/lib/validators'

	export default {
		name: 'CustomValidation',
		data() {
			return {
				password: '',
                passwordMatch:''
			}
		},
		validations: {
			password: {
				required,
				minLength: minLength(5)
			},
            passwordMatch:{
				required,
				minLength: minLength(5),
				sameAsPassword: sameAs('password')
            }
		},
		computed: {
			passwordCheck() {
				return this.$v.password;
			}
		}
	}
</script>

<style scoped>

</style>
