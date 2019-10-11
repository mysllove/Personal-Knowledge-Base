<template>
  <div class="card-wrapper">
    <el-row :gutter="20">
      <el-col :xs="24"
              :sm="6"
              :md="4"
              :lg="3"
              :xl="6"
              v-for="card in cards"
              :key="card.id">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header"
                 class="clearfix">
              <span>{{card.title}}</span>
              <el-button style="float: right; padding: 3px 0"
                         type="text">翻翻我😜</el-button>
            </div>
            <div v-for="(synopsis,index) in card.tips"
                 :key="synopsis.index"           
                 class="text item">
                 <div class="synopsisRow"><i :class="synopsis.emphasisIcon"></i><span v-html="card.tips[index].emphasis"></span></div>
                    
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  padding: 10px;
}
.card-wrapper .el-col {
  margin-bottom: 20px;
}
.card-wrapper .el-col:last-child {
  margin-bottom: 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
  line-height: 20px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.orange-m{
  color:orange
}
.synopsisRow>i{
  margin-right: 5px;
  width: 16px;
    height: 16px;
}
</style>>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'vue介绍',
          tips: [
            { emphasis: 'Vue是一套用于构建用户界面的<span style="color:#409EFF">渐进式框架</span>',emphasisIcon:'el-icon-star-off'},
            { emphasis: 'Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件',emphasisIcon:'iconfont sanylAb' },
            { emphasis: '......',emphasisIcon:'iconfont sanylAc' }
          ]
        }
      ],
    }
   },
   methods:{
   
   }
   }

</script> 


