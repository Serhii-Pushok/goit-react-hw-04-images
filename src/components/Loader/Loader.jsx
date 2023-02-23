import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
    return <MutatingDots
        height="100"
        width="100"
        color="#3f51b5"
        secondaryColor='#3f51b5'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        visible={true}
        />
}

