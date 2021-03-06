const parentMixin = {
  mounted () {
    if (this.value >= 0) {
      this.currentIndex = this.value
      this.previousIndex = this.value
    } else {
      this.currentIndex = 0
      this.previousIndex = 0
    }
    this.updateIndex()
  },
  methods: {
    updateIndex () {
      if (!this.$children) return
      this.number = this.$children.length
      let children = this.$children
      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i
        if (children[i].currentSelected) {
          this.currentIndex = i
        }
      }
    }
  },
  props: {
    value: Number
  },
  watch: {
    currentIndex (val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false)
      val > -1 && (this.$children[val].currentSelected = true)
      this.previousIndex = oldVal
      this.$emit('input', val)
    },
    index (val) {
      this.currentIndex = val
    },
    value (val) {
      this.index = val
    }
  },
  data () {
    return {
      index: -1,
      currentIndex: this.index,
      previousIndex: this.index,
      number: this.$children.length
    }
  }
}

const childMixin = {
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$parent.updateIndex()
  },
  beforeDestroy () {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.updateIndex()
    })
  },
  methods: {
    onItemClick () {
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true
        this.$parent.currentIndex = this.currentIndex
        this.$emit('on-item-click', this.currentIndex)
      }
    }
  },
  watch: {
    currentSelected (val) {
      if (val) {
        this.$parent.index = this.currentIndex
      }
    },
    selected (val) {
      this.currentSelected = val
    }
  },
  data () {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    }
  }
}

export {
  parentMixin,
  childMixin
}
