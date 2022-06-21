import React from 'react';
import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNamespaces, addDeployments, addPods, addServices, selectNamespaces } from '../../reducers/clustersSlice';
import Deployments from './Deployments.jsx';
import Pods from './Pods.jsx';
import Services from './Services.jsx';



const Namespaces = () => {
  
  const [open, setOpen] = useState(false);
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div className="ClustersContainer1">
        <div className="ClusterObjectsContainer">
          <div className="PrimaryClusterObjectsHeader">
            <p> Current Namespaces </p>
            <button id="testButton" onClick={() => setOpen(!open)}>Open</button>
            {allOpen && <button id="collapseAll" onClick={() => setAllOpen(!allOpen)}>Collapse All</button>}
            {!allOpen && <button id="expandAll" onClick={() => setAllOpen(!allOpen)}>Expand All</button>}

          </div>
          <div className="ClusterObjects">
          </div>
          <div>
            { useSelector(selectNamespaces).map( (namespace, idx) => {
              if (namespace.name) {
                return (
                  <div key={`namespaces${idx}`} className="NamespaceContainer">
                    <div key={`${namespace.name}${idx}`} className="namespace-item">
                      <p id="name">{namespace.name}</p>
                      <p id={`${namespace.status}`}>{namespace.status}</p> 
                    </div>
                    {allOpen && <Deployments openState={allOpen} key={`deployments${idx}`} namespace={namespace.name}/>}
                    {open && !allOpen && <Deployments openState={allOpen} key={`deployments${idx}`} namespace={namespace.name}/>}


                    {allOpen && <Pods openState={allOpen} key={`pods${idx}`} namespace={namespace.name}/>}
                    {open && !allOpen && <Pods openState={allOpen} key={`pods${idx}`} namespace={namespace.name}/>}


                    {allOpen && <Services openState={allOpen} key={`services${idx}`} namespace={namespace.name}/>}
                    {open && !allOpen && <Services openState={allOpen} key={`services${idx}`} namespace={namespace.name}/>}
                  </div>
                  <Deployments namespace={namespace.name}/>
                  <Pods namespace={namespace.name}/>
                  <Services namespace={namespace.name}/>
                </div>
              );
            }
          }
          )}
          </div>
        </div>
    </div>
  );

}


export default Namespaces;