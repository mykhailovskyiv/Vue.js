<template>
  <div id="app" class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <button class="button" @click="modalFirst = !modalFirst">
            Show Modals
          </button>
          <modal
            title="first Modal"
            v-show="modalFirst"
            @close="modalFirst = false"
          >
            <div slot="body">
              <p>text text</p>
              <button class="button" @click="modalFirst = !modalFirst">
                done
              </button>
            </div>
          </modal>
          <button class="button" @click="modalSecond.show = !modalSecond.show">
            Show Modals Form
          </button>
          <modal
            title="Modal Form"
            v-show="modalSecond.show"
            @close="modalSecond.show = false"
          >
            <div slot="body">
              <form @submit.prevent="submitSecondForm">
                <label for="">Name</label>
                <input
                  class="input"
                  type="text"
                  required
                  v-model="modalSecond.name"
                />
                <label for="">Email</label>
                <input
                  class="input"
                  type="email"
                  required
                  v-model="modalSecond.email"
                />
                <button class="button">Submit</button>
              </form>
            </div>
          </modal>
          <button class="button" @click="modalValidate = !modalValidate">
            Show Modals Form + validate
          </button>
          <modalValidate
            v-show="modalValidate"
            @close="modalValidate = false"
          />
        </div>
        <div class="container second">
          <div class="enter">
            <button class="button" @click="modalLogin = !modalLogin">
              Log in
            </button>
            <button class="button" @click="modalCreate = !modalCreate">
              Create account
            </button>
          </div>
          <modalLogin v-show="modalLogin" @close="modalLogin = false">
          </modalLogin>
          <modalCreate v-show="modalCreate" @close="modalCreate = false" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modal from "./components/UI/Modal";
import modalValidate from "./components/ModalValidate.vue";
import modalLogin from "./components/ModalLogin";
import modalCreate from "./components/ModalCreate";

export default {
  name: "App",
  components: {
    modal,
    modalValidate,
    modalLogin,
    modalCreate,
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: "",
        email: "",
      },
      modalValidate: false,
      modalLogin: false,
      modalCreate: false,
    };
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email,
      });
      this.modalSecond.name = "";
      this.modalSecond.email = "";
      this.modalSecond.show = false;
    },
  },
  computed: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .wrapper-content {
    width: 80%;
    margin: 0 auto;
    .container {
      display: flex;
      justify-content: space-around;
      &.second {
        margin-top: 50px;
        .enter {
          display: flex;
          justify-content: space-around;
          width: 100%;
          .button {
            background-color: blueviolet;
          }
        }
      }
    }
    .button {
      width: 200px;
      height: 40px;
      border-radius: 10px;
      text-transform: uppercase;
      background-color: orangered;
      border: none;
      color: white;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.input {
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
