/* eslint-disable react/prop-types */
import { Link, MapPin, TwitterLogo } from '@phosphor-icons/react'

function UserCard(props) {

  function convertDate(datetime) {
    const date = new Date(datetime);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short"});
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const joinDate = convertDate(props.user.created_at);

  return (
    <div>
      <section className={`user-card | flow radius | ${props.darkMode ? 'bg-secondary color-light-shade' : 'bg-light-shade color-secondary'}`}>
        <div className='user-top'>
          <img src={props.user.avatar_url} alt={props.user.name}/>
          <div id="flow">
            <div id="user-info-inner">
              <h2>{props.user.name ? props.user.name : props.user.login}</h2>
              <a 
              className='color-quaternary' 
              href={`https://github.com/${props.user.login}`} 
              target='_blank' 
              rel='noreferrer'
              >
                @{props.user.login}
              </a>
            </div>
            <p className='color-secondary'>Joined {joinDate}</p>
          </div>
        </div>

        <div id="user-middle" className='flow wrapper'>
          <p className={`bio ${!props.user.bio ? "not-available": ""}`}>{props.user.bio ? props.user.bio : "This profile has no bio"}</p>
          <div className={`stats | ${props.darkMode ? 'bg-secondary-shade' : 'bg-light'}`}>
            <div className="stat | flow">
              <h3 className={`${props.darkMode ? 'color-light' : 'color-secondary'}`}>Repos</h3>
              <p className={`${props.darkMode ? 'color-light' : 'color-secondary'}`}>
                {props.user.public_repos}
              </p>
            </div>
            <div className="stat | flow">
              <h3 className={`${props.darkMode ? 'color-light' : 'color-secondary'}`}>Followers</h3>
              <p className={`${props.darkMode ? 'color-light' : 'color-secondary'}`}>
                {props.user.followers}
              </p>
            </div>
            <div className="stat | flow">
              <h3 className={`${props.darkMode ? 'color-light' : 'color-secondary'}`}>Following</h3>
              <p className={`${props.darkMode ? 'color-light' : 'color-secondary'}`}>
                {props.user.following}
              </p>
            </div>
          </div>
        </div>

        <div id="user-bottom" className='flow wrapper'>
          <div className="links | flow">
            <div className={`linkWrapper ${!props.user.location ? "not-available" : ""}`}>
              <MapPin size={24}/>
              <p>{!props.user.location ? "Not Available" : props.user.location}</p>
            </div>
            <div className={`linkWrapper ${!props.user.blog ? "not-available" : ""}`}>
              <Link size={24}/>
              {
                !props.user.blog ?
                <p>Not Available</p>
                :
                <a href={props.user.blog} target='_blank' rel='noreferrer'>{props.user.blog}</a>
              }
            </div>
          </div>
          <div className="links | flow">
            <div className={`linkWrapper ${!props.user.twitter_username ? "not-available" : ""}`}>
              <TwitterLogo size={24}/>
              {
                !props.user.twitter_username ?
                <p>Not Available</p> :
                <a href={`https://twitter.com/${props.user.twitter_username}`} target="_blank" rel="noreferrer">{props.user.twitter_username}</a>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserCard;