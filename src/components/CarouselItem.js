const Item = ({ children, width }) => {
	return <div className={`w-[${width}%] p-2 h-[250px]`}>{children}</div>;
};
export default Item;
