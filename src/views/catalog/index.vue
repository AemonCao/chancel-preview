<template>
  <div>
      <h3>Web:</h3>
      <ul>
          <a :href="webjx"><li>家系</li></a>
          <li>足迹配准</li>
          <li>实验室管理</li>
          <li>智鉴平台</li>
          <li>食品溯源后台</li>
          <li>足迹在线考试</li>
      </ul>
      <h3>app:</h3>
      <ul>
          <li>家系</li>
          <li>即时比对</li>
          <li>食品溯源</li>
          <li>在线送检</li>
          <li>警犬</li>
      </ul>
      <h3>exe:</h3>
      <ul>
          <li>足迹系统</li>
          <li>图像鉴定辅助工具</li>
      </ul>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            webjx:window.api.webjx
        }
    },
    created(){
        // alert(this.webjx)
    }
}
</script>

<style>

</style>