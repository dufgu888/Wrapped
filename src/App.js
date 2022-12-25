import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/HomeScreen";
import Footer from "./components/Footer";

function App() {
	const [activeSidebar, setActiveSidebar] = useState(false);
	const handleSidebar = () => {
		setActiveSidebar(!activeSidebar);
	};

	return (
		<Router>
			<Navbar />
			<div className="main">
				<Sidebar activeSidebar={activeSidebar} handleSidebar={handleSidebar} />
				<div
					className={`main-content ${activeSidebar ? "active-sidebar" : ""}`}>
					<HomeScreen />
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
