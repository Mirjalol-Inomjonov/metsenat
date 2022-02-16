<template>
  <section class="sponsor py-3 md:py-10 px-[6%]">
    <!-- table wrapper starts -->
    <div class="table-wrapper w-full overflow-x-auto overflow-y-hidden">
      <table class="table-content min-w-[1024px]">
        <thead class="table-content-header">
          <tr
            class="table-content-header__row"
            data-aos="zoom-in-up"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <th class="table-content-header__row-item">#</th>
            <th class="table-content-header__row-item">F.I.SH</th>
            <th class="table-content-header__row-item">Tel.Raqami</th>
            <th class="table-content-header__row-item">Homiylik summasi</th>
            <th class="table-content-header__row-item">Sarflangan summa</th>
            <th class="table-content-header__row-item">Sana</th>
            <th class="table-content-header__row-item">holati</th>
            <th class="table-content-header__row-item">Amallar</th>
          </tr>
        </thead>
        <tbody class="table-content-body">
          <tr
            class="table-content-body__row"
            v-for="(sponsor, index) in this.$store.state.sponsors"
            :key="index"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <td class="table-content-body__row-item">{{ index + 1 }}</td>
            <td class="table-content-body__row-item">{{ sponsor.fullName }}</td>
            <td class="table-content-body__row-item">{{ sponsor.phone }}</td>
            <td class="table-content-body__row-item">
              {{ sponsor.sponsorShipAmout }} <span>uzs</span>
            </td>
            <td class="table-content-body__row-item">
              {{ sponsor.paymentAmount }} <span>uzs</span>
            </td>
            <td class="table-content-body__row-item">
              {{ sponsor.date }}
            </td>

            <td
              v-if="sponsor.status === 'Yangi'"
              :class="
                sponsor.status === 'Yangi'
                  ? 'table-content-body__row-item new'
                  : 'table-content-body__row-item'
              "
            >
              {{ sponsor.status }}
            </td>
            <td
              v-if="sponsor.status === 'Moderatsiyada'"
              :class="
                sponsor.status === 'Moderatsiyada'
                  ? 'table-content-body__row-item in-mederation'
                  : 'table-content-body__row-item'
              "
            >
              {{ sponsor.status }}
            </td>
            <td
              v-if="sponsor.status === 'Tasdiqlangan'"
              :class="
                sponsor.status === 'Tasdiqlangan'
                  ? 'table-content-body__row-item approved'
                  : 'table-content-body__row-item'
              "
            >
              {{ sponsor.status }}
            </td>
            <td
              v-if="sponsor.status === 'Bekor qilingan'"
              :class="
                sponsor.status === 'Bekor qilingan'
                  ? 'table-content-body__row-item canceled'
                  : 'table-content-body__row-item'
              "
            >
              {{ sponsor.status }}
            </td>

            <td
              @click="aboutOneSponsor(index)"
              class="table-content-body__row-item"
            >
              <nuxt-link to="/oneSponsorInfo">
                <Icon name="eye" />
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- pagination -->
      <div
        class="pagination min-w-[1024px] mb-6 lg:mb-0 grid grid-cols-12 items-center"
      >
        <div class="pagination__views col-start-1 col-end-3">
          {{ this.$store.state.sponsors.length }} tadan 1-{{ selectedNum }}
          ko‘rsatilmoqda
        </div>

        <div class="flex items-center justify-between col-start-7 col-end-13">
          <div class="pagination__select flex items-center">
            <span class="inline-block mr-2">Ko‘rsatish</span>

            <select @click="chevrondown = !chevrondown" v-model="selectedNum">
              <option
                v-for="(n, i) in this.$store.state.sponsors"
                :key="i"
                :value="i + 1"
              >
                {{ i + 1 }}
              </option>
            </select>
            <i
              :class="
                chevrondown
                  ? 'cursor-pointer fas fa-chevron-up'
                  : 'cursor-pointer fas fa-chevron-down'
              "
            ></i>
          </div>
          <div class="pagination__num text-center items-end inline-block">
            <v-pagination
              v-model="page"
              :length="this.$store.state.sponsors.length"
              :total-visible="7"
            ></v-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- table wrapper ends -->

    <!-- FILTER MODAL WINDOW-->
    <div
      :class="[
        showModalWindow ? 'show' : '',
        'modal flex items-center justify-center',
      ]"
    >
      <div class="z-10 flex items-center justify-center">
        <!-- modal content -->
        <div class="modal__content">
          <!-- form card -->
          <div
            class="form-card max-w-[450px] sm:max-w-[586px] md:max-h-[586px]"
          >
            <!-- filter modal-window__card header -->
            <div class="form-card__header">
              <h3>Filter</h3>

              <span
                @click="$emit('close-modal-window', !showModalWindow)"
                class="inline-block cursor-pointer hover:rotate-180 transition"
              >
                <i class="fas fa-times cursor-pointer p-2 inline-block"></i>
              </span>
            </div>

            <form class="form w-full max-h-[250px] sm:max-h-[580px] h-full">
              <!-- other select input -->
              <div>
                <label class="form__lable mt-7" for="select"
                  >Ariza holati</label
                >
                <select v-model="status" class="form__input" id="select">
                  <option
                    v-for="(item, i) in this.$store.state.status"
                    :key="i"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>

              <!-- price amount btns wrapper component -->
              <div>
                <label class="form__lable" for="sponsorshipAmount"
                  >Homiylik summasi</label
                >

                <!-- -----------------START-------------------------------------------------------------------- -->
                <!-- component prices wrapper -->
                <div
                  class="price-wrapper mt-2 mb-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                >
                  <!-- other price amount btn-->
                  <div class="btn">
                    <input
                      @click=";(checkedPrice = 0), (isOtherPrice = true)"
                      :class="[
                        isOtherPrice && checkedPrice == 0 ? 'active-other' : '',
                        'btn__input btn__input_other-btn',
                      ]"
                      type="button"
                      value="Barchasi"
                    />
                    <span
                      :class="[
                        isOtherPrice && checkedPrice == 0 ? 'active' : '',
                        'btn__badges',
                      ]"
                    >
                      <i class="fa fa-check"></i>
                    </span>
                  </div>

                  <!-- specified price amount btns -->
                  <div
                    class="btn"
                    v-for="curentPrice in defaultPrices"
                    :key="curentPrice"
                  >
                    <input
                      type="button"
                      :value="curentPrice + ' uzs'"
                      @click="
                        ;(checkedPrice = curentPrice), (isOtherPrice = false)
                      "
                      :class="
                        curentPrice == checkedPrice
                          ? 'btn__input w-full h-full active'
                          : 'btn__input w-full h-full'
                      "
                    />
                    <span
                      :class="
                        curentPrice == checkedPrice
                          ? 'btn__badges active'
                          : 'btn__badges'
                      "
                    >
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                </div>
                <!-- ----------END------------------------------------------------------------------ -->
              </div>

              <!-- date input -->
              <div>
                <label class="form__lable" for="date">Sana</label>
                <input class="form__date mt-2 w-full md:w-1/2" type="date" />
              </div>

              <h1>
                Kiritilga summ = <b> {{ checkedPrice }}</b>
              </h1>
            </form>

            <!-- filter form-card__footer -->
            <div
              class="form-card__footer sm:block flex items-center flex-col justify-center text-right"
            >
              <button
                class="form-card__footer-clear-btn sm:mr-4 mb-4 sm:mb-0"
                type="button"
              >
                <Icon name="clear" />
                Tozalash
              </button>
              <button class="form-card__footer-success-btn" type="button">
                <Icon name="white-eye" />
                Natijalarni ko‘rish
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        @click="$emit('close-modal-window', !showModalWindow)"
        class="modal__bgc modal__bgc_bgc-black"
      ></div>
    </div>
  </section>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components: { Icon },
  name: 'SponsorComponent',
  props: {
    showModalWindow: Boolean,
    search: String,
  },

  data() {
    return {
      page: 1,
      selectedNum: null,
      chevrondown: false,
      isOtherPrice: true,
      checkedPrice: 0,
      status: 'Barchasi',
      defaultPrices: [
        '1 000 000',
        '5 000 000',
        '7 000 000',
        '10 000 000',
        '30 000 000',
        '50 000 000',
      ],
    }
  },

  mounted() {
    this.selectedNum =
      this.$store.state.sponsors.length <= 10
        ? this.$store.state.sponsors.length
        : 10
  },

  methods: {
    select() {
      this.chevrondown = !this.chevrondown
    },
    aboutOneSponsor(index) {
      this.$store.commit('ABOUT_ONE_SPONSOR', index)
    },
  },
}
</script>

<style lang="scss" scoped></style>
