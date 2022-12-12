import { Html } from "@react-three/drei";
import "./loader.scss";

import { useTranslation } from "react-i18next";

const Loader = () => {
  const { t } = useTranslation();

  return (
    <Html fullscreen>
      <div className="text">{t("loading...")}</div>
    </Html>
  );
};

export default Loader;
