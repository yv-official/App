import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Chat as ChatIcon,
        Home as HomeIcon,
        Notifications as NotificationsIcon,
        SearchRounded as SearchIcon,
        Apps as AppsIcon
} from '@material-ui/icons';

// import icons from '../images/icons.svg';
import userImage from '../images/profile.jpg'

const StyledBadge = withStyles((theme) => ({
    badge: {
      top: 4,
      right: 4,
      border: `3px solid rgb(66,103,178)`,
      padding: '6px 6px',
      borderRadius: '50%'
    },
  }))(Badge);

  const ContentBadge = withStyles((theme) => ({
    badge: {
      top: 3,
      right: 3,
      border: `3px solid rgb(66,103,178)`,
      padding: '2px 2px',
    },
  }))(Badge);

class Header extends React.Component {
    state = { addClassName : 'header hide', location: ''}

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        window.onload = () => {
            this.setState({ location: window.location.pathname})
            console.log(this.state.location, window.location.pathname)
        }
    }
    
    // componentWillUnmount(){
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    
    handleScroll = (event) => {
        let scrollTop = window.pageYOffset;
        if(scrollTop > 665){
            this.setState({
                addClassName: 'header'
            });
        }else{
            this.setState({
                addClassName: 'header hide'
            });
        } 
    }

    // svgRender = (iconName, classname ) => {
    //     const useTag = `<use xlink:href="${icons}#icon-${iconName}" />`;
    //     return <svg className={`${classname}__icon`} dangerouslySetInnerHTML={{__html: useTag }} />;
    // }

    onAuthRender = () => {
        
        if(true){
            return (
                <>
                <form action='#' className='search'>
                    <input type='text' className='search__input' placeholder='Search' />
                    <button className='search__button'>
                        <SearchIcon fontSize='large' />
                    </button>
                </form>
                <nav className='user-nav'>
                    <Link to='/feeds' className='link'>
                    <div className='user-nav__icon-box'>
                        <StyledBadge color="secondary" variant='dot'>
                            <HomeIcon fontSize={"large"} />
                        </StyledBadge>
                    </div>
                    </Link>
                    
                    <Link to='/feeds' className='link'>
                    <div className='user-nav__icon-box'>
                        <ContentBadge color="secondary" style={{ fontSize: '1rem'}} badgeContent={7} max={99}>
                            <ChatIcon />
                        </ContentBadge>
                    </div>
                    </Link>
                    <Link to='/feeds' className='link'>
                    <div className='user-nav__icon-box'>
                        <ContentBadge color="secondary" badgeContent={0} max={99}>
                            <NotificationsIcon />
                        </ContentBadge>
                    </div>
                    </Link>
                
                <div className='user-nav__user'>
                    <img src={userImage} alt='User' className='user-nav__user-photo'/>
                    {/* <Avatar src={userImage} alt='user Name' /> */}
                </div>
                </nav> 

                <div className='user-nav__icon-box app-icon'>
                    <AppsIcon fontSize='large'/>
                </div>
                
                </>
            );
        }
        else{
            return (
                <div className="right-floated-section">
                    <div className='nav-button'>
                        <Link to='/login' className='link'>
                        <button className='login-button'>Log In</button>
                        </Link>
                    </div>
                </div> 
            );
        }
    }

    render(){
        return (
            <div className={ this.state.location !== '/login' || this.state.location !== '/signup' ?( this.state.location === '/' ? `${this.state.addClassName}` : 'header') : 'header hide' } ref='target'>
            
                <Link to='/' className='link'>
                <div className='header-main--logo'>
                    {/* <img src={logo} alt='HBTU_Connect' /> */}
                    <div className='header-main--logo-primary'>HBTU </div>
                    <div className='header-main--logo-secondary'>Connect</div>
                </div>
                </Link>
                {this.onAuthRender()}
            </div>
        );
    }
}

export default Header;