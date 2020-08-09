import React from 'react';
import { useOnScreen } from '../../hooks/index';


const WorkFlow = (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.7 })

    return (
        <div>

        </div>
    );
}

export default WorkFlow;
