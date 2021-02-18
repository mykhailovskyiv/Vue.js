<template>
  <div class="new-note">
    <input
      class="new-note__title"
      type="text"
      name=""
      id=""
      v-model="note.title"
    />
    <textarea
      class="new-note__textarea"
      :class="{ back: priority }"
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="note.descr"
    ></textarea>
    <input type="checkbox" v-model="note.priority" />
    <button class="new-note__button" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  name: "NewNote",
  components: {},
  props: {
    note: {
      type: Object,
    },
    priority: {
      type: Boolean,
    },
    // value: {
    //   type: Boolean,
    // },
  },
  watch: {
    // addClassFunction() {
    //   this.priority = this.note.priority;
    // },
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    },
    // addPriority() {
    //   this.$emit("addPriority", this.priority);
    // },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.new-note {
  &__title {
    color: black;
    &.back {
      color: brown;
    }
  }
  &__button {
    background-color: blueviolet;
    height: 50px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
  }
  &__textarea {
    &.back {
      background-color: yellow;
    }
  }
}
</style>
