import { ModeToggle } from "../theme/mode-toggle";
import { UserCircle } from "lucide-react";

const NavBar = () => {
  return (
    <div className="sticky top-0 h-12 border">
      <div className="flex h-full items-center justify-between p-4">
        <div>ARIFUL</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
        <div className="flex h-full items-center space-x-4">
          <ModeToggle />
          <UserCircle />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
