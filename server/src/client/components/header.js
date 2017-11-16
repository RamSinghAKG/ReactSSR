import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// https://accounts.google.com/signin/oauth?
// client_id=560047548684-th05scmn9t28ct0md81unk873ghb9kl2.apps.googleusercontent.com&as=-456581d2a0bf243&
// destination=http://localhost:5000&approval_state=!ChRoQ1BTZl9MMVVHb09QME13cnprQhIfYzNYdmRMS0tuSmNkVU9xWmlfQjdtUjhFYjZ2ei14VQ%E2%88%99AHw7d_cAAAAAWg1ouRIuzn0r1GOhl_Wx8ccVWQ0BbcBZ&xsrfsig=AHgIfE-oarW_U20TdW07DDCle_FAjbDOlg
const Header = ({auth}) => {
    console.log('auth status :', auth);
    const authButton = auth
        ? (
            <a href="/api/logout">
                Logout
            </a>
        )
        : (
            <a href="/api/auth/google">Login</a>
        );
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">
                    React SSR</Link>
                <ul className="right">
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/admins'>Admins</Link></li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>

    );
};

function mapStateToProps({auth}) {
    return {auth};
}
export default connect(mapStateToProps)(Header);
