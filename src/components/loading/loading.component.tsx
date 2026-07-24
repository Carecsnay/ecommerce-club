import { BeatLoader } from "react-spinners";
import { LoadingContainer } from "./loading.style";

const LoadingComponent = () => {
    return (
        <LoadingContainer>
            <BeatLoader cssOverride={{}} loading margin={4} size={20} speedMultiplier={0.6} />
        </LoadingContainer>
    );
};

export default LoadingComponent;
