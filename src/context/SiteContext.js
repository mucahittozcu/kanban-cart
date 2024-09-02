import { createContext } from "react"

const SiteContext = createContext({
    userName: "",
    setUserName: () => {},
    mail: "",
    setMail: () => {},
    log: [],
    setLog: () => {},
    projectOne: false,
    setProjectOne: () => {},
    projectTwo: false,
    setProjectTwo: () => {},
    projectThree: false,
    setProjectThree: () => {},
    projectFour: false,
    setProjectFour: () => {},
    mouseEnterOne: false,
    setMouseEnterOne: () => {},
    mouseEnterTwo: false,
    setMouseEnterTwo: () => {},
    mouseEnterThree: false,
    setMouseEnterThree: () => {},
    mouseEnterFour: false,
    setMouseEnterFour: () => {},
    mouseEnterSix: false,
    setMouseEnterSix: () => {},
    addBoard: false,
    setAddBoard: () => {},
    handleSubmit: () => {}
});

export default SiteContext;