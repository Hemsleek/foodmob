import "./gesture-handler";

import AppRoutes from "./src/AppRoutes";
import AppManager from "./src/components/organisms/AppManager";

export default function App() {
  return (
    <AppManager>
      <AppRoutes />
    </AppManager>
  );
}
