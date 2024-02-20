import { Sidebar } from "flowbite-react";
import { PiUploadFill } from "react-icons/pi";
import { BiSolidLogOutCircle, BiSolidBookContent } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

import Logo from "../assets/earist-logo-1.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";

const SideBar = () => {
  //function for logging out
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const theme = {
    sidebar: `bg-red-900 absolute top-0 left-0 text-white w-60 h-screen`,
    sideitems: `text-white flex items-start justify-start hover:text-red-900 hover:bg-amber-50 mx-2 cursor-pointer`,
    sidebarGroup: `mt-10`,
    sidebarLogo: `w-16 absolute left-[5px] top-[5px]`,
  };

  const uploadColor = "#fbbf24";
  const manageColor = "#0ea5e9";
  const userColor = "#ff0dfe";
  const logoutColor = "#2dd4bf";
  const iconSize = "1.5em";

  const handleLogout = async () => {
    try {
      await logout();
      //logging out success
      //redirect to the home page
      navigate("/", { replace: true, state: { key: Date.now() } });
      window.location.reload(true);
    } catch (error) {
      //handle error
      console.log("Error logging out: ", error);
    }
  };

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <div className={theme.sidebar}>
        <div className={theme.sidebarGroup}>
          <div className="flex items-center justify-center">
            <img src={Logo} className={theme.sidebarLogo} />
            <h1 className="mb-10 ml-16 text-sm font-semibold">
              ECC Extension Program
            </h1>
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/admin/dashboard/upload"
                icon={() => (
                  <PiUploadFill
                    style={{ color: uploadColor, fontSize: iconSize }}
                  />
                )}
                className={theme.sideitems}
              >
                Upload Contents
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/dashboard/manage"
                icon={() => (
                  <BiSolidBookContent
                    style={{ color: manageColor, fontSize: iconSize }}
                  />
                )}
                className={theme.sideitems}
              >
                Manage Contents
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/dashboard/users"
                icon={() => (
                  <MdManageAccounts
                    style={{ color: userColor, fontSize: iconSize }}
                  />
                )}
                className={theme.sideitems}
              >
                Users Accounts
              </Sidebar.Item>
              <Sidebar.Item
                icon={() => (
                  <BiSolidLogOutCircle
                    style={{ color: logoutColor, fontSize: iconSize }}
                  />
                )}
                onClick={handleLogout}
                className={theme.sideitems}
              >
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
