<template>
  <div class="appCon">
    <h1>{{ father }}</h1>
    <div class="navBox">
      <router-link to="/"><button>home-page</button></router-link>
      <router-link to="/contact"><button>contact-page</button></router-link>
      <router-link to="/hooks"><button>hooks-page</button></router-link>
      <router-link to="/blogs"><button>blogs-page</button></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref, provide, inject, getCurrentInstance } from 'vue'
export default {
  setup() {
    const { ctx } = getCurrentInstance()
    const goPage = (e) => {
      ctx.$router.push(e)
    }
    //通过ref+provide提供了父节点往下全部节点的响应式数据传递
    const father = ref('i am frome father app')
    provide('appdata', father)
    return {
      father,
      goPage,
    }
  },
}
</script>

<style lang="less">
body{
  font-size: 30px;
}
button{
  height: 70px;
  font-size: 30px;
}
input{
  width: 250px;
  height: 50px;
}
.appCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  .navBox {
    width: 600px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
img {
  width: 400px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
