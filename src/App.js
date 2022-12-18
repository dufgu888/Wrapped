import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./components/HomeScreen";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Navbar />
			<HomeScreen />
			{/* <Routes>
				<Route path="/" element={<HomeScreen />} />
			</Routes> */}
			<Footer />
		</Router>
	);
}

export default App;
