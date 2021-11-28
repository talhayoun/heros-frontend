import React, { useContext, useState } from 'react';
import { GiPointySword } from 'react-icons/gi';
import { MdSpaceDashboard } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { LoginContext } from '../../context/LoginContext';
import { logoutAction } from '../../actions/userActions';

const NavBar = ({ setIsDashboardVisible }) => {
    const [tags, setTags] = useState(["", "", ""]);

    const navigate = useNavigate();
    const { dispatchUserData } = useContext(LoginContext);

    const handleTags = (msg, index) => {
        let copyTags = [...tags];
        copyTags[index] = msg;
        setTags(copyTags)
    }

    const handleLogout = () => {
        dispatchUserData(logoutAction())
        navigate("/login")
    }
    return (
        <div className="navbar">
            <div className="navbar-icons">
                <div>
                    <MdSpaceDashboard
                        onClick={() => setIsDashboardVisible(true)}
                        onMouseEnter={() => handleTags('Dashboard', 0)}
                        onMouseLeave={() => handleTags("", 0)}
                    />
                    {tags[0] && <p className="navbar-icons-msg">{tags[0]}</p>}
                </div>
                <div>
                    <GiPointySword
                        onClick={() => setIsDashboardVisible(false)}
                        onMouseEnter={() => handleTags('Heros', 1)}
                        onMouseLeave={() => handleTags("", 1)}
                    />
                    {tags[1] && <p className="navbar-icons-msg">{tags[1]}</p>}
                </div>
            </div>
            <div className="navbar-setting">
                <FiLogOut
                    onClick={handleLogout}
                    style={{ color: 'red', cursor: 'pointer' }}
                    onMouseEnter={() => handleTags('Logout', 2)}
                    onMouseLeave={() => handleTags("", 2)}
                />
                {tags[2] && <p className="navbar-icons-msg">{tags[2]}</p>}
            </div>
        </div>
    );
};

export default NavBar;