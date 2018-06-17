import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import PropTypes from 'prop-types';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = props => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(props.data)} {props.units}
    </div>
  </div>
);

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
};

export default Chart;
