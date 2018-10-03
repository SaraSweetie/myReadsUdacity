import React from 'react'
import {Link} from 'react-router-dom'


class NotFound extends React.Component {
    render() {
        return (
            <div>
                <p>404 Page Not Found</p>
                <Link to="/">Back to Home</Link>
            </div>
		);
    }
}
export default NotFound;
