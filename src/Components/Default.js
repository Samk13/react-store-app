import React from 'react';

export default class Default extends React.Component {
  render() {
    
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto text-center text-title text-upercase pt-5 '>

        <h2 className='display-3'>404</h2>
        <h2>Page not Found</h2>
        <h3>the requested URL<span className='text-danger'>{this.props.location.pathname}</span> is not found</h3>
          </div>
        </div>
      </div>
    );
  }
}
