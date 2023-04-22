
<template>
  <div>
    <h1>用户列表页面</h1>
    <div v-once>Hello {{ name }}，请完善相关功能</div>
    <!-- <p v-html="rawHtml"></p>
    <p v-bind:class="color">111</p>
    <p>{{ num + 1 * 10 }}</p>
    <p>{{ a ? 'yes' : 'no' }}</p>
    <p>{{ s.split('').reverse().join('') }}</p>

    <p v-if="seen">b=true 你就能看见我 b=false 你就看不见我</p>

    <div @click="click1">
      <div @click.stop="click2">点我</div>
    </div> -->

    <!-- <p v-bind:class="[isActive ? 'active' : '', isred ? 'red' : '']"
    style="width: 100px;height: 100px;font-size: 15px;"
    >isActive=true 添加 isActive=false 不添加</p> -->

<!-- 
    <div 
    :style="{color:color,fontSize:size,background:isred ? 'red' : ''}">112233</div>
  </div> -->
  
  <!-- <div class="title">
  <span>用户ID</span> <span>用户性别</span> <span>用户年龄</span>
</div>

  <div v-for="item in userList" :key="item">{{ item.id }} {{ item.sex }} {{ item.age }}</div>
</div> -->


  <br>

  <div class="demo-input-size">
    <el-input
      placeholder="用户ID"
      suffix-icon="el-icon-date"
      v-model="input1">
    </el-input>
    <el-input
      placeholder="用户性别"
      suffix-icon="el-icon-date"
      v-model="input2">
    </el-input>
  </div>



  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

<el-row>
    <el-button type="success" class="btn1">查询</el-button>
    <el-button type="danger">重置</el-button>
</el-row>

<el-table
      :data="userdata"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话号码">
      </el-table-column>
    </el-table>

<!-- <button @click.once="count++">计数{{ count }}</button>
<button @click="greet('abc',$event)">提交</button> -->
</div>




</template>

<!-- <template v-show="btn">
  <div v-if="opt === 'A'">A</div>
  <div v-else-if="opt === 'B'">B</div>
  <div v-else-if="opt === 'C'">C</div>
  <div v-else>not A/B/C</div>
</template> -->

<!-- 
<template v-show="swc">
  
</template> -->



<script>
export default {
  directives: {},
  filters: {},
  components: {},
  data() {
    return {
      name: 'cph',
      // rawHtml: '<span>嗨~</span>',
      // color: 'pink',
      // size: '20px',
      // s: "cph",
      // num: 50,
      // a: 1 + 2 > 4,

      // seen: true,

      // isActive: true,
      // isred: true,

      // btn: false,
      // opt: "C",

      // swc: true,
      input1: '',
      input2: '',

      options: [{
          value: '选项1',
          label: '普通会员'
        }, {
          value: '选项2',
          label: '白银会员'
        }, {
          value: '选项3',
          label: '黄金会员'
        }, {
          value: '选项4',
          label: '钻石会员'
        }, {
          value: '选项5',
          label: '至尊黑卡'
        }],
        value: '',

  //   userList: [
  //   {id: 'cph',sex: '男',age: 23,phonenum: '19143509817'},
  //   {id: 'phc',sex: '男',age: 30,phonenum: '19999999999'},
  //   {id: 'hpc',sex: '男',age: 18,phonenum: '19888888888'}
  // ],





  // count:0,
        userdata:[],
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.getUserdata();
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  errorCaptured() {},
  methods: {
    click1: function(){
          console.log('我是父级div');
        },
        click2: function(){
          console.log('我是子级div');
        },


        // greet:function(str,e){
        //   alert(str);
        //   console.log(e);
        // }

   getUserdata(){

    this.$axios.get('/m1/2631009-0-default/test/user/list').then((response) => {
      this.userdata=response.data.data;
    }).catch((response)=>{
      console.log(response);
    })
   }

  }
  }


</script>

<style scoped>
.pink{color: pink;font-size: 10px;}
.active{background-color: pink;}
.red{color: red;}

.demo-input-size .el-input{width: 180px;margin-right: 15px;}

.el-select{margin-top: 25px;width: 210px;}

/* .el-row{margin-left: 20px;} */
.btn1{margin-left: 15px;}

.el-row{display: inline-block;}


</style>
