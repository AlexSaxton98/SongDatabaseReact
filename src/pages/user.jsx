import './user.css';

export const User = () =>{
    return(
        <div className="container">
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            
            
            
        </div>
    )
}

const Playlist = () => {
    return(
        <div className="playlist">
            <Input/>
            <AddSong/>
            <div className="playlistContent">
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
                <Song/>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
                <Song/>
            </div>
            
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

const AddSong = () => {
    return(
        <div>
            <button className="button">Add Song</button>
        </div>
    )
}

//test comment
export default User;