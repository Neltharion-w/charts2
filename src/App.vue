<template>
  <div :class="[skin+'-skin h-100 app-wrap']">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
          <!-- 该v-for适用于第一层单层路由 -->
          <li v-for="r in $router.options.routes.filter(r => !r.meta||!r.meta.hide)" :key="r.path" class="nav-item">
            <router-link class="nav-link" :to="r.path">{{r.title}}</router-link>
          </li>
          <!-- <h-nav-dropdown desc="Dropdown link">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
          </h-nav-dropdown> -->
        </ul>
      </div>
    </nav>
    <div style="overflow: auto;">
      <router-view />
    </div>
    <div v-show="$store.state.loadNum!=0" class="loading-div position-fixed h-100 w-100">
      <div class="d-flex h-100 justify-content-center align-items-center">
        <div class="loading-item">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
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
    linear-gradient(110deg, var(--yellow), var(--red))
      linear-gradient(110deg, var(--red), var(--indigo))
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
  > .navbar {
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
.loading-div {
  background: rgba(0, 0, 0, 0.16);
  @keyframes ball-spin-clockwise {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      transform: scale(0);
    }
  }
  top: 0;
  left: 0;
  z-index: $zindex-modal;
  .loading-item {
    width: 64px;
    height: 64px;
    position: relative;
    > span {
      position: absolute;
      width: 16px;
      height: 16px;
      margin-top: -8px;
      margin-left: -8px;
      border-radius: 100%;
      background: #449d44;
      animation: ball-spin-clockwise 1s infinite ease-in-out;
    }
    > span:nth-child(1) {
      top: 5%;
      left: 50%;
      animation-delay: -0.875s;
    }
    > span:nth-child(2) {
      top: 18.1801948466%;
      left: 81.8198051534%;
      animation-delay: -0.75s;
    }
    > span:nth-child(3) {
      top: 50%;
      left: 95%;
      animation-delay: -0.625s;
    }
    > span:nth-child(4) {
      top: 81.8198051534%;
      left: 81.8198051534%;
      animation-delay: -0.5s;
    }
    > span:nth-child(5) {
      top: 94.9999999966%;
      left: 50.0000000005%;
      animation-delay: -0.375s;
    }
    > span:nth-child(6) {
      top: 81.8198046966%;
      left: 18.1801949248%;
      animation-delay: -0.25s;
    }
    > span:nth-child(7) {
      top: 49.9999750815%;
      left: 5.0000051215%;
      animation-delay: -0.125s;
    }
    > span:nth-child(8) {
      top: 18.179464974%;
      left: 18.1803700518%;
      animation-delay: 0s;
    }
  }
}
</style>
