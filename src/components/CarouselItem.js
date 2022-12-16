const Item = ({ children, width }) => {
	return (
		<div className={`w-[${width}%] p-1 h-[250px] user-carousel-item`}>
			{children}
		</div>
	);
};
export default Item;
