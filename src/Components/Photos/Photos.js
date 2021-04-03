import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AddingData, fetchDataResponse } from "../../Store/actions/Actions";
import "./Photos.css";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";

const Photos = (props) => {
  return (
    <>
      {props.loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className='Photos'>
          {props.fetchedData.map((item) => {
            return (
              <>
                <div key={uuid()} className='Photos_AlignMent'>
                  <img
                    className='Photos_img'
                    src={item.thumbnailUrl}
                    alt='post_images'
                  />
                  <ul>
                    <li>
                      <span>title:</span>
                      {item.title}
                    </li>
                    <li>
                      <span>Id:</span>
                      {item.id}
                    </li>
                    <li>
                      <span>Url:</span>
                      {item.thumbnailUrl}
                    </li>
                  </ul>

                  <Button
                    itemId={item.id}
                    itemUrl={item.url}
                    itemTitle={item.title}
                  />
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchedData: state.fetchedData,
    loading: state.loading,
    CompareData: state.CompareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    comparingData: (data) => dispatch(AddingData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
