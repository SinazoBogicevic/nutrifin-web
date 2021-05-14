import Hero from "../components/hero/Hero"
import { WELCOME_MESSAGE } from "../utils/constants";

const Home : React.FC = () => {
    return (
        <>
        <Hero title={WELCOME_MESSAGE}/>
        </>
    )
}

export default Home;