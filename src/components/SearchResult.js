import React, { Component } from 'react'
import axios from 'axios'

export default class SearchResult extends Component {

    constructor(props){
        super()
        this.state={
            searchData:null,
            noData:false,
            year:"",
            type:"",
        }
    }
    search(search){
        console.log(search)
    
        /*  FETCH FUNCTION FOR TRY
        fetch("http://www.omdbapi.com/?s="+search+"&apikey=91d036d1").then((data)=>{
            data.json().then((resp)=>{
                console.log(resp.Search,"resp");
                this.setState({searchData:resp.Search})
            })
        })
        */
       
       axios.get("http://www.omdbapi.com/?s=" + search + "&apikey=91d036d1").then(res=>{
            this.setState({searchData: res.data.Search})
       })
    }
    
    render() {
        return (
            <>
          <div className = "navbar navbar-dark bg-dark">
              <form class="form-inline my-2 my-lg-0" >
                <input
                  type="search"
                  placeholder="Search"
                  className="form-control mr-sm-2"
                  onChange={(e) => {
                    this.search(e.target.value);
                  }}
                />

              </form>
            </div>
            <div>
              <div className="col-md-9 offset-md-2">
              {this.state.searchData ? (
                <div className="row">
                  {this.state.searchData.map((item) => (
                    <div className="card" style={{width:300,margin:10}}>
                        <img src={item.Poster} className="card-img-top" />
                        <div className="card-body">
                        <h5 className="card-title">{item.Title}</h5>
                        <h6 className="card-text">({item.Year})</h6>
                        </div>
                    </div>
                  ))}
                </div>
              ) : null}
              </div>
            </div>
          </>
        );
    }
}
