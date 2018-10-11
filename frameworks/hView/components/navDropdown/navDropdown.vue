<template>
	<li v-clickoutside="toggleDropdownMenu" class="nav-item dropdown">
    <a @click="show = !show" class="nav-link dropdown-toggle" href="#" role="button">
      {{desc}}
    </a>
    <div class="dropdown-menu" :class="{show}">
      <slot></slot>
    </div>
  </li>
</template>

<script>
import clickoutside from "../../directives/clickoutside";
export default {
  props: ["desc"],
  data() {
    return {
      show: false
    };
  },
  directives: {
    clickoutside
  },
  methods: {
    toggleDropdownMenu() {
      this.show = false;
    }
  }
};
</script>