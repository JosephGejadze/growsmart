import { useCallback, useState } from "react";
import styles from "./DeviceControlPanel/DeviceControlPanel.module.scss";
import water from "../../images/water.png";
import light from "../../images/light.png";
import humidity from "../../images/humidity.png";
import co from "../../images/co.png";
import DeviceControlPanel from "./DeviceControlPanel/DeviceControlPanel";
import DeviceControlAuth from "./DeviceControlAuth/DeviceControlAuth";

const DeviceControlPage = () => {
  const [isAuth, setIsAuth] = useState(false); // TODO: change to false before commit

  const onAuthenticate = useCallback(() => {
    setIsAuth(true);
  }, []);

  return (
    <div className={styles.container}>
      {isAuth ? (
        <DeviceControlPanel />
      ) : (
        <DeviceControlAuth onAuthenticate={onAuthenticate} />
      )}
    </div>
  );
};

export default DeviceControlPage;
