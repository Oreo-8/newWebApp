<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="19">
        <el-card class="box-card">
          <div>
            <div class="div-row" style="margin-bottom: 10px">
              <div style="width: 100%">
                <el-autocomplete
                  style="width: 100%"
                  prefix-icon="el-icon-search"
                />
              </div>
              <div class="div-row">
                <el-button
                  style="margin-left: 10px"
                  icon="el-icon-search"
                  circle
                />
                <el-button
                  style="margin-left: 10px"
                  icon="el-icon-refresh"
                  circle
                />
              </div>
            </div>
          </div>

          <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="所有专题" name="all">
              <el-divider content-position="left">热门文章</el-divider>
              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item
                  v-for="(item, index) in popularList"
                  :key="index"
                >
                  <div :style="getStyle(item.body)">
                    <h3
                      style="
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        color: #000000;
                      "
                    >
                      {{ item.title }}
                    </h3>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </el-tab-pane>
            <el-tab-pane
              v-for="(item, index) in tagList"
              :key="index"
              :label="item.name"
              :name="item.id + ''"
            />
          </el-tabs>
          <div>
            <div v-html="htmlData"></div>
            <el-divider content-position="left">{{ activeTitle }}</el-divider>
            <page-item />
          </div>
        </el-card>
      </el-col>
      <el-col :span="5"><el-card class="box-card"></el-card></el-col>
    </el-row>
  </div>
</template>
<script>
import { getTag, getPopularBlog } from "@/api/blog";
import { imgFirst } from "@/utils/index";
import backImg from "@/assets/image4.jpg";
import pageItem from "@/components/pageItem";
export default {
  name: "blogMain",
  components: {
    pageItem,
  },
  data() {
    return {
      activeName: "all",
      activeTitle: "热门文章-->专区",
      tagList: [],
      popularList: [],
      htmlData: "",
    };
  },
  computed: {},
  methods: {
    imageFilter(str) {
      let img = imgFirst(str);
      if (!img) {
        return backImg;
      }
      return img;
    },
    getStyle(str) {
      return {
        textAlign: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: "url(" + this.imageFilter(str) + ")",
        backgroundPosition: "center",
      };
    },
    handleClick(tab, event) {
      this.activeTitle = tab.label + "-->专区";
      this.htmlData = "";
      let index = this.tagList.findIndex((item) => item.id == tab.name);

      if (index != -1) {
        this.htmlData = this.tagList[index].tagDtl;
      }
    },
  },
  created() {
    getTag().then((r) => {
      this.tagList = r.data;
    });
    getPopularBlog().then((r) => {
      this.popularList = r.data;
    });
  },
};
</script>
<style scoped>
.div-row {
  display: flex;
  flex-direction: row;
}
</style>