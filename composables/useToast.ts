import { c2c } from "vue-c2c";
import Toast from "@/components/ui/Toast.vue";

export default function () {
  const TOAST_CONTAINER_ID = "toast-container";

  const useDialog = c2c(Toast, {
    display: "v-if",
    appendTo: () => document.getElementById(TOAST_CONTAINER_ID) as HTMLElement,
  });

  const createRootElement = () => {
    const root = document.getElementById(TOAST_CONTAINER_ID);
    if (root) return;

    const _root = document.createElement("div");
    _root.id = TOAST_CONTAINER_ID;

    _root.classList.add(
      "empty:hidden",
      "flex",
      "flex-col",
      "gap-3",
      "fixed",
      "top-0",
      "right-0",
      "z-[9999]",
      "p-3"
    );

    document.body.appendChild(_root);
  };

  onMounted(() => {
    createRootElement();
  });

  const show = (content: string) => {
    const { toggle, hide } = useDialog(
      { content },
      {
        emits: {
          onClose: () => hide(),
        },
      }
    );

    toggle();
  };

  return { show };
}
