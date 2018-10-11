<template>
  <div :class="[skin+'-skin h-100 app-wrap']">
    <nav class="navbar py-0 navbar-expand-md navbar-dark bg-dark">
      <a href="#" class="navbar-brand">
        <img src="./assets/logo.png" style="height:2rem" class="align-top" alt="logo">
        优秀图表收集
      </a>
      <div class="order-md-1">
        <button class="btn btn-sm btn-outline-success" @click="tabskin">换肤</button>
        <button class="btn btn-sm btn-outline-primary ml-1" v-if="$store.state.userInf" @click="toLoginOut">退出</button>
        <router-link class="btn btn-sm btn-outline-primary ml-1" v-else :to="loginRouter">登录</router-link>
        <button @click="show=!show" class="navbar-toggler navbar-toggler-icon ml-1" type="button"></button>
      </div>
      <div class="collapse navbar-collapse" :class="{show}">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <h-nav-dropdown desc="Dropdown link">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
          </h-nav-dropdown>
        </ul>
      </div>
    </nav>
    <div style="overflow: auto;">
      <router-view />
    </div>
  </div>
</template>

<script>
import { LOGIN_OUT } from '@/store/types'
import { LOGIN_ROUTER } from '@/router'
import { mapActions } from 'vuex'
import clickoutside from '@/../frameworks/hView/directives/clickoutside'
export default {
  name: 'App',
  data () {
    return {
      skin: 'blue',
      show: false,
      show2: false,
      loginRouter: LOGIN_ROUTER
    }
  },
  directives: {
    clickoutside
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
    },
    toggleDropdownMenu () {
      this.show2 = false
    }
  }
}
</script>

<style lang="scss">
.navbar-brand {
  @include skin(c, var(--white) var(--orange));
}
#asider-nav {
  z-index: $zindex-tooltip;
}
.app-wrap {
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
