
import Main from "./Main";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function DashboardLayout() {
  return(
    <div className="flex">
      <div>
        <Menu />
      </div>
      <div className="flex-1">
        <Navigation />
        <Main />
      </div>
      
    </div>
  )
}