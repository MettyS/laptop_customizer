import React from 'react';
import slugify from 'slugify';


function FeatureItem (props){
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const options = props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));

    return (

      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(props.featureName)}
          checked={item.name === props.selectedName}
          onChange={e => props.updateFeature(props.featureName, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>

    );
  });
  
  return (
    <fieldset className="feature" key={props.featureHash}>
    <legend className="feature__name">
      <h3>{props.featureName}</h3>
    </legend>
    {options}
  </fieldset>
  )
  
}

export default FeatureItem