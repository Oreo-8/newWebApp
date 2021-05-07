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
              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <!-- <h3 class="medium">{{ item }}</h3> -->
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
          <div>列表</div>
        </el-card>
      </el-col>

      <el-col :span="5"><el-card class="box-card"></el-card></el-col>
    </el-row>
  </div>
</template>
<script>
import { getTag } from "@/api/blog";
export default {
  name: "blogMain",
  data() {
    return {
      activeName: "all",
      tagList: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {
    getTag().then((r) => {
      this.tagList = r.data;
    });
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.div-row {
  display: flex;
  flex-direction: row;
}
</style>