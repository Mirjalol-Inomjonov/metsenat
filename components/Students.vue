<template>
  <section class="student">
    <!-- table wrapper starts -->

    <!-- ADD Student btn -->
    <div class="grid justify-items-end">
      <nuxt-link class="add-student-btn flex items-center" to="/addStudent"
        ><Icon name="plus" /> Talaba qo'shish
      </nuxt-link>
    </div>

    <div class="table-wrapper w-full overflow-x-auto">
      <table class="table-content min-w-[1024px]">
        <thead class="table-content-header">
          <tr
            class="table-content-header__row"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <th class="table-content-header__row-item">#</th>
            <th class="table-content-header__row-item">F.I.SH</th>
            <th class="table-content-header__row-item">Talabalik turi</th>
            <th class="table-content-header__row-item">OTM</th>
            <th class="table-content-header__row-item">Ajratilingan summa</th>
            <th class="table-content-header__row-item">Kontrakt miqdori</th>
            <th class="table-content-header__row-item">Amallar</th>
          </tr>
        </thead>

        <tbody class="table-content-body">
          <tr
            class="table-content-body__row"
            v-for="(student, index) in this.$store.state.students"
            :key="index"
            data-aos="zoom-in-up"
            data-aos-once="true"
            data-aos-duration="2000"
          >
            <td class="table-content-body__row-item">{{ index + 1 }}</td>
            <td class="table-content-body__row-item">{{ student.fullName }}</td>
            <td class="table-content-body__row-item">
              {{ student.studentType }}
            </td>
            <td class="table-content-body__row-item">
              {{ student.otm }}
            </td>
            <td class="table-content-body__row-item">
              {{ formNumber(student.allocatedAmount) }} <span>uzs</span>
            </td>
            <td class="table-content-body__row-item">
              {{ formNumber(student.contractAmount) }} <span>uzs</span>
            </td>

            <td
              @click="aboutOneStudent(index)"
              class="table-content-body__row-item"
            >
              <nuxt-link to="/oneStudentInfo">
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
          {{ this.$store.state.students.length }} tadan 1-{{ selectedNum }}
          ko‘rsatilmoqda
        </div>

        <div class="flex items-center justify-between col-start-7 col-end-13">
          <div class="pagination__select flex items-center">
            <span class="inline-block mr-2">Ko‘rsatish</span>

            <select @click="chevrondown = !chevrondown" v-model="selectedNum">
              <option
                v-for="(n, i) in this.$store.state.students"
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
          <div class="pagination__num text-center inline-block">
            <v-pagination
              v-model="page"
              :length="this.$store.state.students.length"
              :total-visible="7"
            ></v-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- table wrapper ends -->

    <!-- ----------------------------------- -->

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
          <div class="form-card">
            <!-- filter modal-window__card header -->
            <div class="form-card__header">
              <h3>Filter</h3>
              <span
                @click="$emit('close-modal-window', !showModalWindow)"
                class="inline-block hover:rotate-180 transition"
              >
                <i class="fas fa-times cursor-pointer p-2 inline-block"></i>
              </span>
            </div>

            <!-- form card -->
            <form class="form w-full">
              <!-- students type -->
              <div>
                <label class="form__lable mt-7" for="select"
                  >Talabalik turi</label
                >
                <select
                  class="form__input"
                  id="select"
                  v-model="filterForm.typeStudent"
                >
                  <option value="all" selected>barchasi</option>
                  <option
                    v-for="(item, i) in this.$store.state.studentTypes"
                    :key="i"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>

              <!-- OTM name -->
              <div>
                <label class="form__lable mt-7" for="select"
                  >Ariza holati</label
                >
                <select
                  class="form__input"
                  id="select"
                  v-model="filterForm.otm"
                >
                  <option value="all" selected>barchasi</option>
                  <option
                    v-for="(otm, i) in this.$store.state.otmsName"
                    :key="i"
                    :value="otm"
                  >
                    {{ otm }}
                  </option>
                </select>
              </div>

              <!-- filter form-card__footer -->
              <div
                class="form-card__footer sm:block flex items-center flex-col justify-center text-right"
              >
                <button
                  @click="clearForm"
                  class="form-card__footer-clear-btn sm:mr-4 mb-4 sm:mb-0"
                  type="button"
                >
                  <Icon name="clear" />
                  Tozalash
                </button>
                <button class="form-card__footer-success-btn" type="button">
                  <Icon name="white-eye" />
                  Natijalarni ko'rish
                </button>
              </div>
            </form>
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
  name: 'StudentsComponent',
  props: {
    showModalWindow: Boolean,
  },

  data() {
    return {
      page: 1,
      selectedNum: null,
      chevrondown: false,

      filterForm: {
        typeStudent: 'Barchasi',
        otm: 'Barchasi',
      },
    }
  },

  mounted() {
    this.selectedNum =
      this.$store.state.students.length < 10
        ? this.$store.state.students.length
        : 10
  },

  methods: {
    clearForm() {
      this.filterForm.typeStudent = ''
      this.filterForm.otm = ''
    },

    formNumber(a) {
      return Number(a)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$& ')
    },

    aboutOneStudent(index) {
      this.$store.commit('ABOUT_ONE_STUDENT', index)
      console.log(index)
    },
  },
}
</script>

<style lang="scss" scoped></style>
