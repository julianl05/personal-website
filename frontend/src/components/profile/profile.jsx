import './profile.css'
import ProfileIcon from '../../assets/profile-icon.png'
function Profile() {
    return (
        <div id="profile">
                <div><img width="250" src={ProfileIcon} /></div>
                <div id="profile-text">
                <p>Hello, I am</p>
                <h2>Julian Lim Jun Ren</h2>
                <p>Boston University Student</p>
                <div class="icons">
                    <a target="_blank" href="https://linkedin.com/julian-lim-jun-ren"><img id="linkedin-img" width="60" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
                    <a target="_blank" href="https://github.com/julianl05"><img id="github-img" width="60" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                </div>
                </div>
        </div>
    );
}
export default Profile