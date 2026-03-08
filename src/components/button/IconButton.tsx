interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}
const IconButton: React.FC<IconButtonProps> = ({ onClick, icon }) => {
  return (
    <button onClick={onClick} className="center rounded-3xl p-1 text-2xl m-1">
      <div>{icon}</div>
    </button>
  );
};
export default IconButton;
