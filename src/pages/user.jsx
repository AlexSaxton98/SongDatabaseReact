import './user.css';

export const User = () =>{
    return(
        <div className="container">
            <Playlist />
            
        </div>
    )
}

const Playlist = () => {
    return(
        <div className="playlist">
            <Input/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            <Song/>
            
        </div>
    )
}

const Input = () => {
    return(
    <>
        <label>Playlist Name</label>
        <input
            className ="input"
            type="text"    

        />
    </>
    )
}

const Song = () => {
    return(
        <div className="song">
            <p className="songInfo">Song Title</p>
            <p className="songInfo">Album</p>
            <p className="songInfo">Artist</p>
        </div>
    )
}



export default User;