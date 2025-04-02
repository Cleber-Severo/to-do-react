
import Logo from "../assets/logo.png" // Adjust path accordingly

const Header = () => {
  return (
    <div
      style={{ height: "200px" }}
      className="bg-todo-gray-700 flex d-flex justify-center items-center w-full"
    >
      <img src={Logo} />
    </div>
  );
};

export default Header;
