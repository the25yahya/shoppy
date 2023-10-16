import React from 'react'
import { ChartComponent, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesCollectionDirective } from '@syncfusion/ej2-react-charts/src'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import PropTypes from 'prop-types';


const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="stack chart"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      legendSettings={{background:'white'}}
    >
      <Inject
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}


Stacked.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Stacked