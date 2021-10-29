import Modal from 'react-modal';
import { useState } from "react";
import './Modal.css';
import { LoginPage, ArtPanel, LoginPanel, InputBox, LogBtn, LoginSection } from './home-styling';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Home = () => {

    
    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    const logusrpass = () => {
        console.log(username)
        console.log(password)
    };

    const register = () => {
        Axios.post("https://thissongdatabase.herokuapp.com/users/register", {
            email: regUsername,
            password: regPassword
        }).then((response) => {
            console.log(response);
        });
    };



    return (
        <div>
            <LoginPage>
                <ArtPanel />      
                <LoginPanel>
                    <LoginSection>
                        <h1>Music to my ears.</h1>
                        <form action="">
                            <InputBox type="text" placeholder="email..." onChange={e => setUsername(e.target.value)} />
                            <InputBox type="password" placeholder="password..." onChange={e => setPassword(e.target.value)} />
                            <Link to={'./user'} >
                                <LogBtn type="submit" onClick={logusrpass}> Log in. </LogBtn>
                            </Link>
                        </form>
                        <p>Don't have an account? <span className="signup" onClick={handleShowModal}>Sign up.</span></p>
                    </LoginSection>
                </LoginPanel>
                <Modal 
                    isOpen={showModal}
                    ariaHideApp={false}
                    className="Modal"
                    style={{
                        overlay: {
                            backgroundColor: '#0000007b',
                        }
                    }}
                    >
                        <div className="xDiv">
                            <button onClick={handleHideModal} className="x">×</button>
                        </div>
                        <div>
                            <h4 className="create">Create an account.</h4>
                            <form action="">
                                <InputBox type="text" placeholder="email..." className="inputstyle" onChange={e => setRegUsername(e.target.value)}/>
                                <InputBox type="text" placeholder="password..." className="inputstyle" onChange={e => setRegPassword(e.target.value)}/>
                                <LogBtn type="submit" onClick={register}> Sign up. </LogBtn>
                            </form>
                        </div>
                </Modal>          
            </LoginPage>
        </div>
    )
}

export default Home
