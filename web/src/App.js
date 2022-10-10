import "./App.css";
import { Header } from "./Components";
import { AllQueries, AskQueries, SignIn, SignUp } from "./Pages";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	return (
		<div className="app">
    <Header />
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/allqueries" element={<AllQueries />} />
        <Route path="/askqueries" element={<AskQueries />} />
      </Routes>
    </AnimatePresence>
  </div>
	);
}

export default App;
