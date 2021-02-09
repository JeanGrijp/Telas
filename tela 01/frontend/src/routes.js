import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import home from './pages/home/';
import local from './pages/local/';
import profile from './pages/profile';
import settingss from './pages/settingss';
import search from './pages/search';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={home}/>
        <Route path="/search" exact component={search}/>
        <Route path="/local" exact component={local}/>
        <Route path="/settingss" exact component={settingss}/>
        <Route path="/profile" exact component={profile}/>
      </Switch>
    </BrowserRouter>
  )
}
