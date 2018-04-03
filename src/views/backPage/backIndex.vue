<template>
    <div id="backIndex">
                <div class="css-text">
                        <el-input :value='$store.state.num2' @input='change'></el-input>{{$store.state.num2}}
                        <el-button size='mini' @click="$store.commit('add')">+</el-button>
                        <el-button size='mini' @click="$store.commit('reduce')">-</el-button>
                            <p class="css-p1">
                                慧安&nbsp;(HuiAn)
                            </p>
                            <p class="css-p1" style="padding-top: 0;">
                                    智慧就业云平台
                            </p>
                            <p class="css-p2">
                                在这里
                            </p>
                            <p class="css-p2">
                                连接
                            </p>
                            <p class="css-p2">
                                职场精英
                            </p>
                </div>
    </div>
</template>
<link rel="stylesheet" href="../../style/Container.css" />
</html>
<script>
import store from '@/store/store.js'
export default {
  data () {
    return {
        input:store.state.num2
    }
  },
  store,
}
</script>
<style>
#backIndex{
float: left;
}
</style>