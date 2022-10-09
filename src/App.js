import { useEffect } from "react";
import AOS from "aos";

import { LandingPage } from "./pages";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
