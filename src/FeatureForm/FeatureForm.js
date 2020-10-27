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
      console.log(feature);
      console.log('selected is', this.props.selected[feature]);
      
  
      return (
        <FeatureItem 
        featureName={feature}
        feature={this.props.features[feature]} 
        featureHash={featureHash}
        updateFeature={(feature, item) => {this.props.updateFeature(feature, item)}}
        selectedName={this.props.selected[feature].name}
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