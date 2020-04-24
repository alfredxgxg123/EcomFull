import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.component.jsx';


// const TopicsList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>hasts page</h1>
//     </div>
//   );
// };

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         hasts page
//         {props.match.params.id}
//       </h1>
//     </div>
//   );
// };


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={TopicsList} />
        <Route path="/topics/:id" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
