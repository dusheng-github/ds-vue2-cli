<template>
  <span
    :class="[{
      mark,
      plain,
      round,
      [size]: size
    }, {
      'van-hairline--surround': plain
    }]"
    :style="style"
  >
    <slot />
  </span>
</template>

<script>
import { RED, BLUE, GREEN, GRAY_DARK } from '@utils'

const COLOR_MAP = {
  danger: RED,
  primary: BLUE,
  success: GREEN
}

export default {
  name: 'Tag',

  props: {
    size: String,
    type: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean
  },

  computed: {
    style() {
      const color = this.color || COLOR_MAP[this.type] || GRAY_DARK
      const key = this.plain ? 'color' : 'backgroundColor'
      return { [key]: color }
    }
  }
}
</script>
