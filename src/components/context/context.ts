import {createContext} from "react";
import {INavBarContext} from "../../types/nav-bar-type";

const Context = createContext<INavBarContext[]>([] as INavBarContext[])

export default Context