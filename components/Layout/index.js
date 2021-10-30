import NavBar from "../NavBar"

export default function index({children}) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
