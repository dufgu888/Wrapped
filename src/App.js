import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/HomeScreen";
import Footer from "./components/Footer";
import "./assets/css/LightDarkMode.css";

function App() {
	const [activeSidebar, setActiveSidebar] = useState(false);
	const handleSidebar = () => {
		setActiveSidebar(!activeSidebar);
	};
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [theme]);

	return (
		<Router>
			<Navbar toggleTheme={toggleTheme} />
			<div className={`main ${theme}`}>
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
