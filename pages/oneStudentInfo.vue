<template>
  <section class="section relative">
    <Auth-header
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-duration="2000"
      data-aos-once="true"
      data-aos-easing="ease-in-sine"
    />

    <nav
      class="section-nav flex items-center justify-between gap-1 md:gap-0 px-[6%] py-4 md:py-[30px]"
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-duration="1500"
      data-aos-once="true"
      data-aos-easing="ease-in-sine"
    >
      <span
        class="section-nav__sponsor-name flex items-center leading-5 text-base sm:text-xl md:text-2xl"
      >
        <nuxt-link
          to="/adminPanel"
          class="inline-block hover:text-blue-600 transition"
        >
          <i class="fas fa-arrow-left cursor-pointer mr-2 md:mr-5"></i>
        </nuxt-link>
        <span class="inline-block max-w-[160px] sm:max-w-[500px]">
          {{ this.$store.state.aboutOneStudent.fullName }}
        </span>
        <span></span>
      </span>
      <button
        @click="addNewSponsorModal = !addNewSponsorModal"
        v-if="!sponsorsToTheStudent.length > 0"
        class="add-sponsor-ligth px-[6px] py-2 md:px-8"
      >
        <Icon name="plus" /> Homiy qo‘shish
      </button>
    </nav>

    <main class="main relative sm:pb-80">
      <div class="grid grid-cols-12">
        <div
          class="main-info col-start-2 col-end-12 md:col-start-3 md:col-end-11"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div class="flex items-center justify-between w-full">
            <h3 class="main-info__title text-base sm:text-2xl">
              Talaba haqida
            </h3>
            <button
              @click="showModalWindow = !showModalWindow"
              class="main-info__edit flex items-center px-3 py-2 sm:px-8 sm:py-3"
            >
              <Icon name="editbtn" />
              Tahrirlash
            </button>
          </div>

          <!-- devider -->
          <div class="divider">
            <span>Asosiy ma’lumotlar</span>
            <div></div>
          </div>

          <div class="main-info__avatar text-left flex items-center mb-7">
            <span class="main-info__avatar-img inline-block mr-4">
              <Icon name="avatar" />
            </span>
            <span class="inline-block main-info__avatar-name">
              {{ this.$store.state.aboutOneStudent.fullName }}
            </span>
          </div>

          <div class="main-info__phone-price">
            <p>telefon raqam</p>
            <p>{{ this.$store.state.aboutOneStudent.phone }}</p>
          </div>

          <div class="divider">
            <span>O‘qish joyi haqida ma’lumotr</span>
            <div></div>
          </div>

          <div class="grid grid-cols-8">
            <div
              class="main-info__phone-price col-start-1 col-end-9 md:col-end-6"
            >
              <p>OTM</p>
              <p>{{ this.$store.state.aboutOneStudent.otm }}</p>
            </div>
            <div
              class="main-info__phone-price col-start-1 md:col-start-6 col-end-9"
            >
              <p>Talabalik turi</p>
              <p>{{ this.$store.state.aboutOneStudent.studentType }}</p>
            </div>
          </div>
          <div class="grid grid-cols-8 text-left">
            <div
              class="main-info__phone-price col-start-1 col-end-9 md:col-end-6"
            >
              <p>Ajratilingan summa</p>
              <p>
                {{
                  formNumber(this.$store.state.aboutOneStudent.allocatedAmount)
                }}
                UZS
              </p>
            </div>
            <div
              class="main-info__phone-price col-start-1 md:col-start-6 col-end-9"
            >
              <p>Kontrakt miqdori</p>
              <p>
                {{
                  formNumber(this.$store.state.aboutOneStudent.contractAmount)
                }}
                UZS
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--sponsors to the student || ADDED SPONSORS -->
      <div class="grid grid-cols-12 mt-10">
        <div
          class="main-info col-start-2 col-end-12 md:col-start-3 md:col-end-11 mb-24"
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-duration="2000"
        >
          <div class="flex items-center justify-between">
            <h3 class="main-info__title text-base sm:text-2xl flex-shrink">
              Talabaga homiylar
            </h3>
            <button
              @click="addNewSponsorModal = !addNewSponsorModal"
              class="add-sponsor-ligth leading-[18px] md:leading-6 px-[6px] py-3 sm:px-8 flex-shrink-0"
            >
              <Icon name="plus" /> Homiy qo‘shish
            </button>
          </div>

          <!-- Added Sponsors TABLE STARTS -->
          <div class="w-full overflow-x-auto">
            <table
              v-if="sponsorsToTheStudent.length > 0"
              class="added-sponsor-table mt-[26px] min-w-[500px] lg:max-w-full"
            >
              <thead class="added-sponsor-table-header">
                <tr class="added-sponsor-table-header__row">
                  <th class="added-sponsor-table-header__row-item">#</th>
                  <th class="added-sponsor-table-header__row-item">f.i.sh</th>
                  <th class="added-sponsor-table-header__row-item">
                    Ajratilingan summa
                  </th>
                  <th class="added-sponsor-table-header__row-item">Amallar</th>
                </tr>
              </thead>

              <tbody class="added-sponsor-table-body">
                <tr
                  class="added-sponsor-table-body__row"
                  v-for="(item, i) in sponsorsToTheStudent"
                  :key="i"
                  data-aos="zoom-in-up"
                  data-aos-duration="3500"
                >
                  <td class="added-sponsor-table-body__row-item">
                    {{ i + 1 }}
                  </td>
                  <td class="added-sponsor-table-body__row-item">
                    {{ item.name }}
                  </td>
                  <td class="added-sponsor-table-body__row-item">
                    {{ item.allocatedAmount }}
                    <span class="text-gray-400 uppercase"> uzs</span>
                  </td>
                  <td
                    @click="addedSponsorEditModal = !addedSponsorEditModal"
                    class="cursor-pointer added-sponsor-table-body__row-item"
                  >
                    <Icon name="editbtn" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Added SPONSOR TABLE ENDS -->
        </div>

        <!-- Add New SPONSOR Modal Window -->
        <div
          :class="[
            addNewSponsorModal ? 'show' : '',
            'modal flex items-center justify-center',
          ]"
        >
          <div class="z-10 flex items-center flex-col">
            <!-- modal content -->
            <div class="modal__content">
              <!-- form card -->
              <div class="form-card min-w-[320px] sm:min-w-[586px]">
                <div class="form-card__header">
                  <h3>Homiy qo‘shish</h3>
                  <span
                    @click="addNewSponsorModal = !addNewSponsorModal"
                    class="inline-block hover:rotate-180 transition"
                  >
                    <i class="fas fa-times cursor-pointer p-2 inline-block"></i>
                  </span>
                </div>

                <!-- form -->
                <form class="form">
                  <div>
                    <label class="form__lable block" for="fish"
                      >F.I.Sh. (Familiya Ism Sharifingiz)</label
                    >
                    <input
                      id="fish"
                      class="form__input w-full"
                      type="text"
                      required
                      placeholder="Abdullayev Abdulla Abdulla o’g’li"
                    />
                  </div>

                  <div>
                    <label class="form__lable block" for="price"
                      >Ajratilingan summa</label
                    >
                    <input
                      id="price"
                      class="form__input w-full"
                      type="number"
                      required
                      placeholder="Summani kiriting"
                    />
                  </div>

                  <!-- SAVE BTN Wrapper -->
                  <div class="form-card__footer text-right">
                    <!-- Save btn -->
                    <button
                      class="form-card__footer-success-btn ml-4"
                      type="button"
                    >
                      <Icon name="plus" />
                      qo'shish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            @click="addNewSponsorModal = !addNewSponsorModal"
            class="modal__bgc modal__bgc_bgc-black"
          ></div>
        </div>

        <!-- Added SPONSOR Edit MODAL WINDOW  -->
        <div
          :class="[
            addedSponsorEditModal ? 'show' : '',
            'modal flex items-center justify-center',
          ]"
        >
          <div class="z-10 flex items-center flex-col">
            <!-- modal content -->
            <div class="modal__content">
              <!-- form card -->
              <div class="form-card sm:min-w-[586px]">
                <div class="form-card__header flex items-center">
                  <h3>Homiylarni tahrirlash</h3>
                  <span
                    @click="addedSponsorEditModal = !addedSponsorEditModal"
                    class="inline-block hover:rotate-180 transition"
                  >
                    <i class="fas fa-times cursor-pointer p-2 inline-block"></i>
                  </span>
                </div>

                <!-- form -->
                <form class="form">
                  <div>
                    <label class="form__lable block" for="fish"
                      >F.I.Sh. (Familiya Ism Sharifingiz)</label
                    >
                    <input
                      id="fish"
                      class="form__input w-full"
                      type="text"
                      required
                      placeholder="Abdullayev Abdulla Abdulla o’g’li"
                    />
                  </div>

                  <div>
                    <label class="form__lable block" for="price"
                      >Ajratilingan summa</label
                    >
                    <input
                      id="price"
                      class="form__input w-full"
                      type="number"
                      required
                      placeholder="summani kiriting"
                    />
                  </div>

                  <!-- DELETE and SAVE BTN Wrapper -->
                  <div
                    class="form-card__footer text-right flex items-center flex-col-reverse sm:block"
                  >
                    <!-- Delete btn -->
                    <button
                      class="form-card__footer-success-btn form-card__footer-success-btn_danger"
                      type="button"
                    >
                      <Icon name="delete" />
                      Homiyni o‘chirish
                    </button>

                    <!-- Save btn -->
                    <button
                      class="form-card__footer-success-btn sm:ml-4 mb-7 sm:mb-0"
                      type="button"
                    >
                      <Icon name="save" />
                      saqlash
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            @click="addedSponsorEditModal = !addedSponsorEditModal"
            class="modal__bgc modal__bgc_bgc-black"
          ></div>
        </div>
      </div>

      <!-- page down img -->
      <div class="main__img">
        <Icon name="img" class="img" />
      </div>
    </main>

    <!--  ONE STUDENT EDIT MODAL WINDOW -->
    <div
      :class="[
        showModalWindow ? 'show' : '',
        'modal flex items-center justify-center',
      ]"
    >
      <div class="z-10 flex items-center flex-col">
        <!-- modal content -->
        <div class="modal__content mt-10">
          <!-- form card -->
          <div class="form-card sm:min-w-[586px]">
            <div class="form-card__header">
              <h3>Tahrirlash</h3>
              <span
                @click="showModalWindow = !showModalWindow"
                class="inline-block hover:rotate-180 transition"
              >
                <i class="fas fa-times cursor-pointer p-2 inline-block"></i>
              </span>
            </div>

            <!-- form -->
            <form class="form">
              <div>
                <label class="form__lable block" for="fish2"
                  >F.I.Sh. (Familiya Ism Sharifingiz)</label
                >
                <input
                  v-model="editStudent.fullName"
                  id="fish2"
                  class="form__input w-full"
                  type="text"
                  required
                  placeholder="Abdullayev Abdulla Abdulla o’g’li"
                />
              </div>

              <div>
                <label class="form__lable block" for="pric1"
                  >Telefon raqam</label
                >
                <input
                  v-model="editStudent.phone"
                  v-mask="'(+998) ## ###-##-##'"
                  id="pric1"
                  class="form__input w-full"
                  type="tel"
                  required
                  placeholder="+998 00 000-00-00"
                />
              </div>

              <div>
                <label class="form__lable" for="otm">OTM</label>
                <select
                  class="form__input"
                  id="otm"
                  type="select"
                  v-model="editStudent.otm"
                >
                  <option value="OTM ni tanlang" disabled>
                    OTM ni tanlang
                  </option>
                  <option
                    v-for="(item, i) in editStudent.otms"
                    :key="i"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
              <div>
                <label class="form__lable" for="select">Kontrakt miqdori</label>
                <input
                  v-model="editStudent.contract"
                  class="form__input"
                  id="select"
                  placeholder="Summani kiriting"
                />
              </div>

              <div class="form-card__footer text-right">
                <button class="form-card__footer-success-btn" type="button">
                  <Icon name="save" />
                  saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        @click="showModalWindow = !showModalWindow"
        class="modal__bgc modal__bgc_bgc-black"
      ></div>
    </div>
  </section>
</template>

<script>
import AuthHeader from '~/components/AuthHeader.vue'
import Icon from '~/components/Icon.vue'
export default {
  name: 'OneStudentInfo',
  components: { Icon, AuthHeader },
  middleware: 'auth',

  data() {
    return {
      addedSponsorEditModal: false,
      addNewSponsorModal: false,
      showModalWindow: false,
      myInputModel: '',

      editStudent: {
        fullName: 'Ishmuhammedov Aziz Ishqobilovich',
        phone: 9989737260,
        contract: '30 000 000',
        otm: 'Toshkent shahridagi INHA Universitet',
        otms: [
          'Toshkent shahridagi INHA Universitet',
          'Toshkent axborot texnologiyalari universiteti',
          'Toshkent moliya instituti',
          'Toshkent arxitektura-qurilish instituti',
          'Toshkent davlat sharqshunoslik instituti',
        ],
      },

      sponsorsToTheStudent: [
        {
          name: 'Saimov Rustam Saimjonovich',
          allocatedAmount: '7 000 000',
        },
        {
          name: 'Saimov Rustam Saimjonovich',
          allocatedAmount: '45 000 000',
        },
        {
          name: 'Saimov Rustam Saimjonovich',
          allocatedAmount: '70 000 000',
        },
      ],
    }
  },

  methods: {
    formNumber(a) {
      return Number(a)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$& ')
    },
  },
}
</script>

<style lang="scss" scoped></style>
