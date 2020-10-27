import React from 'react';
import OptionSummary from '../OptionSummary/OptionSummary'

function CartSummary (props) {

  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <OptionSummary 
        featureName={feature} 
        featureHash={featureHash}
        selectedOption={selectedOption}
      />
    );
  });

  return (
    <>
    {summary}
    </>
  )

}

export default CartSummary