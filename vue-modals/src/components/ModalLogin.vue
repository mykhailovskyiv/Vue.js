<template>
  <modal title="log In" @close="$emit('close')">
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
          />
        </div>

        <button class="button-login">Submit</button>
      </form>
      <div
        class="not-have-account"
        @close="$emit('close')"
        @click="modalCreate = true"
      >
        Dont have account yet?
      </div>
      <modalCreate
        v-if="(modalCreate = modalCreate)"
        @close="modalCreate = false"
      />
    </div>
  </modal>
</template>


<script>
import { required, minLength } from "vuelidate/lib/validators";
import modal from "./UI/Modal";
import modalCreate from "./ModalCreate";
export default {
  name: "ModalLogin",
  components: {
    modal,
    modalCreate,
  },
  props: {},
  data() {
    return {
      name: "",
      password: "",
      modalCreate: false,
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
        };
        console.log(user);
        this.name = "";
        this.password = "";
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

    password: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>

<style lang="scss" scoped >
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
.button-login {
  background-color: blueviolet;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
}
.not-have-account {
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
}
</style>
