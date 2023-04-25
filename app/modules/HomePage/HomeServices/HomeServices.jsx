import { useTranslation } from "@/i18n";

const HomeServices = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <>
      <div>HomeServices</div>
    </>
  );
};

export default HomeServices;
