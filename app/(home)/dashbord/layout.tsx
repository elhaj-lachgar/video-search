import SideBar from "@/components/SideBar";
import { Toaster } from "react-hot-toast";

const DashLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="flex w-full h-full">
        <div className="w-[34px] md:w-[124px] lg:w-[200px]">
            <SideBar/>
        </div>
      {children}
      <Toaster/>
    </div>
   );
}
 
export default DashLayout;