import { useSelector } from 'react-redux'

function AirlineTable() {
  const airlineNames = useSelector((store) => store.airlineNames)


  return (
    <div>
      <table>
        <tbody>
          {
            airlineNames.map((name) => {
              return (
              <tr>
                <td>
                  {name}
                </td>
              </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  )
}

export default AirlineTable;