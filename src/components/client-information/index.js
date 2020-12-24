import React from 'react';
import { useEffect, useState } from 'react';
import {useStaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image"

const getContentfulData = graphql`
{
  allContentfulClientInformation {
    nodes {
      id
      isLive
      isManage
      title
      liveDesktopUrl
      liveMobileUrl
      stagingDesktopUrl
      stagingMobileUrl
      host
      clientStatus
      slug
    }
  }
}
`

const ClientInformation = () => {

  const { 
    allContentfulClientInformation: { 
      nodes: data
    }    
  } = useStaticQuery(getContentfulData);

  const [clientList, setClientList] = useState(data);

  // SITE MANAGE FUNCTION
  const filterSiteManage = (e) => {

    if(e == "true"){
      // T1 Manage
      setClientList(data.filter((client) => {
        return client.isManage == true;
      }))
    }else if(e == "false"){
      // T1 Manage
      setClientList(data.filter((client) => {
        return client.isManage == false;
      }))
    } else {
      setClientList(data)
    }
  }
  // END SITE MANAGE FUNCTION
  
  // Client List Template
  const getClientInfo = clientList.map((client) => {
    return (
      <div className="client-box-wapper" key={client.id}>
        <h3>
          {client.title}
        </h3>
        <p className={ client.isLive ? "client-live" : "client-not-live" }>
          {client.isLive ? "Live" : "Not Live"}
        </p>
        <div className="client-link-wrapper">
          <p className="text-bold">
            Production Website URL:
          </p>
          <a href={client.liveDesktopUrl} target="_blank">
            {client.liveDesktopUrl}
          </a>
          <a href={client.liveMobileUrl} target="_blank">
            {client.liveMobileUrl}
          </a>
        </div>
        <div className="client-link-wrapper">
          <p className="text-bold">
            Staging Website URL:
          </p>
          <a href={client.stagingDesktopUrl} target="_blank">
            {client.stagingDesktopUrl}
          </a>
          <a href={client.stagingMobileUrl} target="_blank">
            {client.stagingMobileUrl}
          </a>
        </div>
        <p className="host-wrapper">
          {client.host}
        </p>
        <p className={ client.isManage ? "client-live" : "client-not-live" }>
          {client.isManage ? "T1 Manage" : "Client Manage"}
        </p>
      </div>
    )
  })
  // End of Client List Template

  return (
    <>
      <div className="client-btn-wrapper">
        <p>Site Management</p>
        <button onClick={ () => filterSiteManage("") }>All</button>
        <button onClick={ () => filterSiteManage("true") }>T1 Manage</button>
        <button onClick={ () => filterSiteManage("false") }>Client Manage</button>
      </div>
      <div className="client-info-wrapper">
        { getClientInfo }
      </div>
    </>
  )
}

export default ClientInformation
