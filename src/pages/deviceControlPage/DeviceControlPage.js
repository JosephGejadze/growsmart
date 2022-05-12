import { useCallback, useState } from "react";
import DeviceControlAuth from "./DeviceControlAuth/DeviceControlAuth";
import DeviceControlPanel from "./DeviceControlPanel/DeviceControlPanel";

const DeviceControlPage = () => {
  const [isAuth, setIsAuth] = useState(true); // TODO: set to false

  const onAuthenticate = useCallback(() => {
    setIsAuth(true);
  }, []);

  return (
    <div>
      {isAuth ? (
        <DeviceControlPanel />
      ) : (
        <DeviceControlAuth onAuthenticate={onAuthenticate} />
      )}
    </div>
  );
};

export default DeviceControlPage;
