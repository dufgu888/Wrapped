import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const GridView = ({ children }) => {
	const ResponsiveGridLayout = WidthProvider(Responsive);
	const len = children.length;
	return <div>GridView</div>;
};

export default GridView;
