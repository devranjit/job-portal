import Menu from "./Menu";



const Header = () => {
    return (
        <div className=" flex justify-between items-center  px-5 py-4 bg-gray-200  ">
            <div>
                <h1>logo</h1>
            </div>
            <div>
                <Menu/>
            </div>
            <div>
                <h1>Search</h1>
            </div>
        </div>
    );
};

export default Header;