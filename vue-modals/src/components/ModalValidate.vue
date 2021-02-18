<template>
  <modal title="Modal Form" @close="$emit('close')">
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- NAME -->
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label>Name</label>
          <input
            class="input"
            type="text"
            required
            v-model="name"
            :class="{ errorInput: $v.name.$error }"
            @change="$v.name.$touch()"
          />
          <p class="errorText" v-if="!$v.name.required">Filed is required</p>
          <p class="errorText" v-if="!$v.name.minLength">
            Name must have at least {{ $v.name.$params.minLength.min }} !
          </p>
        </div>
        <!-- E-MAIL -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email</label>
          <input
            class="input"
            type="text"
            required
            v-model="email"
            :class="{ errorInput: $v.email.$error }"
            @change="$v.email.$touch()"
          />
          <p class="errorText" v-if="!$v.email.required">Filed is required</p>
          <p class="errorText" v-if="!$v.email.email">
            email is not correct {{ $v.name.$params.minLength.min }} !
          </p>
        </div>

        <!-- PASSWORD -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Password</label>
          <input
            class="input"
            type="password"
            required
            v-model.trim="$v.password.$model"
            :class="{ errorInput: $v.password.$error }"
            @change="$v.repeatPassword.$touch()"
          />
          <p class="errorText" v-if="!$v.password.required">
            Filed is required
          </p>
          <p class="errorText" v-if="!$v.password.minLength">
            Password must have at least
            {{ $v.password.$params.minLength.min }} !
          </p>
        </div>
        <!-- REPEAT-PASWORD -->
        <div
          class="form-item"
          :class="{ errorInput: $v.repeatPassword.$error }"
        >
          <label>Repeat password</label>
          <input
            class="input"
            type="password"
            required
            v-model.trim="$v.repeatPassword.$model"
            :class="{ errorInput: $v.repeatPassword.$error }"
            @change="$v.name.$touch()"
          />
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">
            Passwords must be identical
          </p>
        </div>

        <button class="button">Submit</button>
      </form>
    </div>
  </modal>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import modal from "./UI/Modal";
export default {
  name: "ModalValidate",
  components: {
    modal,
  },
  props: {},
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        const user = {
          name: this.name,
          email: this.email,
        };
        console.log(user);
        this.name = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
        this.$v.$reset();
        this.$emit("close");
      }
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>

<style lang="scss" >
.form-item .errorText {
  display: none;
}
.form-item {
  width: 100%;
  .errorText {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: red;
  }
}
input.errorInput {
  border: 1px solid red;
}
</style>
