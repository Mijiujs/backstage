<template>
<div class="userdata">

    <div class="demo-input-size">
      <el-input v-model="userId" placeholder="请输入用户id"></el-input>
      <el-input v-model="userAge" placeholder="请输入用户年龄"></el-input>
  </div>

  <el-select v-model="userSex" placeholder="请选择用户性别">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-row>
    <el-button type="success" class="btn1" @click="addData">注册</el-button>
    <el-button type="danger" @click="deleteData">删除</el-button>
</el-row>

</div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
      userAge: "",
      options: [{
          value: '男',
          label: '男'
        },{
          value: '女',
          label: '女'
        }],
        userSex: '',

        userData:[],
    }
  },

  mounted(){
    // this.addData()
    // this.deleteData()
  },

  methods:{
    addData(){
      if(this.userId != "" && this.userAge != "" && this.userSex != ""){
      
      this.$axios.post('http://localhost:3000/posts',
      {
        id:Number(this.userId),
        age:this.userAge,
        sex:this.userSex
      }
      ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
    else{
      alert("请输入完整用户数据！");
    }
    },

    
    deleteData(){
      if(this.userId != ""){
      this.$axios.delete(`http://localhost:3000/posts/${this.userId}`
      //   data:{
      //     id:this.userId
      // }
    ).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
    else{
      alert("请输入需要删除的ID号")
    }
  }

  }
}
</script>

<style scoped>
.demo-input-size .el-input{width: 180px;margin-right: 15px;display: inline-block;}

.el-row{display: inline-block;}
</style>


