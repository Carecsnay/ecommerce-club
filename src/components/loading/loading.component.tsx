import { BeatLoader } from "react-spinners";

import { LoadingContainer } from "./loading.style";

interface LoadingProps {
    message?: string;
}

const LoadingComponent = ({ message }: LoadingProps) => {
    return (
        <LoadingContainer>
            {message && <p>{message}</p>}
            <BeatLoader cssOverride={{}} loading margin={4} size={20} speedMultiplier={0.6} />
        </LoadingContainer>
    );
};

export default LoadingComponent;
