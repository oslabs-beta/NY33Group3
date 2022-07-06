import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TotalCpuMemory from '../components/TotalCpuMemory.jsx';
import MemUsage from '../components/MemUsage.jsx';
import CpuUsage from '../components/CpuUsage.jsx';
import ClusterResourcesDisplay from '../components/ClusterResourcesDisplay.jsx';
import CustomQueryInput from '../components/CustomQueryInput.jsx';

import { getCpuUsage, selectCpuUsage, selectMemUsage, selectNetwork } from '../reducers/networkSlice.js';
import NodeChartsContainer from '../components/resources/NodeChartsContainer.jsx';

// not sure if we'll be getting cpu/mem data via state or somewhere else ...
  // need to pass props into components whenever this is resolved.

const ResourcesContainer = props => {
  
  // const dispatch = useDispatch();
  //    ipcRenderer.send('load:apiResources');
  //    ipcRenderer.on('get:apiResources', (e, data) => {
  //      setApiResources(data);
  //    });
	// setTimeout(() => {
  //   promClientEmitters()}, 15000)
  
  const cpuUsage = useSelector(selectCpuUsage)
  const memUsage = useSelector(selectMemUsage)
  const { totalMem, totalCpu } = useSelector(selectNetwork)
  return (
    <div className="ResourcesContainer">
      <div className="CpuMemoryContainer">
        <TotalCpuMemory totalMem={totalMem} totalCpu={totalCpu}/>
        <MemUsage memUsage={memUsage} />
        <CpuUsage cpuUsage={cpuUsage} />
      </div>
      <div className="ClusterResourcesContainer">
        <CustomQueryInput />
        <ClusterResourcesDisplay />
      </div>
      <div>
        <NodeChartsContainer />
      </div>
    </div>
  );
};

export default ResourcesContainer;