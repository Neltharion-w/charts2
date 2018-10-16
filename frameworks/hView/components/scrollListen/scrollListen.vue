<template>
	<div @scroll="scroll" style="overflow: auto">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // 类锚点属性
    listen: {
      type: String,
      default() {
        return "board";
      }
    }
  },
  methods: {
    scroll() {
      const $el = $(this.$el);
      const $listens = $el.find("[" + this.listen + "]");
      const top = $el.offset().top;
      for (let index = 0; index < $listens.length; index++) {
        const $listen = $listens[index];
        const _top = $($listen).offset().top;
        const _height = $listen.offsetHeight;
        if (_top <= top && _top + _height > top) {
          this.$emit("in", $listen.getAttribute(this.listen));
          return;
        }
      }
      this.$emit("in", null);
    },
    jump(attr) {
      $("[" + this.listen + "=" + attr + "]")[0].scrollIntoView();
    }
  }
};
</script>