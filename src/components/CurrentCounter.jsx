import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


const CurrentCounter = ({ counter }) => {
    const [ctr, setCtr] = useState(counter.counter);

    useEffect(() => {
        setCtr(counter.counter);
    }, [counter])
    return (
        <div>
            {
                ctr
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}
export default connect(
    mapStateToProps,
)(CurrentCounter);