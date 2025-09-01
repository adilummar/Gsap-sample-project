import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollTrigger);
function App() {

    return (
        <div className={"flex-center h-[100vh]"}>
           <h1 >this is a text</h1>
            <h2>this is another text</h2>
        </div>
    )
}

export default App
