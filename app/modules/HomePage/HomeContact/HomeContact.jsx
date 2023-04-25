import { useTranslation } from "@/i18n";

const HomeContact = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <>
      <div>HomeContact</div>
    </>
  );
};

export default HomeContact;
