<template>
  <div class="text-input-wrapper">
    <div class="text-input">
      <input v-model="innerValue" @keydown.enter="submit" />
    </div>
    <div class="text-input-invalid" v-if="isInvalid">
      <span>{{invalid}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    invalid: {
      type: String,
      default: '',
    },
    validator: {
      type: Function,
    },
  },
  data() {
    return {
      innerValue: this.value || '',
      isInvalid: false,
    };
  },
  watch: {
    innerValue(newValue) {
      this.$emit('input', newValue);
    },
  },
  methods: {
    validate() {
      if (typeof this.validator === 'function') {
        return this.validator(this.value);
      }
      return true;
    },
    submit() {
      if (!this.validate()) {
        this.isInvalid = true;
        return;
      }
      this.isInvalid = false;
      this.$emit('submit');
    },
  },
};
</script>

<style lang="less">
.text-input-wrapper {
  width: 100%;
}

.text-input {
  width: 100%;
  input {
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    border-radius: 3px;
    border: 1px solid #262627;
    box-shadow: 1px 1px 0px #39393a;
    color: #BFBFBF;
    margin-top: 8px;
    outline: none;
    padding: 4px 6px;
    box-sizing: border-box;
  }
}

.text-input-invalid {
  margin-top: 8px;
  font-size: 14px;
  color: @color-text-red;
  user-select: none;
}
</style>
