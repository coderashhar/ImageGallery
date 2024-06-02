import Image from "./Image";
export default function ImageGallery(){
    return (
    <>
      <div style={{display:"flex",paddingLeft:"100px"}}>
        <Image imageURL={"https://images.unsplash.com/photo-1602866846830-cdd275073c0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"}
               author={"Tim Hüfner"}/>
        <Image imageURL={"https://images.unsplash.com/photo-1584554180896-ac04f2537005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"}
               author={"Jorgen Hendriksen "}/>
        <Image imageURL={"https://images.unsplash.com/photo-1590326926537-a3769bb4c913?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D"}
               author={"Scott Evans"}/>
      </div>
      <div style={{display:"flex",paddingLeft:"100px"}}>
      <Image imageURL={"https://images.unsplash.com/photo-1548080819-84b0d779e8e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D"}
             author={"Daniele D'Andreti"}/>
      <Image imageURL={"https://plus.unsplash.com/premium_photo-1667339610013-020844b87990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"}
             author={"Tamara Bitter"}/>
      <Image imageURL={"https://images.unsplash.com/photo-1597871040916-4b4c20ba08dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"}
             author={"Ramin Talebi"}/>
    </div>
    </>
    )
}