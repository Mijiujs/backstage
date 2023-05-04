<template>
<div class="userdata">

    <div class="demo-input-size">
      <el-input v-model="ID" placeholder="请输入用户id"></el-input>
      <el-input v-model="Age" placeholder="请输入用户年龄"></el-input>
  </div>

  <el-select v-model="sex" placeholder="请选择用户性别">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-row>
    <el-button type="success" class="btn1" @click="addData">注册</el-button>
    <!-- <el-button type="danger" @click="deleteData">删除</el-button> -->
</el-row>

</div>
</template>

<script>
export default {
  data() {
    return {
      ID: "",
      Age: "",
      options: [{
          value: '选项1',
          label: '男'
        },{
          value: '选项2',
          label: '女'
        }],
        sex: '',

        userData:[],
    }
  },

  mounted(){
    // this.addData(),
    // this.deleteData()
  },

  methods:{
    addData(){
      this.$axios.post('http://localhost:3000/posts',
      {
        'id':'this.ID',
        'age':'this.Age',
        'sex':'this.sex'
      },{
        header:{
          'content-type':'application/json'
        }
      }
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    },

  }
}
</script>

<style scoped>
.demo-input-size .el-input{width: 180px;margin-right: 15px;display: inline-block;}

.el-row{display: inline-block;}
</style>

