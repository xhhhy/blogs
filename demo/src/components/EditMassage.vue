<template>
    <div class="EditMassage">
      <h1>{{title}}</h1>
<el-carousel indicator-position="outside" height="300">
    <el-carousel-item v-for="item in 3" :key="item">
    </el-carousel-item>
  </el-carousel>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="name" label="姓名" width="140" >
        </el-table-column>
        <el-table-column prop="region" label="地区" width="120">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

    </div>
</template>
<script>
import { mapState } from "vuex";
import api from '../../api'
export default {
  name: "EditMassage",
  data() {

    return {
      listtitle: "",
      defaultProps: {
        children: "children",
        label: "label"
      },
      data: [],
    };
  },
  computed: {
    ...mapState(["title",'tableData'])
  },
  methods: {
    getTitle() {
      let that = this
      api.demo.getTitle.getTitle().then(function(response){
       that.$store.dispatch("changetitle", response[0].title);
      })
    },
    gettabledata() {
      let that = this
      api.demo.getTitle.gettabledata().then(function(response){
       that.$store.dispatch("changetableData", response);
      })
    },
    handleNodeClick(data) {
      //console.log(data);
    }
  },
  created() {
    this.getTitle();
    this.gettabledata();
  }
};
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__indicators--outside button {
  background-color: rebeccapurple;
  opacity: 0.24;
}
.el-carousel__item:nth-child(2n) {
  background-color: rebeccapurple;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #2170ca;
}
h1 {
  color: #409eff;
  text-align: center;
  line-height: 60px;
  height: 60px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
