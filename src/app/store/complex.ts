import { defineStore } from "pinia";
import { ref } from "vue";
import { TComplex, TTypeGrid } from "../types/complex";

export const useComplexStore = defineStore("object", () => {
  const complexArr = ref<TComplex[]>([
    {
      _id: "hbshbfhsfds",
      idDomClick: "6426372874",
      type: { newBuild: "Жилой комплекс в новостройке" },
      country: { ru: "Россия" },
      adress: "",
      metro: { politech: "Политехническая" },
      timeToMetro: {
        time: 1692218533314,
        typeToMetro: { onFoot: "Пешком" },
      },
      region: "Московская область",
      title: "Тестовый ЖК Невский",
      mainDescription: {
        title: "Заголовок описания",
        text: "Текст описания",
      },
      image: "",
    },
  ]);
  const typeView = ref<string>("tile");
  const arrTypes = ref<TTypeGrid>({
    list: "Список",
    tile: "Плитка",
    table: "Таблица",
  });

  const changeTypeView = (type: string): void => {
    typeView.value = type;
  };

  const getComplexById = (id: string): TComplex | undefined => {
    return complexArr.value.find((el) => el._id === id);
  };

  return {
    complexArr,
    typeView,
    arrTypes,
    changeTypeView,
    getComplexById,
  };
});
