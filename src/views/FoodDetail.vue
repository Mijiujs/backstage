<template>
    <div class="food">
        <el-main>
            <el-table
      :data="foodlist"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="200">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="details"
        label="细节"
        width="200">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="buynum"
        label="产品号">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市">
      </el-table-column>
    </el-table>
        </el-main>
    </div>
</template>

<script>
export default{
  data(){
    return{
      foodlist:[],
    }
  },

mounted(){
  this.getFoodList();
},

methods:{

  getFoodList(){
    this.$axios.get('/m1/2657709-0-default/api/foods/list').then((res) => {
    console.log(res.data.data.result);
    this.foodlist = res.data.data.result;

  }).catch((err) => {
    console.log(err);
  })
  }
}
}



</script>

<style scoped>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>