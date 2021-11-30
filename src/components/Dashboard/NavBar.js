import React, { useContext, useState } from 'react';
import { GiPointySword } from 'react-icons/gi';
import { MdSpaceDashboard } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { LoginContext } from '../../context/LoginContext';
import { logoutAction } from '../../actions/userActions';
import { TrainerContext } from '../../context/TrainerContext';
import { clearTrainerDataAction } from '../../actions/trainerActions';

const NavBar = ({ setIsDashboardVisible }) => {
    const [isTagVisible, setIsTagVisible] = useState([false, false, false]);

    const navigate = useNavigate();
    const { dispatchUserData } = useContext(LoginContext);
    const { dispatchTrainerData } = useContext(TrainerContext);

    const handleTagStatus = (index, value) => {
        let copyTags = [...isTagVisible];
        copyTags[index] = value;
        setIsTagVisible(copyTags)
    }

    const handleLogout = () => {
        dispatchUserData(logoutAction())
        dispatchTrainerData(clearTrainerDataAction());
        navigate("/login")
    }
    return (
        <div className="navbar">
            <div className="navbar-icons">
                <div>
                    <MdSpaceDashboard
                        onClick={() => setIsDashboardVisible(true)}
                        onMouseEnter={() => handleTagStatus(0, true)}
                        onMouseLeave={() => handleTagStatus(0, false)}
                    />
                    {isTagVisible[0] && <p className="navbar-icons-msg">Dashboard</p>}
                </div>
                <div>
                    <GiPointySword
                        onClick={() => setIsDashboardVisible(false)}
                        onMouseEnter={() => handleTagStatus(1, true)}
                        onMouseLeave={() => handleTagStatus(1, false)}
                    />
                    {isTagVisible[1] && <p className="navbar-icons-msg">Heroes</p>}
                </div>
            </div>
            <div className="navbar-setting">
                <FiLogOut
                    onClick={handleLogout}
                    style={{ color: 'red', cursor: 'pointer' }}
                    onMouseEnter={() => handleTagStatus(2, true)}
                    onMouseLeave={() => handleTagStatus(2, false)}
                />
                {isTagVisible[2] && <p className="navbar-icons-msg">Logout</p>}
            </div>
        </div>
    );
};

export default NavBar;