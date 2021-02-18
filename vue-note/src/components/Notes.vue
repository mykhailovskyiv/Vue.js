<template>
  <div class="notes">
    <div
      class="note"
      :priority="note.priority"
      :class="{ full: !grid, back: !priority }"
      v-for="(note, index) in notes"
      :key="index"
    >
      <div class="note-header" :class="{ full: !grid }">
        <h3 class="note-header__title" :class="{ full: !grid }">
          {{ note.title }}
        </h3>
        <div class="note-header__remove" @click="removeNote(index)">Х</div>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.priority }}</span>
        <span class="note-body__date">{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  components: {},
  props: {
    notes: {
      type: Array,
    },
    grid: {
      type: Boolean,
    },
  },
  data() {
    return {
      priority: true,
    };
  },

  mounted() {},
  beforeDestroy() {},
  methods: {
    removeNote(index) {
      console.log(`not - ${index} revomed`);
      this.$emit("remove", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.notes {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  pad: 30px 0;

  .note {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 45%;
    background-color: #e1e3e6;
    margin: 30px 0;
    padding: 10px;
    border-radius: 10px;
    &-header {
      font-weight: bold;
      color: #4e57cf;
      display: flex;
      justify-content: space-between;
      width: 100%;
      &__title {
        &.full {
          justify-self: center;
          width: 90%;
        }
      }
      &__remove {
        cursor: pointer;
      }
      &.full {
        justify-content: center;
      }
    }
    &-body {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      &__date {
        color: grey;
        font-size: 14px;
      }
    }
    &.full {
      width: 100%;
      align-items: center;
    }
    &.back {
      background-color: red;
    }
  }
}
</style>
