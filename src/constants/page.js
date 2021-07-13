import { createContext } from "react";

const PageContext = createContext({
    status: "start", 
    data: {}, 
    onClick: () => {}, 
    setData: () => {}
});

export default PageContext;