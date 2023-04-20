import MyNavbar from "../../components/navbar";
import { NameLarge } from "../../components/name";
import SignUpForm from "./signup";

export default function Page() {
   
    
    return (
        <>
    <MyNavbar/>
    <div className="flex">
        <div className="mx-auto py-20 relative">
            <NameLarge/>
            <p className="py-5 text-black dark:text-white">Sign up to learn more about me!</p>
            <SignUpForm/>
        </div>
    </div>
    </>
    );
}