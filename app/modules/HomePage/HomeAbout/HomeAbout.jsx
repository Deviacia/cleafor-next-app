import { useTranslation } from "@/i18n";

const HomeAbout = async ({ lng }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <>
      <div>HomeAbout</div>
    </>
  );
};

export default HomeAbout;
