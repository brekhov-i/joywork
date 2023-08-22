export default {
  pt: {
    inputText: {
      root: {
        class: [
          "border border-grey-400 rounded h-9 py-2 px-4",
          "focus:!shadow-none focus:!border-green hover:!border-green",
        ],
      },
    },
    inputswitch: {
      root: { class: ["inline-block relative", "w-12 h-7"] },
      slider: {
        class: [
          "absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent",
          "transition-colors duration-200 rounded-2xl",
          "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",
          "before:absolute before:content-'' before:top-1/2 before:bg-white before:dark:bg-gray-900 before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
        ],
      },
    },
    calendar: {
      input: {
        class: [
          "!border-r-0 !border-grey-400 hover:!border-grey-400 focus:!shadow-none h-9 !rounded-s-md !rounded-e-none",
        ],
      },
      timePicker: {
        class: "bg-white text-grey-900 h-max",
      },
      container: {
        class: "h-max",
      },
      dropdownButton: {
        root: {
          class: ["!bg-white !border-1 !border-l-0 !border-grey-400 h-9"],
        },
      },
      hourPicker: {},
      separatorContainer: {
        class: "mx-4",
      },
    },
    dropdown: {
      root: {
        class: [
          "border border-grey-400 rounded h-9 py-2 px-4 !shadow-none",
          "focus:!border-green focus:!shadow-none",
          "hover:!border-green active:!border-green",
        ],
      },
      wrapper: {
        class: "border border-grey-400 rounded px-4 py-2",
      },
      trigger: {
        class: ["!w-max"],
      },
      item: {
        class: "text-grey-900",
      },
      emptyMessage: {
        class: "text-grey-900 text-sm",
      },
    },
    multiselect: {
      root: {
        class: [
          "border border-grey-400 rounded h-9 py-2 px-4 !shadow-none",
          "focus:!border-green focus:!shadow-none",
          "hover:!border-green active:!border-green",
        ],
      },
      wrapper: {
        class: "border border-grey-400 rounded px-4 py-2 bg-white",
      },
      header: {
        class: "!hidden",
      },
      trigger: {
        class: ["!w-max"],
      },
      item: {
        class: "text-grey-900",
      },
      emptyMessage: {
        class: "text-grey-900 text-sm",
      },
    },
    textarea: {
      root: { class: "border border-grey-400 rounded h-9 py-2 px-4" },
    },
    tabpanel: {
      headerTitle: (instance: any) => ({
        class: [
          "text-black",
          instance.tabpanel.context.active ? "font-semibold" : "font-normal",
        ],
      }),
      headerAction: (instance: any) => ({
        class: [
          instance.tabpanel.context.active ? "!border-green" : "",
          "focus:!shadow-none",
        ],
      }),
    },
    tabview: {
      panelContainer: {
        class: ["!p-0 !mt-7.5"],
      },
    },
    message: {
      root: {
        class: ["!border-l-0"],
      },
      icon: {
        class: ["mr-4"],
      },
      text: {
        class: ["text-black"],
      },
    },
  },
};
