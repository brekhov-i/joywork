<template>
  <RouterLink :to="`/complex/${'hbshbfhsfds'}`" class="complexItem">
    <div class="complexItem__image">
      <img
        :src="require('@/shared/assets/images/complexes/complex1.png')"
        alt=""
      />
    </div>
    <div class="complexItem__content">
      <div class="complexItem__head">
        <div class="complexItem__nav">
          <div class="complexItem__develop">Название застройщика</div>
          <div class="complexItem__btnMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.2678 8.23232C20.2441 9.20863 20.2441 10.7916 19.2678 11.7679C18.2915 12.7442 16.7085 12.7442 15.7322 11.7679C14.7559 10.7916 14.7559 9.20863 15.7322 8.23232C16.7085 7.25601 18.2915 7.25601 19.2678 8.23232Z"
                fill="#BDBDBD"
              />
              <path
                d="M11.7678 8.23232C12.7441 9.20863 12.7441 10.7916 11.7678 11.7679C10.7915 12.7442 9.20854 12.7442 8.23223 11.7679C7.25592 10.7916 7.25592 9.20863 8.23223 8.23232C9.20854 7.25601 10.7915 7.25601 11.7678 8.23232Z"
                fill="#BDBDBD"
              />
              <path
                d="M4.26776 8.23232C5.24406 9.20863 5.24406 10.7916 4.26776 11.7679C3.29145 12.7442 1.70854 12.7442 0.73223 11.7679C-0.244077 10.7916 -0.244077 9.20863 0.73223 8.23232C1.70854 7.25601 3.29145 7.25601 4.26776 8.23232Z"
                fill="#BDBDBD"
              />
            </svg>
          </div>
        </div>
        <div class="complexItem__title">Тестовый ЖК Невский</div>
      </div>
      <div class="complexItem__location">
        <div class="complexItem__metro">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.242 2.24765L9.99989 12.4689L6.75798 2.24765C2.90144 3.57322 0 7.16913 0 11.2916C0 13.7746 1.01298 16.0644 2.65178 17.752H7.35212L7.84488 15.6151C2.22957 13.4149 3.29134 6.59717 5.32701 5.48428C5.56864 5.55694 9.10942 17.7017 9.10942 17.7017C9.15779 17.7017 9.31493 17.7017 9.50692 17.7017C9.54747 17.7017 9.70018 17.7017 9.89048 17.7017C9.95934 17.7017 10.0337 17.7017 10.1091 17.7017C10.2384 17.7017 10.3725 17.7017 10.4924 17.7017C10.6846 17.7017 10.8416 17.7017 10.8902 17.7017C10.8902 17.7017 14.4311 5.55694 14.6726 5.48428C16.7085 6.59717 17.7698 13.4149 12.1545 15.6151L12.6475 17.752H17.3478C18.9868 16.0644 19.9998 13.7746 19.9998 11.2916C19.9998 7.16913 17.0983 3.57322 13.242 2.24765Z"
              fill="#8EB3F5"
            />
          </svg>
          Политехническая
          <div class="time">10 минут на транспорте</div>
        </div>
        <div class="complexItem__address">
          г. Санкт-Петербург, Невский проспект
        </div>
      </div>
      <div class="complexItem__change">
        {{ change }}
      </div>
      <div class="complexItem__advertisement">
        <RouterLink to="/" class="complexItem__advertisementLink">
          Реклама
        </RouterLink>
      </div>
      <div class="complexItem__counts">
        <RouterLink to="/" class="complexItem__houseLink">
          Домов: <strong>3</strong>
        </RouterLink>
        <RouterLink to="/" class="complexItem__roomLink">
          Помещений: <strong>48</strong>
        </RouterLink>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from "vue";

const change = computed<string>(() => {
  const queue = "1 очередь";
  const corps = "Корпус 1";
  const status = "Сдан";
  return `${queue}. ${corps} - ${status}`;
});
</script>

<style scoped lang="scss">
@import "@/app/styles/function.scss";
.complexItem {
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: vw(450, 1920) 1fr;
  @apply bg-white;

  &.medium {
    width: 100%;
    height: auto;
    grid-template-columns: 1fr;
    border-radius: 5px;
    overflow: hidden;

    .complexItem__content {
      grid-template-columns: 1fr;
      padding: 16px;
    }
    .complexItem__head {
      flex-direction: column;
      padding: 0;
      border-bottom: 1px solid;
      @apply border-grey;
      padding-bottom: 16px;
    }
    .complexItem__nav {
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
    }
    .complexItem__btnMenu {
      margin-left: auto;
    }
    .complexItem__title {
      font-size: 18px;
    }
    .complexItem__location {
      width: 100%;
      padding: 16px 0;
    }
    .complexItem__change {
      grid-column: 1;
      grid-row: 3;
      border-left: 0;
      padding: 16px 0;
    }
    .complexItem__advertisement {
      grid-row: 4;
      padding: 16px 0;
    }
    .complexItem__counts {
      grid-row: 5;
      padding: 16px 0 0 0;

      strong {
        text-decoration: underline;
      }
    }
  }

  &__image {
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 492px;
  }
  &__head {
    width: 100%;
    height: auto;
    grid-row: 1;
    grid-column: span 2;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 30px;
    border-bottom: 1px solid;
    @apply border-grey;
  }

  &__title {
    position: relative;
    font-size: 27px;
    line-height: 100%;

    &::before {
      width: 100%;
      height: 1px;
      @apply bg-black;
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      right: 0;
    }
  }

  &__nav {
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
  }

  &__develop {
    @apply text-grey-900;
    font-size: 15px;
    line-height: 100%;
    margin-right: 30px;
  }

  &__btnMenu {
    width: 20px;
    height: 20px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__location {
    grid-row: 2;
    grid-column: 1;
    width: 100%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid;
    @apply border-grey;
  }
  &__metro {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 20px;
    .time {
      @apply text-grey-900;
      font-size: 14px;
    }
  }
  &__change {
    width: 100%;
    grid-row: 2;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-left: 1px solid;
    border-bottom: 1px solid;
    @apply border-grey;
    padding: 20px 30px;
    font-size: 15px;
  }
  &__advertisement {
    grid-row: 3;
    grid-column: span 2;
    padding: 18px 30px;
    border-bottom: 1px solid;
    @apply border-grey;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__advertisementLink {
    border-radius: 3px;
    border: 1px solid;
    @apply border-green;
    background: var(
      --linear,
      linear-gradient(180deg, #fefefe 0%, #f6f6f6 100%)
    );
    padding: 8px 12px;
    @apply text-green;
    @apply transition-colors;
    &:hover {
      background: transparent;
      @apply bg-green;
      @apply text-white;
      @apply transition-colors;
    }
  }
  &__counts {
    grid-row: 4;
    grid-column: span 2;
    padding: 18px 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;

    a {
      padding: 17px 20px;
      border-radius: 3px;
      border: 1px solid;
      @apply border-grey;
      background: var(
        --linear,
        linear-gradient(180deg, #fefefe 0%, #f6f6f6 100%)
      );
    }
  }

  @media screen and (max-width: 1600px) {
    width: 100%;
    height: max-content;
    display: grid;
    grid-template-columns: vw(450, 1440) 1fr;
    @apply bg-white;

    &.medium {
      width: 100%;
      height: auto;
      grid-template-columns: 1fr;
      border-radius: 5px;
      overflow: hidden;

      .complexItem__content {
        grid-template-columns: 1fr;
        padding: 16px;
      }
      .complexItem__head {
        flex-direction: column;
        padding: 0;
        border-bottom: 1px solid;
        @apply border-grey;
        padding-bottom: 16px;
      }
      .complexItem__nav {
        width: 100%;
        margin-left: 0;
        margin-bottom: 20px;
      }
      .complexItem__btnMenu {
        margin-left: auto;
      }
      .complexItem__title {
        font-size: 18px;
      }
      .complexItem__location {
        width: 100%;
        padding: 16px 0;
      }
      .complexItem__change {
        border-left: 0;
        padding: 16px 0;
      }
      .complexItem__advertisement {
        padding: 16px 0;
      }
      .complexItem__counts {
        padding: 16px 0 0 0;
      }
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr vw(340, 1440);
    }
    &__head {
      padding: 26px;
      border-bottom: 1px solid;
      @apply border-grey;
    }

    &__title {
      font-size: 24px;
    }

    &__develop {
      font-size: 14px;
      margin-right: 26px;
    }

    &__location {
      padding: 16px 25px;
    }
    &__metro {
      column-gap: 8px;
      margin-bottom: 18px;
    }
    &__change {
      padding: 16px 25px;
      font-size: 14px;
    }
    &__advertisement {
      padding: 16px 25px;
    }
    &__advertisementLink {
      padding: 6px 10px;
      font-size: 14px;
    }
    &__counts {
      padding: 16px 25px;
      column-gap: 8px;

      a {
        padding: 16px 18px;
        font-size: 15px;
      }
    }
  }
}
</style>
