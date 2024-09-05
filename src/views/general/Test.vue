<template>
  <div :class="className">
    <b-form-group :label="title" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        :id="id"
        v-model="theValue"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options"
      ></b-form-radio-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "CustomRadioButton",
  data() {
    return {
      theValue: null,
    };
  },
  methods: {
    getCurrentItem(val) {
      let index = this.options.findIndex((x) => x.value == val);

      if (index > -1) {
        this.theValue = {
          value: this.options[index].value,
          text: this.options[index].text,
        };
      } else {
        this.theValue = null;
      }
    },
  },
  props: {
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "textarea",
    },
    value: {
      default: "",
    },
    title: {
      type: String,
      default: "title",
    },
    options: {
      type: Array,
      default: () => [
        { text: "Toggle this custom radio", value: "first" },
        { text: "Or toggle this other custom radio", value: "second" },
        { text: "This one is Disabled", value: "third", disabled: true },
        { text: "This is the 4th radio", value: { fourth: 4 } },
      ],
    },
    emitObject: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    theValue: function (val) {
      if (val == null) {
        this.value = "";
        this.$emit("changeValue", "");
      } else if (val.value != this.value) {
        if (this.emitObject) {
          this.$emit("changeValue", val ? val : "");
        } else {
          this.$emit("changeValue", val ? val.value : "");
        }
      }
    },
    value: function (val) {
      this.getCurrentItem(val);
    },
    options: function () {
      this.getCurrentItem(this.value);
    },
  },
  async created() {
    this.getCurrentItem(this.value);
  },
};
</script>
