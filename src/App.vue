<template>
  <div :class="[skin+'-skin h-100 app-wrap']">
    <nav class="navbar py-0 navbar-expand-md navbar-dark bg-dark">
      <router-link class="navbar-brand" :to="defaultRouter">
        <i class="logo-icon iconfont cool-chart-scatterplot-hexbin font-weight-bold"></i>
      </router-link>
      <div class="order-md-1">
        <button class="btn btn-sm btn-outline-success" @click="tabskin">换肤</button>
        <button class="btn btn-sm btn-outline-info ml-1" v-if="$store.state.userInf" @click="toLoginOut">退出</button>
        <router-link class="btn btn-sm btn-outline-success ml-1" v-else :to="loginRouter">登录</router-link>
        <button @click="show=!show" class="navbar-toggler navbar-toggler-icon ml-1" type="button"></button>
      </div>
      <div class="collapse navbar-collapse" :class="{show}">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/Describe">Describe</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Explore">Explore</router-link>
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
import { LOGIN_ROUTER, DEFAULT_ROUTER } from '@/router'
import { mapActions } from 'vuex'
import clickoutside from '@/../frameworks/hView/directives/clickoutside'
export default {
  name: 'App',
  data () {
    return {
      skin: 'blue',
      show: false,
      show2: false,
      loginRouter: LOGIN_ROUTER,
      defaultRouter: DEFAULT_ROUTER
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
.logo-icon {
  font-size: 1.5rem;
  @include skin(
    bgi,
    linear-gradient(110deg, var(--red), var(--indigo))
      linear-gradient(110deg, var(--yellow), var(--red))
  );
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1;
}
#asider-nav {
  z-index: $zindex-tooltip;
}
.app-wrap {
  display: grid;
  grid-template-rows: auto 1fr;
  > .navbar{
    padding-bottom: 1px;
    position: relative;
    &::after {
      display: block;
      content: "";
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
