import { ref } from "vue";

export const useContact = () => {
  const contactData = ref({
    hoge: 'hoge',
  });
  return { contactData }
}