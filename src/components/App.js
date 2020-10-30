import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header/>
    {notes.map(onenote => <Note  key = {onenote.key}  title = {onenote.title}  content = {onenote.content}/>)}
      <Footer />
    </div>
  );
}

export default App;
