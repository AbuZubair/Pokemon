import React, { useState, useEffect, useRef, Component } from 'react';

export default function WebDetail () {
 
  return (
    <>
      <div className="no-results m-4">
        <div className="no-results__text">
          <p>This website was build using:</p>
          <ul>
            <li>React</li>
            <li>React Hooks</li>
            <li>GraphQL using Apollo Client</li>
            <li>Webpack</li>
            <li>Firestore Database</li>
            <li>Google Analytics</li>
          </ul>
        </div>
      </div>

    </>
    
  );
  
}
