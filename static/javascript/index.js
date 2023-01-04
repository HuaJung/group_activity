import { fetchCity, cityTransfer } from "./index2.js"

const wrapper = document.querySelector(".wrapper");
const attractionBox = document.querySelector(".attraction_box");

const northBox = document.querySelector(".north_box");
const westBox = document.querySelector(".west_box");
const southBox = document.querySelector(".south_box");
const eastBox = document.querySelector(".east_box");
const north = document.querySelector(".north");
const west = document.querySelector(".west");
const south = document.querySelector(".south");
const east = document.querySelector(".east");

const northTitle = document.querySelector(".north_title");
const westTitle = document.querySelector(".west_title");
const southTitle = document.querySelector(".south_title");
const eastTitle = document.querySelector(".east_title");
const titles = document.querySelectorAll(".title");

// const northTitleH2 = document.querySelector(".north_title h2");
// const westTitleH2 = document.querySelector(".west_title h2");
// const southTitleH2 = document.querySelector(".south_title h2");
// const eastTitleH2 = document.querySelector(".east_title h2");

// insideBox 不需要做
const northInsideBox = document.querySelector(".north_inside_box");
const westInsideBox = document.querySelector(".west_inside_box");
const southInsideBox = document.querySelector(".south_inside_box");
const eastInsideBox = document.querySelector(".east_inside_box");

const keelung = document.querySelector(".keelung");
const taipei = document.querySelector(".taipei");
const newtaipeicity = document.querySelector(".newtaipeicity");
const taoyuan = document.querySelector(".taoyuan");
const hsinchu = document.querySelector(".hsinchuCounty");
const north_districts = document.querySelectorAll(".north_district");

let cityIsClick = false;
let tempNorth;

titleInit();
taiwanInit();
districtClickInit();

function taiwanInit(){
  northBox.addEventListener("click", ()=>{
    north.classList.add("img_click");
    west.classList.add("img_fade");
    south.classList.add("img_fade");
    east.classList.add("img_fade");
    northBox.style = "pointer-events: none;"; 
    westBox.style = "pointer-events: none;"; 
    southBox.style = "pointer-events: none;"; 
    eastBox.style = "pointer-events: none;";

    keelung.style = "pointer-events: none;";
    taipei.style = "pointer-events: none;";
    newtaipeicity.style = "pointer-events: none;";
    taoyuan.style = "pointer-events: none;";
    hsinchu.style = "pointer-events: none;";

    setTimeout(()=>{
      keelung.classList.add("show");
      taipei.classList.add("show");
      newtaipeicity.classList.add("show");
      taoyuan.classList.add("show");
      hsinchu.classList.add("show");

      keelung.style = "pointer-events: auto;";
      taipei.style = "pointer-events: auto;";
      newtaipeicity.style = "pointer-events: auto;";
      taoyuan.style = "pointer-events: auto;";
      hsinchu.style = "pointer-events: auto;";
    }, 1000)

    setTimeout(()=>{
      wrapper.addEventListener("click", function out(e){
        if(!attractionBox.contains(e.target) && 
        !keelung.contains(e.target)&&
        !taipei.contains(e.target)&&
        !newtaipeicity.contains(e.target)&&
        !taoyuan.contains(e.target)&&
        !hsinchu.contains(e.target)){
          north.classList.remove("img_click");
          setTimeout(()=>{
            west.classList.remove("img_fade");
            south.classList.remove("img_fade");
            east.classList.remove("img_fade");

            north_districts.forEach((district) => {
              district.classList.remove("active");
            })
          }, 200)
          northBox.style = "pointer-events: auto;"; 
          westBox.style = "pointer-events: auto;"; 
          southBox.style = "pointer-events: auto;"; 
          eastBox.style = "pointer-events: auto;";

          keelung.classList.remove("show");
          taipei.classList.remove("show");
          newtaipeicity.classList.remove("show");
          taoyuan.classList.remove("show");
          hsinchu.classList.remove("show");

          setTimeout(()=>{
            attractionBox.classList.remove("big_district_out");
            northTitle.classList.remove("title_off");

          }, 300)
          document.querySelector(".detail_box").classList.remove("show");   
          cityIsClick = false;

          wrapper.removeEventListener("click", out);
        }
      })
    }, 100)
  })

  westBox.addEventListener("click", ()=>{
    north.classList.add("img_fade");
    west.classList.add("img_click");
    south.classList.add("img_fade");
    east.classList.add("img_fade");
    northBox.style = "pointer-events: none;"; 
    westBox.style = "pointer-events: none;"; 
    southBox.style = "pointer-events: none;"; 
    eastBox.style = "pointer-events: none;";

    setTimeout(()=>{
      wrapper.addEventListener("click", function out(e){
        if(!attractionBox.contains(e.target) && !westInsideBox.contains(e.target)){
          west.classList.remove("img_click");
          setTimeout(()=>{
            north.classList.remove("img_fade");
            south.classList.remove("img_fade");
            east.classList.remove("img_fade");
          }, 200)
          northBox.style = "pointer-events: auto;"; 
          westBox.style = "pointer-events: auto;"; 
          southBox.style = "pointer-events: auto;"; 
          eastBox.style = "pointer-events: auto;";
          wrapper.removeEventListener("click", out);
        }
      })
    }, 100)
  })

  southBox.addEventListener("click", ()=>{
    north.classList.add("img_fade");
    west.classList.add("img_fade");
    south.classList.add("img_click");
    east.classList.add("img_fade");
    northBox.style = "pointer-events: none;"; 
    westBox.style = "pointer-events: none;"; 
    southBox.style = "pointer-events: none;"; 
    eastBox.style = "pointer-events: none;";

    setTimeout(()=>{
      wrapper.addEventListener("click", function out(e){
        if(!attractionBox.contains(e.target) && !southInsideBox.contains(e.target)){
          south.classList.remove("img_click");
          setTimeout(()=>{
            north.classList.remove("img_fade");
            west.classList.remove("img_fade");
            east.classList.remove("img_fade");
          }, 200)
          northBox.style = "pointer-events: auto;"; 
          westBox.style = "pointer-events: auto;"; 
          southBox.style = "pointer-events: auto;"; 
          eastBox.style = "pointer-events: auto;";
          wrapper.removeEventListener("click", out);
        }
      })
    }, 100)
  })

  eastBox.addEventListener("click", ()=>{
    north.classList.add("img_fade");
    west.classList.add("img_fade");
    south.classList.add("img_fade");
    east.classList.add("img_click");
    northBox.style = "pointer-events: none;"; 
    westBox.style = "pointer-events: none;"; 
    southBox.style = "pointer-events: none;"; 
    eastBox.style = "pointer-events: none;";

    setTimeout(()=>{
      wrapper.addEventListener("click", function out(e){
        if(!attractionBox.contains(e.target) && !eastInsideBox.contains(e.target)){
          east.classList.remove("img_click");
          setTimeout(()=>{
            north.classList.remove("img_fade");
            west.classList.remove("img_fade");
            south.classList.remove("img_fade");
          }, 200)
          northBox.style = "pointer-events: auto;"; 
          westBox.style = "pointer-events: auto;"; 
          southBox.style = "pointer-events: auto;"; 
          eastBox.style = "pointer-events: auto;";
          wrapper.removeEventListener("click", out);
        }
      })
    }, 100)
  })
}

function districtClickInit(){
  north_districts.forEach((district, index)=>{
    district.onclick = ()=>{
      district.classList.add("active");
      attractionBox.classList.add("big_district_out");

      // keelung
      if(index == 0){
        if(tempNorth == index){
          return
        }
        cityClick("keelung", tempNorth, index);
        tempNorth = index;
      }
      // taipei
      if(index == 1){ 
        if(tempNorth == index){
          return
        }
        cityClick("taipei");
        tempNorth = index;

      }
      // newTaipei
      if(index == 2){ 
        if(tempNorth == index){
          return
        }
        cityClick("newTaipei");
        tempNorth = index;
      }
      // taoyuan
      if(index == 3){ 
        if(tempNorth == index){
          return
        }
        cityClick("taoyuan");
        tempNorth = index;
      }
      // hsinchuCounty
      if(index == 4){ 
        if(tempNorth == index){
          return
        }
        cityClick("hsinchuCounty");
        tempNorth = index;
      }

      north_districts.forEach((dis, j)=>{
        if(index != j){
          dis.classList.remove("active");
        }
      })
    }
  })
}

function cityClick(city){
  if(cityIsClick){
    document.querySelector(".detail_box").classList.remove("show");
  }
  titles.forEach(title => {
    title.classList.add("title_off");
  })
  setTimeout(()=>{
    fetchCity(city);
  }, 300)
  cityIsClick = true;
}



function titleInit(){
  let titleH2Lst = document.querySelectorAll(".title h2")
  titleH2Lst.forEach((titleH2, i)=>{
    titleH2.onclick = ()=>{
      if(i == 0 && northTitle.classList.contains("title_off")){
        setTimeout(()=>{
          northTitle.classList.remove("title_off");
        }, 100)
        westTitle.classList.add("title_off");
        southTitle.classList.add("title_off");
        eastTitle.classList.add("title_off");
      }else if(i == 1 && westTitle.classList.contains("title_off")){
        setTimeout(()=>{
          westTitle.classList.remove("title_off");
        }, 100)
        northTitle.classList.add("title_off");
        southTitle.classList.add("title_off");
        eastTitle.classList.add("title_off");
      }else if(i == 2 && southTitle.classList.contains("title_off")){
        setTimeout(()=>{
          southTitle.classList.remove("title_off");
        }, 100)
        northTitle.classList.add("title_off");
        westTitle.classList.add("title_off");
        eastTitle.classList.add("title_off");
      }else if(i == 3 && eastTitle.classList.contains("title_off")){
        setTimeout(()=>{
          eastTitle.classList.remove("title_off");
        }, 100)
        northTitle.classList.add("title_off");
        westTitle.classList.add("title_off");
        southTitle.classList.add("title_off");
      }
    }
  })

  setTimeout(()=>{
    northTitle.classList.remove("title_off");
  }, 100)
}

// fetchIndexPage();

fetch("/api/home/activities")
.then((response) => response.json())
.then((data) => {
  if(data){
    // console.log(data)
    titles.forEach((title, i) => {
      let pic1 = data.data[2*i].Picture.PictureUrl1;
      if(pic1 === undefined){
        pic1 = "/static/image/picture404_2.svg";
      }

      let pic2 = data.data[2*i+1].Picture.PictureUrl1;
      if(pic2 === undefined){
        pic2 = "/static/image/picture404_2.svg";
      }

      // let address1 = data.data[2*i].Address;
      // if(address1 === undefined){
      //   address1 = "";
      // }

      // let address2 = data.data[2*i+1].Address;
      // if(address2 === undefined){
      //   address2 = "";
      // }

      let location1 = data.data[2*i].Location;
      if(location1 === "to see the official site"){
        location1 = "請查詢官網"
      }

      let location2 = data.data[2*i+1].Location;
      if(location2 === "to see the official site"){
        location2 = "請查詢官網"
      }

      let city1 = cityTransfer(data.data[2*i].City)
      let city2 = cityTransfer(data.data[2*i+1].City)

      let html = `
      <div class="title_rows">
        <div class="attraction">
          <a href="/activity?city=${city1}&activityID=${data.data[2*i].ActivityID}">
            <div class="attraction_img_box">
              <div class="attraction_img notfound"></div>
              <div class="attraction_img found" style="background-image: url('${pic1}');"></div>
            </div>
          </a>
          <h5 class="attraction_name">${data.data[2*i].ActivityName}</h5>
          <h6 class="attraction_district">${location1}</h6>
        </div>
        <div class="attraction">
          <a href="/activity?city=${city2}&activityID=${data.data[2*i+1].ActivityID}">
            <div class="attraction_img_box">
              <div class="attraction_img notfound"></div>
              <div class="attraction_img found" style="background-image: url('${pic2}');"></div>
            </div>
          </a>
          <h5 class="attraction_name">${data.data[2*i+1].ActivityName}</h5>
          <h6 class="attraction_district">${location2}</h6>
        </div>
      </div>
      `;
      title.insertAdjacentHTML('beforeEnd', html);
    })
  }
})


