import './profile.css'
import ProfileIcon from '../../assets/profile-icon.png'
function Profile() {
    return (
        <div id="profile">
                <div><img id="profile-pic" width="250" src={ProfileIcon} /></div>
                <div id="profile-text">
                <p>Hi! I'm</p>
                <h2>Julian Lim</h2>
                <p>Boston University Student and Aspiring SWE</p>
                <div class="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/julian-lim-jun-ren/"><img id="linkedin-img" width="60" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
                    <a target="_blank" href="https://github.com/julianl05"><img id="github-img" width="60" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                </div>
                </div>
        </div>
    );
}
export default Profile