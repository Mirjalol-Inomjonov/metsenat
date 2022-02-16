<template>
  <section class="money-status">
    <div
      class="money-status__wrapper grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
    >
      <div
        v-for="(item, i) in moneyInfo"
        :key="i"
        class="money-status__wrapper-card flex items-center cursor-pointer"
        ref="card"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-once="true"
        @mousemove="vanillaTilt"
      >
        <Icon class="inline-block mr-4" :name="item.icon" />
        <div class="flex flex-col">
          <span class="money-status__wrapper-card__title inline-block">{{
            item.title
          }}</span>
          <span class="money-status__wrapper-card__amount inline-block"
            >{{ item.money }} <span>UZS</span></span
          >
        </div>
      </div>
    </div>

    <!-- chart status -->
    <div
      class="charts bg-white p-6 rounded-lg"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <h1 class="text-[#2E384D] text-2xl font-bold">
        Homiylar va talabalar soni
      </h1>
      <LineChart
        :chartData="chartData"
        :options="chartOptions"
        class="line-chart"
      />
    </div>
    <!-- --------------------CHART CARD------------------------------------------------------------------ -->
  </section>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
import LineChart from './LineChart.vue'
import Icon from './Icon.vue'

export default {
  components: { LineChart, Icon },
  name: 'DashboardComponent',
  data() {
    return {
      moneyInfo: [
        {
          title: 'Jami to‘langan summa',
          money: '1 684 325 000',
          icon: 'money1',
        },
        {
          title: 'Jami so‘ralgan summa',
          money: '14 098 530 000',
          icon: 'money2',
        },
        {
          title: 'To‘lanishi kerak summa',
          money: '12 414 205 000',
          icon: 'money3',
        },
      ],

      chartData: {
        labels: [
          'Yanvar',
          'Febral',
          'Mart',
          'Aprel',
          'May',
          'Iyun',
          'Iyul',
          'Avgust',
          'Sentabr',
          'Oktabr',
          'Noyabr',
          'Dekabr',
        ],
        datasets: [
          {
            label: 'Homiylar',
            borderColor: '#747EFA',
            borderWidth: 3,
            pointBackgroundColor: '#747EFA',
            pointRadius: 2,
            pointHoverRadius: 6,
            pointHoverBorderColor: '#747EFA',
            fill: true,
            data: [100, 150, 300, 200, 500, 550, 480, 400, 640, 900, 888, 1000],
          },
          {
            label: 'Talabalr',
            borderColor: '#FF92AE',
            borderWidth: 3,
            pointBackgroundColor: '#FF92AE',
            pointRadius: 2,
            pointHoverRadius: 6,
            pointHoverBorderColor: '#FF92AE',
            fill: true,
            data: [200, 150, 220, 350, 400, 340, 360, 500, 477, 460, 815, 800],
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: '#a5b4fc',
          titleFontColor: '#fff',
          bodyFontColor: '#fff',
          position: 'nearest',
          mode: 'nearest',
          intersect: 0,
          bodySpacing: 4,
          xPadding: 20,
          yPadding: 10,
        },
      },
    }
  },

  methods: {
    vanillaTilt() {
      VanillaTilt.init(this.$refs.card, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 60vh;
}
</style>
