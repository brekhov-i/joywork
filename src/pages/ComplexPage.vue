<template>
  <DefaultLayout>
    <div class="complexPage">
      <div class="infoByComplex">
        <div class="infoByComplex__title">{{ complexData?.title }}</div>
        <div class="infoByComplex__content">
          <div class="infoByComplex__infoBlock">
            <div class="infoBlock__head">
              <div class="infoBlock__title">Информация об объекте</div>
              <div class="infoBlock__btnMenu">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.591 17.341C9.71231 18.2196 8.28768 18.2196 7.409 17.341C6.53032 16.4623 6.53032 15.0377 7.409 14.159C8.28768 13.2803 9.71231 13.2803 10.591 14.159C11.4697 15.0377 11.4697 16.4623 10.591 17.341Z"
                    fill="#BDBDBD"
                  />
                  <path
                    d="M10.591 10.591C9.71231 11.4697 8.28768 11.4697 7.409 10.591C6.53032 9.71231 6.53032 8.28768 7.409 7.40901C8.28768 6.53033 9.71231 6.53033 10.591 7.40901C11.4697 8.28768 11.4697 9.71231 10.591 10.591Z"
                    fill="#BDBDBD"
                  />
                  <path
                    d="M10.591 3.84098C9.71231 4.71966 8.28768 4.71966 7.409 3.84098C6.53032 2.96231 6.53032 1.53768 7.409 0.659007C8.28768 -0.219669 9.71231 -0.219669 10.591 0.659007C11.4697 1.53768 11.4697 2.96231 10.591 3.84098Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="infoByComplex__media">
            <div class="media__plug">
              <div class="plug__icon"></div>
              <div class="plug__text"></div>
              <MyButton class="plug__btn"
                ><svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 1.5C8.01664 1.5 6.5666 1.93987 5.33323 2.76398C4.09986 3.58809 3.13856 4.75943 2.57091 6.12987C2.00325 7.50032 1.85472 9.00832 2.14411 10.4632C2.4335 11.918 3.14781 13.2544 4.1967 14.3033C5.2456 15.3522 6.58197 16.0665 8.03683 16.3559C9.49168 16.6453 10.9997 16.4968 12.3701 15.9291C13.7406 15.3614 14.9119 14.4001 15.736 13.1668C16.5601 11.9334 17 10.4834 17 9C17 8.01509 16.806 7.03982 16.4291 6.12987C16.0522 5.21993 15.4997 4.39314 14.8033 3.6967C14.1069 3.00026 13.2801 2.44781 12.3701 2.0709C11.4602 1.69399 10.4849 1.5 9.5 1.5ZM9.5 15C8.31332 15 7.15328 14.6481 6.16658 13.9888C5.17989 13.3295 4.41085 12.3925 3.95673 11.2961C3.5026 10.1997 3.38378 8.99334 3.61529 7.82946C3.8468 6.66557 4.41825 5.59647 5.25736 4.75736C6.09648 3.91824 7.16558 3.3468 8.32946 3.11529C9.49335 2.88378 10.6997 3.0026 11.7961 3.45672C12.8925 3.91085 13.8295 4.67988 14.4888 5.66658C15.1481 6.65327 15.5 7.81331 15.5 9C15.5 10.5913 14.8679 12.1174 13.7426 13.2426C12.6174 14.3679 11.0913 15 9.5 15ZM12.5 8.25H10.25V6C10.25 5.80109 10.171 5.61032 10.0303 5.46967C9.88968 5.32902 9.69892 5.25 9.5 5.25C9.30109 5.25 9.11033 5.32902 8.96967 5.46967C8.82902 5.61032 8.75 5.80109 8.75 6V8.25H6.5C6.30109 8.25 6.11033 8.32902 5.96967 8.46967C5.82902 8.61032 5.75 8.80109 5.75 9C5.75 9.19891 5.82902 9.38968 5.96967 9.53033C6.11033 9.67098 6.30109 9.75 6.5 9.75H8.75V12C8.75 12.1989 8.82902 12.3897 8.96967 12.5303C9.11033 12.671 9.30109 12.75 9.5 12.75C9.69892 12.75 9.88968 12.671 10.0303 12.5303C10.171 12.3897 10.25 12.1989 10.25 12V9.75H12.5C12.6989 9.75 12.8897 9.67098 13.0303 9.53033C13.171 9.38968 13.25 9.19891 13.25 9C13.25 8.80109 13.171 8.61032 13.0303 8.46967C12.8897 8.32902 12.6989 8.25 12.5 8.25Z"
                    fill="white"
                  />
                </svg>
                Добавить материалы
              </MyButton>
            </div>
          </div>
          <div class="infoByComplex__generalPlan"></div>
        </div>
      </div>
      <div class="listHomes">
        <div class="listHomes__title">Список домов</div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { useComplexStore } from "@/app/store/complex";
import { TComplex } from "@/app/types/complex";
import MyButton from "@/shared/UI/MyButton.vue";
import DefaultLayout from "@/shared/layouts/defaultLayout.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { getComplexById } = useComplexStore();
const complexData = ref<TComplex>();

onMounted(() => {
  const id: string = route.params.id as string;
  const complex = getComplexById(id);
  if (complex) {
    complexData.value = complex;
  } else {
    router.push("/");
  }
});
</script>

<style lang="scss">
.complexPage {
  width: 100%;
  height: 100%;
  @apply bg-white;
  padding: 0 30px;

  .infoByComplex {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &__title {
      font-size: 32px;
    }
  }
}
</style>
