const Item = ({ children, width }) => {
	return <div className={`w-[${width}%] p-2`}>{children}</div>;
};
export default Item;
