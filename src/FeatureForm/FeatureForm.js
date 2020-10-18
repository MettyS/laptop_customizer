import React, { Component }from 'react';
import FeatureItem from '../FeatureItem/FeatureItem'


class FeatureForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() { 
    const formFeatures = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      
  
      return (
        <FeatureItem 
        featureName={feature}
        feature={this.props.features[feature]} 
        featureHash={featureHash}
        updateFeature={(feature, item) => {this.props.updateFeature(feature, item)}}
        />
      );
    });
    
    
    
    
    
    
    return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {formFeatures}
    </form>
  )
  }
}

export default FeatureForm