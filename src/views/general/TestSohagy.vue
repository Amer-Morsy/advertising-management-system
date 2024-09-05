<template>
  <div class="p-3">
    <h2>Test</h2>
    <!-- <svg
      class="w-4 h-4 mx-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg> -->

    <div class="row">
      <StatisticsCardMultiple
        class="col-6"
        :itemsList="[
          { title: this.$t('statistics.totalDebts'), value: '١٠٠٠ جنيه مصري' },
          { title: this.$t('statistics.totalPaid'), value: '٣٠٠ جنيه مصري' },
          {
            title: this.$t('statistics.totalRemainder'),
            value: '٧٠٠ جنيه مصري',
          },
        ]"
        :percentageList="[
          { title: this.$t('statistics.totalPaid'), label: '40%', value: 40 },
          {
            title: this.$t('statistics.totalRemainder'),
            label: '60%',
            value: 60,
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
import StatisticsCardMultiple from "@/components/general/StatisticsCardMultiple.vue";
import { getLanguage } from "./../../utils/functions";
// import CustomInput from "@/components/general/CustomInput.vue";
// import VCalendar from 'v-calendar';

export default {
  name: "Test",
  components: {
    StatisticsCardMultiple,
    // CustomInput,
    // VCalendar,
  },
  data() {
    return {
      language: getLanguage(),
      dateTime: new Date(2022, 3, 28, 19, 30, 15),
      activeStatus: true,
      isMale: false,
    };
  },
  // methods: {},
  // computed: {},
  // mounted() {},
  // watch: {},
  // created() {},
};
</script>

<style lang="scss"></style>
