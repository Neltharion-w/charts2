<template>
    <div class="charts-page h-100">
      <aside>
        <a @click="jump('1')" class="m-1 border p-3">aside1</a>
        <a @click="jump('2')" class="m-1 border p-3">aside2</a>
        <a class="m-1 border p-3">aside</a>
        <a class="m-1 border p-3">aside</a>
        <a class="m-1 border p-3">aside</a>
        <a class="m-1 border p-3">aside</a>
        <a class="m-1 border p-3">aside</a>
        <a class="m-1 border p-3">aside</a>
        <a class="m-1 border p-3">aside</a>
      </aside>
      <div @scroll="scroll" class="maos" style="overflow:auto">
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p id="1" class="mao m-1 border p-3">1</p>
        <p class="m-1 border p-3">p</p>
        <p id="2" class="mao m-1 border p-3">2</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
        <p class="m-1 border p-3">p</p>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    jump (id) {
      document.getElementById(id).scrollIntoView()
    },
    scroll (e) {
      var $el = $(e.target)
      var top = $el.offset().top
      $el
        .find('.mao')
        .removeClass('active')
        .each(function () {
          var _top = $(this).offset().top
          var _height = this.offsetHeight
          if (_top <= top && _top + _height >= top) {
            console.log($(this).attr('id'));
            $(this).addClass('active')
          }
        })
    }
  }
}
</script>

<style lang="scss">
.charts-page {
  display: grid;
  grid-template-columns: 160px 1fr;
  aside {
    a {
      display: block;
    }
    overflow: auto;
    @include scroll($scrollbar-width, false);
  }
}
</style>
