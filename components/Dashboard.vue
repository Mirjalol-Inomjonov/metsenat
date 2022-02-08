<template>
  <section class="money-status">
    <div
      class="money-status__wrapper grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
    >
      <div
        v-for="(item, i) in moneyInfo"
        :key="i"
        class="money-status__wrapper-card flex items-center"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <span class="inline-block mr-4" v-html="item.icon"></span>
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
    <div class="charts" data-aos="zoom-in-up" data-aos-duration="2000">
      <Icon name="chart" />
    </div>
  </section>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
import Icon from './Icon.vue'

export default {
  components: { Icon },
  name: 'DashboardComponent',
  data() {
    return {
      moneyInfo: [
        {
          icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="#4C6FFF" fill-opacity="0.1"/>
                  <path d="M23.9997 19.8242C22.0669 19.8242 20.4998 21.7124 20.4998 24.042C20.4998 26.3712 22.0665 28.2599 23.9997 28.2599C25.9321 28.2599 27.4997 26.3721 27.4997 24.042C27.4997 21.7124 25.9326 19.8242 23.9997 19.8242ZM37.1752 15.1828C35.4782 14.471 33.7798 14.2002 32.0824 14.2002C26.6938 14.1998 21.3057 16.9275 15.9171 16.9275C14.5657 16.9275 13.2151 16.7561 11.8637 16.3273C11.7119 16.2792 11.5597 16.2564 11.4109 16.2564C10.658 16.2564 10 16.8392 10 17.6481V31.528C10 32.0805 10.3163 32.6042 10.8242 32.8168C12.5213 33.529 14.2196 33.7998 15.9171 33.7998C21.3057 33.7998 26.6942 31.0721 32.0828 31.0721C33.4342 31.0721 34.7848 31.2436 36.1362 31.6723C36.288 31.7204 36.4402 31.7432 36.589 31.7432C37.3419 31.7432 37.9999 31.1605 37.9999 30.3515V16.4721C37.9995 15.9191 37.6831 15.3959 37.1752 15.1828ZM35.8995 26.8897C34.7231 27.0384 33.7742 27.9095 33.5204 29.0544C33.0479 29.0141 32.5772 28.9721 32.0824 28.9721C29.1267 28.9721 26.2581 29.6979 23.4844 30.4001C20.8437 31.0686 18.3495 31.6999 15.9171 31.6999C15.5662 31.6999 15.2236 31.6859 14.8885 31.6588C14.8264 30.1612 13.6071 28.9634 12.1004 28.9634V21.2303C13.4597 21.2303 14.591 20.2569 14.8452 18.9663C15.2013 18.9886 15.5487 19.0275 15.9175 19.0275C18.8732 19.0275 21.7414 18.3017 24.5151 17.5995C27.1554 16.9315 29.6495 16.3002 32.0824 16.3002C32.5566 16.3002 33.0107 16.3343 33.457 16.3837C33.4942 17.782 34.545 18.9142 35.8995 19.0857V26.8897Z" fill="#4C6FFF"/>
                  </svg>

            `,
          title: 'Jami to‘langan summa',
          money: 1684325000,
        },
        {
          icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="12" fill="#EDC700" fill-opacity="0.1"/>
            <path d="M23.9997 19.8242C22.0669 19.8242 20.4998 21.7124 20.4998 24.042C20.4998 26.3712 22.0665 28.2599 23.9997 28.2599C25.9321 28.2599 27.4997 26.3721 27.4997 24.042C27.4997 21.7124 25.9326 19.8242 23.9997 19.8242V19.8242ZM37.1752 15.1828C35.4782 14.471 33.7798 14.2002 32.0824 14.2002C26.6938 14.1998 21.3057 16.9275 15.9171 16.9275C14.5657 16.9275 13.2151 16.7561 11.8637 16.3273C11.7119 16.2792 11.5597 16.2564 11.4109 16.2564C10.658 16.2564 10 16.8392 10 17.6481V31.528C10 32.0805 10.3163 32.6042 10.8242 32.8168C12.5213 33.529 14.2196 33.7998 15.9171 33.7998C21.3057 33.7998 26.6942 31.0721 32.0828 31.0721C33.4342 31.0721 34.7848 31.2436 36.1362 31.6723C36.288 31.7204 36.4402 31.7432 36.589 31.7432C37.3419 31.7432 37.9999 31.1605 37.9999 30.3515V16.4721C37.9995 15.9191 37.6831 15.3959 37.1752 15.1828V15.1828ZM35.8995 26.8897C34.7231 27.0384 33.7742 27.9095 33.5204 29.0544C33.0479 29.0141 32.5772 28.9721 32.0824 28.9721C29.1267 28.9721 26.2581 29.6979 23.4844 30.4001C20.8437 31.0686 18.3495 31.6999 15.9171 31.6999C15.5662 31.6999 15.2236 31.6859 14.8885 31.6588C14.8264 30.1612 13.6071 28.9634 12.1004 28.9634V21.2303C13.4597 21.2303 14.591 20.2569 14.8452 18.9663C15.2013 18.9886 15.5487 19.0275 15.9175 19.0275C18.8732 19.0275 21.7414 18.3017 24.5151 17.5995C27.1554 16.9315 29.6495 16.3002 32.0824 16.3002C32.5566 16.3002 33.0107 16.3343 33.457 16.3837C33.4942 17.782 34.545 18.9142 35.8995 19.0857V26.8897V26.8897Z" fill="#EDC700"/>
            </svg>
            `,
          title: 'Jami so‘ralgan summa',
          money: 14098530000,
        },
        {
          icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="12" fill="#ED7200" fill-opacity="0.1"/>
            <path d="M23.9997 19.8242C22.0669 19.8242 20.4998 21.7124 20.4998 24.042C20.4998 26.3712 22.0665 28.2599 23.9997 28.2599C25.9321 28.2599 27.4997 26.3721 27.4997 24.042C27.4997 21.7124 25.9326 19.8242 23.9997 19.8242ZM37.1752 15.1828C35.4782 14.471 33.7798 14.2002 32.0824 14.2002C26.6938 14.1998 21.3057 16.9275 15.9171 16.9275C14.5657 16.9275 13.2151 16.7561 11.8637 16.3273C11.7119 16.2792 11.5597 16.2564 11.4109 16.2564C10.658 16.2564 10 16.8392 10 17.6481V31.528C10 32.0805 10.3163 32.6042 10.8242 32.8168C12.5213 33.529 14.2196 33.7998 15.9171 33.7998C21.3057 33.7998 26.6942 31.0721 32.0828 31.0721C33.4342 31.0721 34.7848 31.2436 36.1362 31.6723C36.288 31.7204 36.4402 31.7432 36.589 31.7432C37.3419 31.7432 37.9999 31.1605 37.9999 30.3515V16.4721C37.9995 15.9191 37.6831 15.3959 37.1752 15.1828ZM35.8995 26.8897C34.7231 27.0384 33.7742 27.9095 33.5204 29.0544C33.0479 29.0141 32.5772 28.9721 32.0824 28.9721C29.1267 28.9721 26.2581 29.6979 23.4844 30.4001C20.8437 31.0686 18.3495 31.6999 15.9171 31.6999C15.5662 31.6999 15.2236 31.6859 14.8885 31.6588C14.8264 30.1612 13.6071 28.9634 12.1004 28.9634V21.2303C13.4597 21.2303 14.591 20.2569 14.8452 18.9663C15.2013 18.9886 15.5487 19.0275 15.9175 19.0275C18.8732 19.0275 21.7414 18.3017 24.5151 17.5995C27.1554 16.9315 29.6495 16.3002 32.0824 16.3002C32.5566 16.3002 33.0107 16.3343 33.457 16.3837C33.4942 17.782 34.545 18.9142 35.8995 19.0857V26.8897Z" fill="#ED7200"/>
            </svg>
            `,
          title: 'To‘lanishi kerak summa',
          money: 12414205000,
        },
      ],

      config: {
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: '#4c51bf',
              borderColor: '#4c51bf',
              data: [65, 78, 66, 44, 56, 67, 75],
              fill: false,
            },
            {
              label: new Date().getFullYear() - 1,
              fill: false,
              backgroundColor: '#fff',
              borderColor: '#fff',
              data: [40, 68, 86, 74, 56, 60, 87],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: 'Sales Charts',
            fontColor: 'white',
          },
          legend: {
            labels: {
              fontColor: 'white',
            },
            align: 'end',
            position: 'bottom',
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: 'rgba(255,255,255,.7)',
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Month',
                  fontColor: 'white',
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: 'rgba(33, 37, 41, 0.3)',
                  zeroLineColor: 'rgba(0, 0, 0, 0)',
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: 'rgba(255,255,255,.7)',
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Value',
                  fontColor: 'white',
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: 'rgba(255, 255, 255, 0.15)',
                  zeroLineColor: 'rgba(33, 37, 41, 0)',
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      },
    }
  },

  mounted() {
    VanillaTilt.init(document.querySelector('.money-status__wrapper-card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    })
  },
}
</script>

<style lang="scss" scoped></style>
