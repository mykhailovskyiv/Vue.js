<template>
  <div id="app" class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <message v-if="message" :message="message" />
          <newNote :note="note" @addNote="addNote" :priority="note.priority" />
          <div class="notes-header">
            <h1>{{ title }}</h1>
            <search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"
            />
            <p>{{ search }}</p>
            <div class="icons">
              <svg
                :class="{ active: grid }"
                @click="grid = true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg
                :class="{ active: !grid }"
                @click="grid = false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>
          <notes :notes="notesFilter" @remove="removeNote" :grid="grid" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "./components/Message";
import newNote from "./components/NewNote";
import notes from "./components/Notes.vue";
import Search from "./components/Search.vue";
export default {
  name: "App",
  components: {
    message,
    newNote,
    notes,
    Search,
  },
  data() {
    return {
      title: "Notes App",
      search: "",
      message: null,
      grid: true,
      priority: true,
      note: {
        title: "",
        descr: "",
        priority: false,
      },
      notes: [
        {
          title: "First Note",
          descr: "Description first title",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Second Note",
          descr: "Description second title",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Third Note",
          descr: "Description third title",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      let { title, descr, priority } = this.note;
      if (title === "") {
        this.message = "title cant be blank";
        return false;
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        priority,
      });
      this.message = "note added";
      this.note.title = "";
      this.note.descr = "";
      this.note.priority = Boolean;
    },
    // addPriority() {
    //   this.priority;
    // },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
  computed: {
    notesFilter() {
      let array = this.notes,
        search = this.search;
      if (!search) return array;
      search = search.trim().toLowerCase();
      array = array.filter(function (item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    },
  },
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
    .new-note {
      display: flex;
      flex-direction: column;
      input,
      textarea {
        margin-bottom: 40px;
        border-radius: 10px;
        border: 1px solid black;
      }
      input {
        height: 40px;
      }
    }
    .notes-header {
      display: flex;
      flex-direction: column;
      .icons {
        width: 60px;
        align-self: flex-end;
        display: flex;
        justify-content: space-between;
        height: 30px;
        svg {
          width: 45%;
          color: #575757;
          cursor: pointer;
          &.active {
            color: blueviolet;
          }
        }
      }
    }
  }
}
</style>
