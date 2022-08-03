import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext, FirebaseContext } from "../../store/Context";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const date=new Date;
  const history=useHistory()

  const handleSubmit = (e) => {
   
    firebase
      .storage()
      .ref(`/image/${image.name}`) //put for upload
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            url,
            price,
            userId:user.uid,
            createdDate:date.toDateString()
          })
          history.push('/')
        });
      });
  };
  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="">Category</label>
          <br />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="">Price</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id=""
          />
          <img src={image ? URL.createObjectURL(image) : ""} alt="" />

          <br />
          <br />
          <button  className="uploadBtn"  onClick={handleSubmit}>Upload and submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;
