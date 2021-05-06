<template>
  <div id="app">
    <!-- <vue-tinymce v-model="content" :setup="setup" :setting="setting" />
    {{ content }} -->
    <!-- <router-view></router-view> -->
    <index/>
  </div>
</template>

<script>
import index from "./page/index"
export default {
  components:{
    index
  },
  name: "app",
  data() {
    return {
      content: "<p>html content</p>",
      // setting: {
      //   selector: "#iconsdemo",
      //   icons: "custom",
      //   toolbar:
      //     "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
      //   toolbar_drawer: "sliding",
      //   quickbars_selection_toolbar:
      //     "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
      //   plugins: "link image table lists fullscreen quickbars",
      //   language: "zh_CN",
      //   height: 350,
      // },
    };
  },
  methods: {
    setup(editor) {
      console.log(editor);
    },
  },
};
</script>

<style>
</style>
