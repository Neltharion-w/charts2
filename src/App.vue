<template>
  <div :class="[skin+'-skin h-100 app-wrap']">
    <nav class="navbar navbar-expand">
      <a href="#" class="navbar-brand">
        <img src="./assets/logo.png" style="height:2rem" class="align-top" alt="logo">
        优秀图表收集
      </a>
      <div class="navbar-collapse justify-content-end">
        <nav class="nav justify-content-center">
          <span class="btn btn-sm btn-outline-primary" @click="tabskin">换肤</span>
          <span class="btn btn-sm btn-outline-primary ml-2" v-if="$store.state.userInf" @click="toLoginOut">退出</span>
          <router-link class="btn btn-sm btn-outline-primary ml-2" v-else :to="loginRouter">登录</router-link>
        </nav>
      </div>
    </nav>
    <h-asider id="asider-nav" :leftLevel="1"></h-asider>
    <ul class="breadcrumb mb-0 rounded-0 bg-dark text-light">
      <li v-for="p in $route.matched.slice(1)" :key="p.path" class="breadcrumb-item">{{p.meta&&p.meta.name?p.meta.name:p.path.split('/').pop()}}</li>
    </ul>
    <div style="overflow: auto;">
      <router-view />
    </div>
  </div>
</template>

<script>
import { LOGIN_OUT } from '@/store/types'
import { LOGIN_ROUTER } from '@/router'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      skin: 'blue',
      show: false,
      loginRouter: LOGIN_ROUTER
    }
  },
  methods: {
    ...mapActions([LOGIN_OUT]),
    tabskin () {
      this.skin = this.skin == 'blue' ? 'purple' : 'blue'
    },
    toLoginOut () {
      this.loginOut().then(res => {
        if (
          this.$router.currentRoute.matched.some(
            r => r.meta.loginCheck && !r.meta.loginCheck(null)
          )
        ) {
          this.$router.push(LOGIN_ROUTER)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.navbar-brand {
  @include skin(c, var(--orange) var(--purple));
}
#asider-nav {
  z-index: $zindex-tooltip;
}
.app-wrap {
  display: grid;
  grid-template: auto auto minmax(500px, 1fr) / auto minmax(700px, 1fr);
  > nav {
    grid-column: 1/-1;
  }
  > #asider-nav {
    grid-row: 2/-1;
  }
}
</style>
