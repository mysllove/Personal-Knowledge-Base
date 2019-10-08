<template>
  <div class="functionSet">
    <saying />
    <div class="introduce">
    </div>
  </div>
</template>

<script>
import Saying from './components/Saying'
export default {
  name: 'Function',
  components: { Saying },
  data() {
    return {
      fixStyle: { height: '180px', display: 'block' },
      input: ''
    }
  }
}
</script>
<style>
.functionSet {
  padding: 0 15px;
}
</style>
