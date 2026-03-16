import React from 'react'

const FlavorsPage = () => {
  return (
<div className="flavors-page"> 
  <Header /> 
  <div className="content"> 
    <FlavorCatalog /> 
    <OrderList /> 
  </div> 
  <Footer /> 
</div> 

  )
}

export default FlavorsPage
