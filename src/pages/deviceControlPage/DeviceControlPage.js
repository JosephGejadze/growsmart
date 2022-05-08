import { useCallback, useState } from "react";
import styles from "./DeviceControlPanel/DeviceControlPanel.module.scss";
import DeviceControlPanel from "./DeviceControlPanel/DeviceControlPanel";
import DeviceControlAuth from "./DeviceControlAuth/DeviceControlAuth";

const DeviceControlPage = () => {
  const [isAuth, setIsAuth] = useState(false);

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
