import Logo from "@/components/Logo";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="min-h-[100vh] flex items-center justify-center w-full  gap-y-5 flex-wrap">
      <div className="w-full flex justify-center">
      <Logo/>
      </div>
      {children}
    </div>
   );
}
 
export default AuthLayout;