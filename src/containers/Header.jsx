import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';

import HeaderComponent from '../components/Header';

const Header = () => {
  const history = useHistory();
  const gotoRoot = (e) => {
    if(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    history.push('/');
  }

  return <HeaderComponent gotoRoot={gotoRoot}/>;
}
export default withRouter(Header);