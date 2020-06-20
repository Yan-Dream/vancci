<template>
  <nav>
    <li v-for='(item, index) in info' :key="index" class="l1" @hover="slideDown">
      {{item.firstNav}}
      <ul class="u2">
        <li v-for="(ite, inde) in item.secondNav" :key="inde">{{ite.name}}</li>
      </ul>
    </li>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Nav',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    let nnn = this
    axios
      .get('http://mock.shtodream.cn/mock/5e78a45cb9b0d45a938f5d39/list')
      .then(response => {
        nnn.info = response.data.data
      })
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
nav{
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.l1{
  float: left;
  list-style-type: none;
  background-color: yellowgreen;
  margin: 0 15px;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.l1 ul {
  position: absolute;
  height: 0;
}
.u2 li{
  width: 120px;
  list-style-type: none;
  background: violet;
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin: 0;
}
</style>
