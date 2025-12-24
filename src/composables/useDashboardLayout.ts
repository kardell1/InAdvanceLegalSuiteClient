import { ref } from "vue";

export const useDashboardLayout = () => {
  const status = ref(true);
  const handleSideBar = () => {
    status.value = !status.value;
  };
  return { handleSideBar, status };
};
