<template>
  <div class="text-center section h-full">
    <!-- <h2 class="h2">Custom Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Roll your own calendars using scoped slots
    </p> -->
    <v-calendar class="custom-calendar h-full overflow-y-auto" :masks="masks" :attributes="attributes" disable-page-swipe
      is-expanded>
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="w-20 h-20 overflow-y-auto overflow-x-auto">
            <!-- <p v-for="attr in attributes" :key="attr.diary_id" class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"> -->
            <p v-for="attr in attributes" :key="attr.customData.diary_id"
            class="text-xs leading-tight truncate rounded-sm p-1 m-1 bg-blue-600 text-white hover:cursor-pointer"
            @click="showCalendar(attr)">
              {{ attr.customData.title }}
              
            </p>
          </div>
        </div>
      </template>
    </v-calendar>

    <!-- 單篇日記modal -->
    <ShowCalendarModal v-model="showCalendarModal" @confirmShow="confirmShow" @cancelShow="cancelShow">
        <template v-slot:title>{{ singleDiaryTitle }}</template>
        <template v-slot:date>{{ singleDiaryDate.slice(0,10) }}</template>
        <template v-slot:content>
            <div v-html="singleDiaryContent"></div>
        </template>
        <template v-slot:permissionId>{{ singleDiaryPermissionId }}</template>
        <template v-slot:permissionName>{{ singleDiaryPermissionName }}</template>
        <template v-slot:diaryId>{{ singleDiaryId }}</template>
    </ShowCalendarModal>     
  </div>
</template>

<script>
import 'v-calendar/dist/style.css';
import ShowCalendarModal from '../components/ShowCalendarModal.vue'

export default {
  components: {
    ShowCalendarModal
  },
  data() {
    // const month = new Date().getMonth();
    // const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [],
      showCalendarModal: false,
      singleDiaryTitle: '',
      singleDiaryDate: '',
      singleDiaryContent: '',
      singleDiaryPermissionId: '',
      singleDiaryPermissionName: '',
      singleDiaryId: ''
    };
  },
  methods: {
    showCalendar(attr) {
      this.showCalendarModal = true
      // console.log(diary)
      this.singleDiaryTitle = attr.customData.title
      this.singleDiaryDate = attr.customData.date
      this.singleDiaryContent = attr.customData.content
      this.singleDiaryPermissionId = attr.customData.permission_id
      this.singleDiaryPermissionName = attr.customData.per_name
      this.singleDiaryId = attr.customData.diary_id
    },
    confirmShow() {
      this.showCalendarModal = false
    },
    cancelShow(close) {
      // some code...
      close()
    },
  },
  mounted() {
    this.axios('/getDiary')
      .then((response) => {
        // this.attributes = response.data.data
        // console.log(response)

        const oldDiary = response.data.data
        console.log(oldDiary)
        let newDiaryArray = oldDiary.map(e => {
          const result = {
            customData: {
              ...e
            },
            dates: new Date(e.date).toString()
          }
          return result
        })
        this.attributes = newDiaryArray
        console.log(this.attributes)
        // for(let i=0; i<this.attributes.length; i++){
        //   console.log(this.attributes[i].customData.title)
        // }

      })
      .catch((err) => {
        console.log(err);
      })
  }
};
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  display: none;
}

/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;

  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }

  & .vc-weeks {
    padding: 0;
  }

  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }

  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    min-height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;

    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }

    &:not(.on-bottom) {
      border-bottom: var(--day-border);

      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }

    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }

  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
.vc-weekday {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>