import React from 'react';
import ApiResources from '../components/cluster_objects/ApiResources.jsx';
import Namespaces from '../components/cluster_objects/Namespaces.jsx';

// import { ipcRenderer } from 'electron';

const ClustersDetailsContainer = () => {
  return (
    <div className="clusterDetailsContainer">
      {/* <div className="ApdexHeaderBox"> */}
        {/* <h1>Apdex Score</h1> */}
      {/* </div> */}
      <Namespaces />
      <ApiResources />
    </div>
  );
}

export default ClustersDetailsContainer;