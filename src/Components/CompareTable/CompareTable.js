import React from "react";
import { connect } from "react-redux";
import "./CompareTable.css";
import { v4 as uuidv4 } from "uuid";

function CompareTable(props) {
  return (
    <>
      <h5 className='Table__heading'>Comparision table</h5>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>id</th>
            <th>url</th>
            <th>title</th>
          </tr>
          {props.comparedData?.map((item) => {
            return (
              <tr key={uuidv4()}>
                <td>
                  <img
                    className='Table__Img'
                    alt='photo_images'
                    src={item.url}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.url}</td>
                <td>{item.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    comparedData: state.comparedData,
  };
};

export default connect(mapStateToProps, null)(CompareTable);
