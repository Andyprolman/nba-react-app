import React from 'react';

class Defense extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const {
      defensiveRebOne, defensiveRebTwo,
      versatilityOne, versatilityTwo,
      pandrHandlerOne, pandrHandlerTwo,
      pandrBigOne, pandrBigTwo,
      postDefenseOne, postDefenseTwo,
      rimProtectionOne, rimProtectionTwo
    } = this.props
    return(
      <div className='card' style={{textAlign: 'center'}}>
        <div className='card-header'>
          <h4>Defense</h4>
        </div>
        <div className='card-body'>
          <table>
            <tbody>
              <tr>
                <td>{defensiveRebOne}</td>
                <td>Defensive Rebounding</td>
                <td>{defensiveRebTwo}</td>
              </tr>
              <tr>
                <td>{versatilityOne}</td>
                <td>Defensive Versatiltiy</td>
                <td>{versatilityTwo}</td>
              </tr>
              <tr>
                <td>{pandrHandlerOne}</td>
                <td>Pick and Roll Handler</td>
                <td>{pandrHandlerTwo}</td>
              </tr>
              <tr>
                <td>{pandrBigOne}</td>
                <td>Pick and Roll Big</td>
                <td>{pandrBigTwo}</td>
              </tr>
              <tr>
                <td>{postDefenseOne}</td>
                <td>Post Defense</td>
                <td>{postDefenseTwo}</td>
              </tr>
              <tr>
                <td>{rimProtectionOne}</td>
                <td>Rim Protection</td>
                <td>{rimProtectionTwo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Defense