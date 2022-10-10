import DrawerAppBar from "../components/Shared/UI/Elements/DrawerAppBar";
import Showcase from "../components/Showcase/Showcase";
import BrowserWindow from "../components/Projects/BrowserWindow";
import Selector from "../components/Projects/Selector";

export default function Home() {
    return (
        <div>
            <DrawerAppBar/>
            <Showcase/>
            <BrowserWindow/>
            <Selector/>
            <div style={{height: '100vh'}}>

            </div>
        </div>


    );
}
