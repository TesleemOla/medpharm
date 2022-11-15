import React from "react"
import "./styles/OnboardingPage/detailssetup.scss"

const DetailsSetup=({formvalues, setFormvalues})=>{
    return (
       <div className="form">
          <div className="input-grp">
                    <label>
                      Please upload an avatar   
                    </label>            
                        <input type="file"
                        accept="image/*"
                        onChange={(e)=> {
                         let reader = new FileReader()
                          reader.readAsDataURL(e.target.files[0])

                          reader.onload=(e)=>{
                            setFormvalues({...formvalues, img: e.target.result})
                          }
                        }}
                        />
                    

                    </div>
      </div>
    );
}

export default DetailsSetup;