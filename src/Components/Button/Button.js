import React, { useState } from "react";
import { connect } from "react-redux";
import { AddingData, DeleteData } from "../../Store/actions/Actions";

function Button(props) {
  const [isRemoveBtnActive, setIsRemoveBtnActive] = useState(false);

  const handleRemove = () => {
    setIsRemoveBtnActive(false);

    props.DeletingComparisions(props.itemId);
  };

  const handleCompare = () => {
    setIsRemoveBtnActive(true);

    props.comparingData({
      id: props.itemId,
      title: props.itemTitle,
      url: props.itemUrl,
    });
  };

  return (
    <div>
      <button
        className='Photo__button'
        onClick={!isRemoveBtnActive ? handleCompare : handleRemove}
      >
        {isRemoveBtnActive ? "Remove" : "compare"}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    CompareData: state.CompareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    comparingData: (data) => dispatch(AddingData(data)),
    DeletingComparisions: (id) => dispatch(DeleteData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
