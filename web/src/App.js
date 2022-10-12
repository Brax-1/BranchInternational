import "./App.css";
import "./Styling/auth.css";
import { Header } from "./Components";
import { AllQueries, ResolveQueries, SignIn, SignUp } from "./Pages";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ProtectedRoute";

function App() {
	const location = useLocation();
	return (
		<div className="app">
			<Header>
				<ToastContainer />
				<AnimatePresence exitBeforeEnter initial={false}>
					<Routes location={location} key={location.pathname}>
						<Route path="/signin" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
						<Route
							path="/allqueries"
							element={<ProtectedRoute Component={AllQueries} />}
						/>
						<Route
							path="/resolvequeries"
							element={<ProtectedRoute Component={ResolveQueries} />}
						/>
					</Routes>
				</AnimatePresence>
			</Header>
		</div>
	);
}

export default App;
