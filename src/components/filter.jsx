import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <div className='filter-result'>{this.props.count} Products</div>
        {/* filter ORDER section */}
        <div className='filter-sort'>
          {' '}
          Order{' '}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value='last'>latest</option>
            <option value='lowset'>lowset</option>
            <option value='hightes'>Hightes</option>
          </select>
        </div>
        {/* filter section */}
        <div className='filter-size'>
          Filter{' '}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value='all'>All</option>
            <option value='xs'>XS</option>
            <option value='s'>S</option>
            <option value='m'>M</option>

            <option value='xl'>XL</option>
            <option value='xxl'>XXL</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filter
