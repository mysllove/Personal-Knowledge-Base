<template>
  <div class="functionSet">
    <saying />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="18">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="8" :lg="9" :xl="6">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Saying from './components/Saying'
export default {
  name: 'Function',
  components: { Saying }
}
</script>
<style>
.functionSet {
  padding: 0 15px;
}
</style>
